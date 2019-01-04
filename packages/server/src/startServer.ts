import "reflect-metadata";
// tslint:disable-next-line:no-var-requires
require("dotenv-safe").config();
import { GraphQLServer } from "graphql-yoga";
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import * as RateLimit from "express-rate-limit";
import * as RateLimitRedisStore from "rate-limit-redis";
import { applyMiddleware } from "graphql-middleware";
import * as express from "express";
import { RedisPubSub } from "graphql-redis-subscriptions";

import * as passport from 'passport';
import * as  SpotifyStrategy from 'passport-spotify';
import { redis } from "./redis";
import { createTypeormConn } from "./utils/createTypeormConn";
import { confirmEmail } from "./routes/confirmEmail";
import { genSchema } from "./utils/genSchema";
import { redisSessionPrefix, listingCacheKey, ticketCacheKey, finderDefaultId, userSessionIdPrefix } from "./constants";
import { createTestConn } from "./testUtils/createTestConn";
// import { middlewareShield } from "./shield";
import { middleware } from "./middleware";
import { userLoader } from "./loaders/UserLoader";
import { Listing } from "./entity/Listing";
import { Ticket } from "./entity/Ticket";
import { User } from "./entity/User";

import { htmlTemplate } from './template';
import { arTemplate } from './arTemplate';


const SESSION_SECRET = "ajslkjalksjdfkl";
const RedisStore = connectRedis(session as any);

export const startServer = async () => {
  if (process.env.NODE_ENV === "test") {
    await redis.flushall();
  }

  const schema = genSchema() as any;
  applyMiddleware(schema, middleware);

  const pubsub = new RedisPubSub(process.env.NODE_ENV === 'production' ? {
    connection: process.env.REDIS_URL as any
  } : {});


  const server = new GraphQLServer({
    schema,
    context: ({ request, response }) => ({
      redis,
      url: request ? request.protocol + "://" + request.get("host") : "",
      s3: "http://s3-us-west-1.amazonaws.com/last-minute-ticket",
      session: request ? request.session : undefined,
      req: request,
      res: response,
      userLoader: userLoader(),
      pubsub
    })
  });

  server.express.use(
    new RateLimit({
      store: new RateLimitRedisStore({
        client: redis
      }),
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      delayMs: 0 // disable delaying - full speed until the max limit is reached
    })
  );

  server.express.use(
    session({
      store: new RedisStore({
        client: redis as any,
        prefix: redisSessionPrefix
      }),
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        domain: 'localhost',
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    } as any)
  );

  server.express.use("/images", express.static("images"));
  server.express.use("/js", express.static("js"));
  server.express.use("/patterns", express.static("patterns"));
  server.express.use("/arAssets", express.static("arAssets"));


  const cors = {
    credentials: true,
    origin:
      process.env.NODE_ENV === "test"
        ? (process.env.FRONTEND_HOST as string)
        : (process.env.FRONTEND_HOST as string)
  };
  server.express.get("/confirm/:id", confirmEmail);

  if (process.env.NODE_ENV === "test") {
    await createTestConn(true);
  } else {
    await createTypeormConn();
    // await conn.runMigrations();
  }
  passport.use(
    new SpotifyStrategy.Strategy(
      {
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        callbackURL: process.env.BACKEND_HOST + '/auth/spotify/callback',
        includeEmail:true,
        passReqToCallback: true,
        scope: ['user-read-email', 'user-read-private'],
      },
      async (req:any, accessToken:any, refreshToken:any, expiresIn:any, profile:any, done:any) => {

        console.log(accessToken);
        console.log(refreshToken);
        console.log(expiresIn);
        console.log(profile._json);
        console.log(req.session.userId);
        const {id, display_name,email} = profile._json;

        let user = await User.findOne({where:{email}});
        if (!user){
          console.log('no email match');
                user = await User.create({
                email,
                password: email + refreshToken,
                spotifyId: id,
                spotifyName: display_name,
                spotifyRefreshToken: refreshToken,
          }).save();
          console.log(user);
        } else if (user.spotifyId==='null') {
          console.log("no id");
          user.spotifyId = id;
          user.spotifyName = display_name;
          user.spotifyRefreshToken = refreshToken;
          user.save();
        } else {
          console.log('we have a user');
          console.log('WAAAGGG');
          if (refreshToken !== user.spotifyRefreshToken){
            user.spotifyRefreshToken=refreshToken;
            user.save();
          }
          console.log(user.spotifyId);
        }

        req.session.spotifyAccessToken = accessToken;
        if (user){
          req.session.userId = user.id;
        }

        console.log(id,display_name,email);
        return done(null, profile);
      }
    )
  );
  server.express.use(passport.initialize());
  // server.express.use(passport.session());
  server.express.get('/auth/spotify', passport.authenticate('spotify'), (req, res) => {
    console.log(req);
    console.log(res);
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
  });  
  server.express.get(
    "/auth/spotify/callback",
    passport.authenticate("spotify", {session:false}),
    async (req,res) => {
      if (req.session){
        console.log(req.session.spotifyAccessToken);
      }
      // is this necessary?
      if (req.sessionID && req.session){
        await redis.lpush(`${userSessionIdPrefix}${req.session.userId}`, req.sessionID);
      }
      process.env.NODE_ENV === 'production' ? res.redirect(process.env.FRONTEND_HOST as string) : res.redirect('http://localhost:3000/');
    }
  );


  server.express.get("/AR", async (req, res) => {
    console.log(req.session);
    const { userId } = req.session!;
    const user = await User.findOne({id:userId});
    if (user){
      res.end(arTemplate());
    } else {
      res.end(arTemplate());
    }
  })

  server.express.get("/", (_,res) => {
    res.redirect(process.env.FRONTEND_HOST as string)
  })

  server.get('/ssr', ( req:any,res:any ) => {
    const { artist,venue,id } = req.query;
    console.log(artist);
    console.log(venue);
    console.log(id);
    res.end(htmlTemplate(artist,venue,id));
  });

  // clear the cache
  await redis.del(listingCacheKey);
  await redis.del(ticketCacheKey);
  // fill cache

  // mama mia date madness
  const today = new Date();
  today.setDate(today.getDate()-2);

  console.log(today);

  const listings = await Listing.find();

  // filter out old dates
  const currentListings = listings.filter((d) => today.valueOf() < Date.parse(d.date.toString()))

  const listingStrings = currentListings.map(x => JSON.stringify(x));

  const tickets = await Ticket.find({where:{finderId:finderDefaultId}});
  const ticketStrings = tickets.map(x => JSON.stringify({tid:x.id,lid:x.listingId}));

  // shitty logic for empty listing table
  if (listingStrings.length>0){
    console.log('HALLLOOOOOOO');
    await redis.lpush(listingCacheKey, ...listingStrings);
  }
  if (ticketStrings.length > 0 ){
    console.log('HALLLOOOOOOO2');
    await redis.lpush(ticketCacheKey, ...ticketStrings);
  }
  // shitshitshitty




  const port = process.env.PORT || 4000;
  const app = await server.start({
    cors,
    port: process.env.NODE_ENV === "test" ? 0 : port
  });
  console.log("Server is running on localhost:4000");

  return app;
};
