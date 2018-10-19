import * as React from "react";
import { compose,graphql,ChildProps } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";


const meQuery = gql`
  {
    me {
      id
      spotifyName
      email
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

class C extends React.PureComponent<ChildProps<{viewTickets:any,me:any}>> {
  render() {
    const {viewTickets, me} = this.props;
    console.log(this.props);
    this.props.me.refetch();
    if (me.loading || viewTickets.loading){
      return <div style={{color:'white'}}>loading...</div>
    }      
    console.log(me.me);
          return (
            <div>
            <div id="view-ticket-wrapper">
              <div id="view-ticket-container">
                {viewTickets.viewTickets.map((t:any) => {
                  return <Link to={`/listing/${t.listingId}/grab`}                            
                                key={t.id}>
                            <div className="view-ticket-item" >
                              <p>{t.artist.toUpperCase()}</p>
                              <p>{t.venue.toUpperCase()}</p>
                          </div>
                        </Link>
                })}
              </div>
            </div>
            </div>
          )
  }
}

export const Me = compose(
  graphql(viewTicketsQuery, { name: "viewTickets" }),
  graphql(meQuery, { name: "me" }),
)(C);