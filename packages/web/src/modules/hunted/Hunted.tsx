import * as React from "react";
import { compose,graphql,ChildProps } from "react-apollo";
import gql from "graphql-tag";
import { HuntedHeader } from './HuntedHeader';
import { Separator } from '../ui/Separator';
// import { Link } from "react-router-dom";
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

const viewHuntedQuery = gql`
{
  viewHunted {
    id
    artist
    hunt
    filename
    venue
    date
  }
}
`

class C extends React.PureComponent<ChildProps<{viewHunted:any,me:any}>> {
  render() {
    const {viewHunted, me} = this.props;
    // this.props.me.refetch();
    if (me.loading || viewHunted.loading){
      return <div style={{color:'white', textAlign:'center'}}>loading...</div>
    }      
    if (me.me===null){
        return <div style={{color:'white', textAlign:'center'}}>you ain't logged in</div>
    }
    console.log(viewHunted.viewHunted);
          return (
            <div>
                <HuntedHeader/>
                {/* <div style={{color:'white',
                             width:'59%',
                             marginLeft:'25.5%',
                             fontSize: window.innerWidth > window.innerHeight ? '36px' : '23px'}}>
                    helloooo <span style={{color:'red'}}>{me.me.spotifyName}</span> here are the tickies that you have valiantly hunted :D
                    </div> */}

                    <div>
                        <Separator />
                    </div>

                    <div style={{color:'white', textAlign:'center', width:"80%", marginLeft:"20%",fontSize:"15px"}}>
                    {viewHunted.viewHunted.length > 0 && 
                      <div style={{ marginLeft: "12%",
                                    fontSize: "20px",
                                    width: "59%",
                                    marginBottom: "4%",
                                    textAlign:"left"}}>
                        congratZ {me.me.spotifyName}! here are tickets you have hunted!
                      </div>}
                        {viewHunted.viewHunted && viewHunted.viewHunted.map((hunted:any)=> {
                            const {id, hunt, filename, venue, date} = hunted;
                            const dateString = `${dateArray[parseInt(date.split('-')[1],10)-1]} ${date.split('-')[2]}`;
                            const TICKET_URL = process.env.REACT_APP_AWS_BUCKET_URL+filename;
                            return (
                                <div key={id} style={{gridTemplateColumns:"20% 20% 20% 20% 20%",gridTemplateRows:"25% 25% auto", display:'grid',height: '206px'}}>
                                    <div style={{lineHeight:"3em", border:"white 2px dotted", gridColumn:"1/4",gridRow:"1/1"}}>{hunt.toUpperCase()}</div>
                                    <div style={{lineHeight:"3em", border:"white 2px dotted", gridColumn:"4/5",gridRow:"1/1"}}>{dateString}</div>
                                    <div style={{lineHeight:"3em", border:"white 2px dotted", gridColumn:"2/5",gridRow:"2/2"}}>{venue.toUpperCase()}</div>
                                    <div style={{lineHeight:"3em", border:"white 2px dotted", gridColumn:"1/1",gridRow:"2/2"}}><a style={{color:"red",fontFamily:"IBM Plex Sans", textDecoration:'underline'}} href={TICKET_URL}>DL</a></div>

                                    <div style={{border:"white 2px dotted", gridColumn:"1/5",gridRow:"3/3",padding:"5%"}}><img style={{width:"80%"}} src={TICKET_URL}/></div>
                                </div>
                            );
                                    
                        })}
                        {viewHunted.viewHunted.length===0 && 
                        <div style={{color:'red',
                                    width:'59%',
                                    marginLeft:'9%',
                                    fontSize: window.innerWidth > window.innerHeight ? '36px' : '23px'}}>
                            Oh dear! you have yet to find a hunted ticky!
                        </div>
                        }
                    </div>
                </div>
          )
  }
}

export const Hunted = compose(
  graphql(viewHuntedQuery, { name: "viewHunted" }),
  graphql(meQuery, { name: "me" }),
)(C);