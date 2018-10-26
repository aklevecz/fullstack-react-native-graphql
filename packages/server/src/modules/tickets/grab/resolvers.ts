import { ResolverMap } from "../../../types/graphql-utils";
import { Ticket } from "../../../entity/Ticket";
import { isAuthenticated } from "../../shared/isAuthenticated";
import { finderDefaultId,ticketCacheKey } from "../../../constants";

export const resolvers: ResolverMap = {
  Mutation: {
    grabTicket: async (_, { listingId }, { session,redis }) => {
      await isAuthenticated(session);
      await setTimeout(()=>{console.log('boop')}, Math.random()*1000);
      const availTicket = await Ticket.findOne({where:{listingId, finderId:finderDefaultId}});
      if (session.userId && availTicket){
        availTicket.finderId = session.userId;
        await availTicket.save();
        const tickets = await redis.lrange(ticketCacheKey, 0, -1);
        await redis.del(ticketCacheKey);
        const newTix = tickets.filter((x:string) => JSON.parse(x).tid !== availTicket.id);
        if ( newTix.length > 0 ) {
          await redis.lpush(ticketCacheKey, ...newTix);
        }
      } else {
        console.log("ticker has already been found, checking user...")
        const Ticky = await Ticket.findOne({where:{listingId, finderId:session.userId}});
        if (Ticky){
          return {ticketId:Ticky.filename};
        }
        return {ticketId:"gone"};
      }
      // checking if there is actually a ticket that belngs to the user
      await setTimeout(()=>{console.log('boop')}, Math.random()*1000);
      const theTicket = await Ticket.findOne({where:{listingId,finderId:session.userId}});
      console.log('THE TICKET RECHECK', theTicket);
      if (theTicket){
        return {ticketId:theTicket.filename};
      }
        return {ticketId:"gone"};
    }
  }
};
