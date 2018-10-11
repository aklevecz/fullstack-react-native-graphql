import * as React from "react";
import { Field } from "formik";
import { SpotifyArtistField } from "../../../shared/SpotifyArtistField";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

const refreshQuery = gql`
  {
    refreshToken {
      accessToken
    }
  }
`;
const fucker=true;
interface Props {
  nextPage: ()=>void,
}
export const ArtistPicker:React.SFC<Props> = ({nextPage}) => (
  <>
        {/* <Field name="artist" nextPage={nextPage} accessToken={"BQDvc4l12xybcQBUL4VnwFJ9hcZhtvl4RtpUvrPtyaFy57lem868YQFBbTbrNUF-7ZKeVDz-h4oDT87gKasB-Bb8cFwD8qc7PusGRqEqI9le5SF6hDmmQ3wWwFv-1yrEDD9Xp-ICLyWtpoS00q81TwL6yI9mDwoy"} component={SpotifyArtistField} /> */}
        {fucker &&
                <Query query={refreshQuery}>
                {({ data }) => {
                    if (data.refreshToken){
                          return <Field name="artist" nextPage={nextPage} accessToken={data.refreshToken.accessToken} component={SpotifyArtistField} />
                        } 
                        return <div>loading...</div> 
                    }}
              </Query>
        }

  </>
);


// export const ArtistPicker = () => (
//   <>
//         <Field name="artist" accessToken={"BQDRZp4CKTnh5ftR4DLYAH_EGNIps2AYKiTVOmfXrJFZNr2411oGs138Wfo7mmH8v1xWc7xrEFetiyo0bYaMqyS1amzr3mTo9hOnO9Jn1VjOa1yq8NzQVLuATd53wrNbEgcXGYaPlMdI8nNGIvRW1B_CqlDztzWaIMz_NKAMEL_O_Mfu1l3yD6oD"} component={SpotifyArtistField} />
//         {fucker &&
//                 <Query query={refreshQuery}>
//                 {({ data }) => {
//                     if (data.refreshToken){
//                             console.log(data);
//                            return <Field name="artist" accessToken={data.refreshToken.accessToken} component={SpotifyArtistField} />
//                         } 
//                         return <div>loading...</div> 
//                     }}
//               </Query>
//         }

//   </>
// );