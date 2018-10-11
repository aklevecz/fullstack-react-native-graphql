import * as React from 'react';
import { Link } from 'react-router-dom';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const meQuery = gql`
  {
    me {
      id
      email
      spotifyName
    }
  }
`;

export class Header extends React.Component {
    state={
        width: window.innerWidth,
        desk: window.innerWidth > 600,
    }
    updateDimensions(){
        if (window.innerWidth > 800){
            this.setState({width:window.innerWidth, desk:true});
        } else {
            this.setState({desk:false})
        }
    }
    componentDidMount(){
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    render(){
        return (
            <Query query={meQuery}>
                {({ data }) => {
                    if (this.state.desk){
                        return (
                            <div style={{backgroundColor:"white"}}>
                            <svg width={`${this.state.width}px`} height="65px" viewBox="0 0 1440 85">
                            <Link to="/listings">
                                <text transform="matrix(1 0 0 1 595.5273 62.082)" fill="black" fontFamily="'PhenixAmerican'" fontSize="59.1027">
                                    löst_mini_ticky
                                </text>
                            </Link>
                            {!data.me ?
                            <a href={process.env.REACT_APP_SERVER_URL+'/auth/spotify'}>
                                <text transform="matrix(1 0 0 1 922 62.082)" fill="black" fontFamily="'PhenixAmerican'" fontSize="30">
                                    sign_in
                                </text>
                            </a> :
                            <Link to="/logout">
                                <text transform="matrix(1 0 0 1 922 62.082)" fill="black" fontFamily="'PhenixAmerican'" fontSize="30">
                                    log_out>{data.me.spotifyName}
                                </text>
                            </Link>}
                        </svg>
                        </div>
                        )
                    } else {
                        return (
                            <div style={{backgroundColor:"white"}}>

                            <svg viewBox="0 0 741 199">
                            <Link to="/listings">
                                <text transform="matrix(1 0 0 1 70 127.2432)" fill="black" fontFamily="'PhenixAmerican'" fontSize="87.823">löst_mini_ticky</text>
                            </Link>
                            {!data.me ?
                            <a href={process.env.REACT_APP_SERVER_URL+'/auth/spotify'}>
                            <text transform="matrix(1 0 0 1 586.001 127.2432)" fill="black" fontFamily="'PhenixAmerican'" fontSize="45.0921">sign_in</text>
                            </a> 
                            :
                            <Link to="/logout">
                            <text transform="matrix(1 0 0 1 586.001 127.2432)" fill="black" fontFamily="'PhenixAmerican'" fontSize="45.0921">logout</text>
                            </Link>
                            }
                            </svg>
                            </div>
                        )
                    }
                    
                    }}
            </Query>
            );
    }
}