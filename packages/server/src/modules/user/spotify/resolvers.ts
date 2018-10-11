import { ResolverMap } from "../../../types/graphql-utils";
import { User } from "../../../entity/User";
import * as SpotifyWebApi from 'spotify-web-api-node';

export const resolvers: ResolverMap = {
  Query: {
    refreshToken: async (_, __, { session,url }) => {
      const { userId } = session;
      const user = await User.findOne({where:{id:userId}});
      console.log(user);
      var spotifyApi = new SpotifyWebApi({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        redirectUri: url+'/auth/spotify'
      });
      if (user){
        spotifyApi.setRefreshToken(user.spotifyRefreshToken);
      }
      // clientId, clientSecret and refreshToken has been set on the api object previous to this call.
      await spotifyApi.refreshAccessToken().then(
        function(data: any) {
          console.log('The access token has been refreshed!');

          // Save the access token so that it's used in future calls
          spotifyApi.setAccessToken(data.body['access_token']);
        },
        function(err:any) {
          console.log('Could not refresh access token', err);
        }
      );
      console.log(spotifyApi.getAccessToken());
      return {accessToken:spotifyApi.getAccessToken()};
    }
  }
};
