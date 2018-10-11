// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import {
  CreateListingMutation,
  CreateListingMutationVariables
} from "../../schemaTypes";

export const createListingMutation = gql`
  mutation CreateListingMutation(
    $picture: Upload,
    $artist: String!
    $venue: String!
    $date: String!
    $spotifyId: String!
  ) {
    createListing(
      input: {
        picture: $picture
        artist: $artist
        venue: $venue
        date: $date
        spotifyId: $spotifyId
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

export interface WithCreateListing {
  createListing: (variables: CreateListingMutationVariables) => void;
}

export const withCreateListing = graphql<
  any,
  CreateListingMutation,
  CreateListingMutationVariables,
  WithCreateListing
>(createListingMutation, {
  props: ({ mutate }) => ({
    createListing: async variables => {
      if (!mutate) {
        return;
      }
      
      const response = await mutate({
        variables,
        refetchQueries:[{
          query:findListingsQuery
        }]
      });
      console.log(response);
      return response;
    }
  })
});
