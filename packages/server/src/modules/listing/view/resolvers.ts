import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { Ticket } from "../../../entity/Ticket";
import { finderDefaultId } from "../../../constants";

export const resolvers: ResolverMap = {
  Query: {
    viewListing: async (_, {id}, __) => {
      console.log('viewlisting');
      const tickets = await Ticket.find({where:{listingId:id, finderId:finderDefaultId}});
      const tids = tickets.map(t => t.id);
      const listing = await Listing.findOne({where:{id}})
      console.log(tids);
      const tickies = JSON.stringify(tids)
      return {...listing, pictureUrl:tickies};
    }
  }
};
