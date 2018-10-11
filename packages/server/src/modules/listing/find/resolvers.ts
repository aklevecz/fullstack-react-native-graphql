import { ResolverMap } from "../../../types/graphql-utils";
import { listingCacheKey, ticketCacheKey } from "../../../constants";
//import { Ticket } from "../../../entity/Ticket";

export const resolvers: ResolverMap = {
  Listing: {
    pictureUrl: (parent, _, { s3 }) => {

      // **I have hijacked this to not append the url to the bucket**
      return parent.pictureUrl;

      if (!parent.pictureUrl){
        return parent.pictureUrl;
      }
      if (parent.pictureUrl.includes('http')) {
        return parent.pictureUrl;
      }
      // changed this to the s3 bucket from server storage
      return `${s3}/${parent.pictureUrl}`;
      //return `${url}/images/${parent.pictureUrl}`;

    },
    owner: ({ userId }, _, { userLoader }) => userLoader.load(userId)
  },
  Query: {
    findListings: async (_, __, {redis}) => {
      console.log('find listing');
      const listings =  (await redis.lrange(listingCacheKey, 0, -1)) || [];
      const tickets = (await redis.lrange(ticketCacheKey,0,-1)) || [];

      const t = tickets.map((d:string) => JSON.parse(d));

      const ticketListings =  listings.map((x: string) => {
          const y = JSON.parse(x);
          const ts = t.filter((x:any) => x.lid === y.id).map((d:any) => d.tid)
          return {...y, pictureUrl:JSON.stringify(ts)};
        });

      return ticketListings.sort(function(a:any,b:any){
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return (aDate as any) - (bDate as any);
      })

    }
  }
};
