import { ResolverMap } from "../../../types/graphql-utils";
import { HuntedTicket } from "../../../entity/HuntedTicket";
import { isAuthenticated } from "../../shared/isAuthenticated";

export const resolvers: ResolverMap = {
  Query: {
    viewHunted: async (_, __, { session }) => {
      await isAuthenticated(session);
      const tickets = await HuntedTicket.find({where:{finderId:session.userId}});
      return tickets;
    }
  }
};
