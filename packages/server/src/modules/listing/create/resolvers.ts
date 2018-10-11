import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { Ticket } from "../../../entity/Ticket";
import { processUpload } from "../shared/processUpload";
import { listingCacheKey, ticketCacheKey } from "../../../constants";
import * as aws from 'aws-sdk';
import * as fs from "fs";
import { isAuthenticated } from "../../shared/isAuthenticated";
import { Artist } from "../../../entity/Artist";

// house.png
// aseq2-house.png
// image/png
// image/jpeg
// ['image', 'jpeg']
// 'jpeg'

export const resolvers: ResolverMap = {
  Mutation: {
    createListing: async (_, { input: { picture, artist,spotifyId, ...data } }, { session, redis }) => {
      isAuthenticated(session);

      const pictureUrl = picture ? await processUpload(picture) : null;
      const s3 = new aws.S3({
        signatureVersion: 'v4',
        region: 'us-west-1',
      });      
      fs.readFile('./images/'+pictureUrl, function(err, fileData) {
        console.log(err);
        let params = {
          Bucket:'last-minute-ticket',
          ACL: 'public-read',
          Key: pictureUrl,
          Body: fileData,
          ContentType: 'binary'
        };

        s3.putObject( params, ( error, data ) => {
                if( error ) console.log( error );
                console.log(data);
           });
      });
      
      const listing = await Listing.create({
        ...data,
        artist,
        pictureUrl,
        userId: session.userId
      }).save();

      const ticket = await Ticket.create({
        filename: pictureUrl,
        ownerId: session.userId,
        listingId: listing.id
      }).save();

      const artistExist = await Artist.findOne({where:{spotifyId}});
      if (!artistExist){
        await Artist.create({
          artistName:artist,
          spotifyId,
          addedBy: session.userId
        }).save();
      }

      redis.lpush(ticketCacheKey, JSON.stringify({tid:ticket.id,lid:listing.id}));
      redis.lpush(listingCacheKey, JSON.stringify(listing));

      return listing.id;
    }
  }
};


