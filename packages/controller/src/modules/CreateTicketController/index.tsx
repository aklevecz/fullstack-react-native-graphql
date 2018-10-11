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
        variables
      });
      
      return response;
    }
  })
});
