import * as React from "react";
import { compose,graphql,ChildProps } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { dateArray } from '../../constants';


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
    date
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
            <div id="profile-container">
            <div id="profile-card"> 
              <div>{me.me.spotifyName}</div>
              <div>{me.me.email}</div>

              <Link to="/logout"><div style={{color:"red",margin:"33px"}}>LOGOUT</div></Link>
            </div>

            </div>
              <div id="view-ticket-container">
              <div id="ur-ticky-header"> ~THESE ARE ÜR TICKIES~ </div>

                {viewTickets.viewTickets.map((t:any) => {
                  const date = t.date.split('-');
                  const month = dateArray[parseInt(date[1],10)-1]
                  const dateString = month+' '+date[2];
                  return <Link to={`/listing/${t.listingId}/grab`}                            
                                key={t.id}>
                            <div className="view-ticket-item" >
                              <p>{t.artist.toUpperCase()}</p>
                              <p>{t.venue.toUpperCase()} ~ {dateString}</p>
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