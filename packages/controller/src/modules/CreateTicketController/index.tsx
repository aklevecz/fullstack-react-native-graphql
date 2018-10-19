// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { CreateTicketMutationVariables, CreateTicketMutation } from "../../schemaTypes";

export const createTicketMutation = gql`
  mutation CreateTicketMutation(
    $ticket: Upload,
    $listingId: String!
  ) {
    createTicket(
      input: {
        ticket: $ticket
        listingId: $listingId
      }
    )
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

export interface WithCreateTicket {
  createTicket: (variables: CreateTicketMutationVariables) => void;
}

export const withCreateTicket = graphql<
  any,
  CreateTicketMutation,
  CreateTicketMutationVariables,
  WithCreateTicket
>(createTicketMutation, {
  props: ({ mutate }) => ({
    createTicket: async variables => {
      if (!mutate) {
        return;
      }

      const response = await mutate({
        variables,
        refetchQueries:[{
          query:findListingsQuery
        }]
      });
      
      return response;
    }
  })
});
