// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { GrabTicketMutationVariables, GrabTicketMutation } from "../../schemaTypes";

export const grabTicketMutation = gql`
  mutation GrabTicketMutation(
    $listingId: String!
  ) {
    grabTicket(
        listingId: $listingId
    ){
      ticketId
    }
  }
`;

const findListingsQuery = gql`
  query FindListingsQuery {
    findListings {
      id
      artist
      venue
      pictureUrl
      date
      owner {
        id
        email
      }
    }
  }
`;

const viewTicketsQuery = gql`
{
  viewTickets {
    id
    artist
    venue
    listingId
  }
}
`

export interface WithGrabTicket {
  grabTicket: (variables: GrabTicketMutationVariables) => void;
}

export const withGrabTicket = graphql<
  any,
  GrabTicketMutation,
  GrabTicketMutationVariables,
  WithGrabTicket
>(grabTicketMutation, {
  props: ({ mutate }) => ({
    grabTicket: async variables => {
      if (!mutate) {
        return;
      }

      const response = await mutate({
        variables,
        refetchQueries:[
          {query:findListingsQuery},
          {query:viewTicketsQuery}
        ]
      });
      
      return response;
    }
  })
});
