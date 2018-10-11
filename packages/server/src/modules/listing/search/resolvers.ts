import { ResolverMap } from "../../../types/graphql-utils";
import { Listing } from "../../../entity/Listing";
import { getConnection } from "typeorm";

export const resolvers: ResolverMap = {
  Query: {
    searchListings: async (
      _,
      { input: { artist }, limit, offset }
    ) => {
      let listingQB = await getConnection()
      .getRepository(Listing)
      .createQueryBuilder("l")      
      if (artist) {
        listingQB=listingQB.andWhere("l.artist = :artist",{artist});
      }
   
      return listingQB.take(limit).skip(offset).getMany();
    }
  }
};