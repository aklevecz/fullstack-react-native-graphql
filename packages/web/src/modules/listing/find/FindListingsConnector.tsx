import * as React from "react";
import { withFindListings, WithFindListings } from "@abb/controller";
import { Link, RouteComponentProps } from "react-router-dom";
import * as d3 from 'd3';
import { dateArray } from '../../../constants';

interface State{
  width: number,
}
class C extends React.PureComponent<RouteComponentProps<{}> & WithFindListings, State> {
  ref: SVGSVGElement;
  constructor(props:any) {
    super(props);
    this.state = {
      width:window.innerWidth,
    }
    console.log(this.props.location.search);
  }
  updateDimensions(){
        this.setState({width:window.innerWidth});
  }

  componentDidUpdate(){
    console.log('update');
  }
  componentDidMount(){
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
    const rect= d3.select(this.ref).select('g');
    console.log(rect);
  }
  render() {
    const { listings, loading } = this.props;
    console.log(listings);
    return (
      
      <div>
        {loading && <div>...loading</div>}
        {listings.map(l => {
          console.log(l.date);
          const date = l.date.split('-');
          const month = dateArray[parseInt(date[1],10)-1]
          console.log(month);
          const dateString = month+' '+date[2];
          return (
          <div
            className="listing"
              // className={l.pictureUrl!=="[]" ? "glow listing" : "listing"}
            key={`${l.id}-listing`}
          >
          <Link to={`/listing/${l.id}`} style={{color:"white"}}>
            <div className={`artist-listing-name ${l.pictureUrl!=="[]" ? "glow" : ""}`}>{l.artist.toUpperCase()}</div> 
            <div className="venue-listing-name">{l.venue.toUpperCase()}</div>
            <div>{dateString}</div>
          </Link>
          </div>
        )})}
              
      </div>
    );
  }
}

export const FindListingsConnector = withFindListings(C);
