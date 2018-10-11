import * as React from "react";
import { withFindListings, WithFindListings } from "@abb/controller";
import { Link } from "react-router-dom";
import * as d3 from 'd3';

interface State{
  width: number,
}
class C extends React.PureComponent<WithFindListings, State> {
  ref: SVGSVGElement;
  constructor(props:any) {
    super(props);
    this.state = {
      width:window.innerWidth,
    }
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
        <Link to="/create-listing">        
          <svg id="add-box" ref={(ref: SVGSVGElement) => this.ref = ref}
          width="85px" height="85px" >
          <g transform={`scale(${(this.state.width+500)/1400})`}>
            <line fill="none" stroke="#FFFFFF" strokeWidth="4" strokeMiterlimit="10" x1="42" y1="23" x2="42" y2="61"/>
            <line fill="none" stroke="#FFFFFF" strokeWidth="4" strokeMiterlimit="10" x1="61" y1="42" x2="23" y2="42"/>
            <rect x="14.301" y="14.303" transform="matrix(1 0.0025 -0.0025 1 0.1053 -0.105)" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeMiterlimit="10" width="55.395" height="55.395"/>
          </g>
          </svg>
        </Link>
        <Link to="/me">        
          <svg id="ticky-box" x="10" width="85px" height="160px">
            <g transform={`scale(${(this.state.width+500)/1400})`}>
              <rect x="-0.511" y="-0.511" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" width="85.261" height="154.021"/>
              
                <text transform="matrix(-4.371139e-08 1 -1 -4.371139e-08 32.623 42.9775)" fill="#FFFFFF" fontFamily="'MyriadPro-Regular'" fontSize="23.8931">Tickies</text>
              <polyline fill="#FFFFFF" points="84.75,-0.511 62.489,21.75 42.55,1.81 22.18,22.18 -0.511,-0.511 	"/>
            </g>
          </svg>
        </Link>
        {loading && <div>...loading</div>}
        {listings.map(l => {
          const date = new Date(l.date).toString().split(' ');
          const dateString = date[1]+' '+date[2];
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
