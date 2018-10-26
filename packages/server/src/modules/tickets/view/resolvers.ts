import { ResolverMap } from "../../../types/graphql-utils";
import { Ticket } from "../../../entity/Ticket";
import { isAuthenticated } from "../../shared/isAuthenticated";
import { Listing } from "../../../entity/Listing";

export const resolvers: ResolverMap = {
  Query: {
    viewTickets: async (_, __, { session }) => {
      await isAuthenticated(session);
      const tickies = await Ticket.find({where:{finderId:session.userId}});

      const tickieListings = tickies.map(async t=>{
        const listing = await Listing.findOne({where:{id:t.listingId}});
        
        if (listing){
          const lt = {id: t.id, artist:listing.artist, venue: listing.venue, listingId: listing.id, date: listing.date}
          return lt;
        } 
        return null;
      });
      const tickieListingsP = await Promise.all(tickieListings);
      return tickieListingsP.sort((a:any,b:any) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return (bDate as any) - (aDate as any);
      })
    }
  }
};
