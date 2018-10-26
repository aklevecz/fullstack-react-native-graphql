import { ResolverMap } from "../../../types/graphql-utils";
import { Ticket } from "../../../entity/Ticket";
import { isAuthenticated } from "../../shared/isAuthenticated";
import { finderDefaultId,ticketCacheKey } from "../../../constants";

function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const resolvers: ResolverMap = {
  Mutation: {
    grabTicket: async (_, { listingId }, { session,redis }) => {
      await isAuthenticated(session);
      sleep(Math.random()*1000);
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
      sleep(Math.random()*1000);
      const theTicket = await Ticket.findOne({where:{listingId,finderId:session.userId}});
      console.log('THE TICKET RECHECK', theTicket);
      if (theTicket){
        return {ticketId:theTicket.filename};
      }
        return {ticketId:"gone"};
    }
  }
};
