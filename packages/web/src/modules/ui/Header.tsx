import * as React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link, RouteComponentProps } from 'react-router-dom';

const meQuery = gql`
  {
    me {
      id
      email
      spotifyName
    }
  }
`;

export class Header extends React.PureComponent<RouteComponentProps<{}>> {
    loginRedirect = (data:any) => {
        if (!data.me){
            return window.location.href = process.env.REACT_APP_SERVER_URL+'auth/spotify';
        }
        return this.props.history.push('/me');
    }
    render(){
        console.log(process.env);
        return (
            <Query query={meQuery} fetchPolicy="network-only">
                {({ data }) => {
                        return (
                            <div style={{marginTop:"10px"}}>
                            <svg viewBox="0 0 411 40">
                                <g id="HEADER_1_">
                                    <Link to="/">
                                    <g>
                                        <g>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M151.6,10.8h3.6v15.8h0.4v-12h3.5V30h-7.4V10.8z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M159.9,10.8h3.6v1.4h-3.6V10.8z M163.7,30c1.2,0,2.2-0.3,2.8-1
                                                c0.7-0.7,1-1.6,1-2.7V12.6h-7.6V30H163.7z M163.5,15.9h0.4v10.3c0,0.3-0.1,0.4-0.2,0.4h-0.2V15.9z M163.9,10.8h3.6v1.4h-3.6V10.8
                                                z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M168.4,30v-3.4h3.6c0.2,0,0.2-0.1,0.2-0.3v-0.1h-3.9V14.5c0-1.1,0.3-2,1-2.7
                                                c0.7-0.7,1.6-1,2.9-1h3.6v11.6h-3.5v-8.3h-0.2c-0.2,0-0.2,0.2-0.2,0.5v8.3h3.9v3.4c0,1.1-0.3,2-1,2.7c-0.7,0.7-1.6,1-2.8,1H168.4
                                                z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M184.2,26.3c0,1-0.3,1.9-1,2.6c-0.7,0.7-1.6,1.1-2.7,1.1h-3.7V10.8h3.6v1.3h3.9
                                                v3.3h-3.9v11.2h0.2c0.1,0,0.2-0.1,0.2-0.4V15.8h3.5V26.3z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M188,10.8h11.4V30h-3.6V14.1h-0.4V30H192V14.1h-0.4V30H188V10.8z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M200.3,30V10.8h3.8V30H200.3z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M205.1,10.8h7.6V30h-3.6V14.1h-0.4V30h-3.6V10.8z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M213.6,30V10.8h3.8V30H213.6z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M228.7,26.3c0,1-0.3,1.9-1,2.6c-0.7,0.7-1.6,1.1-2.7,1.1h-3.7V10.8h3.6v1.3h3.9
                                                v3.3h-3.9v11.2h0.2c0.1,0,0.2-0.1,0.2-0.4V15.8h3.5V26.3z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M229.6,30V10.8h3.8V30H229.6z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M234.4,30V14.5c0-1.1,0.3-2,1-2.7c0.7-0.7,1.6-1,2.8-1h3.8v11.6h-3.6v-8.3h-0.2
                                                c-0.2,0-0.2,0.2-0.2,0.5v12.1h0.2c0.2,0,0.2-0.1,0.2-0.4v-3.4h3.6v3.4c0,1.1-0.3,2-1,2.7c-0.7,0.7-1.6,1-2.8,1H234.4z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M246.8,26.1h-0.4V30h-3.6V10.8h3.6v12h0.2c0.1,0,0.2-0.1,0.2-0.4V10.8h3.6v10.9
                                                c0,0.9-0.3,1.7-0.9,2.4h0.9V30h-3.6V26.1z"/>
                                            <path stroke="#FFFFFF" strokeMiterlimit="10" d="M251.3,30v-3.4h3.8c0.2,0,0.2-0.1,0.2-0.3v-0.1h-4V10.8h3.6v12h0.4v-12h3.6
                                                v15.4c0,1.1-0.3,2-1,2.7c-0.7,0.7-1.6,1.1-2.8,1.1H251.3z"/>
                                        </g>
                                    </g>
                                    </Link>
                                    <g id="RAPTOR_1_" onClick={()=> this.loginRedirect(data)}>
                                        <path fill="#231F20" stroke="#FFFFFF" strokeMiterlimit="10" d="M44.9,20.5c0-7.6-6.2-13.8-13.8-13.8c-7.6,0-13.8,6.2-13.8,13.8
                                            c0,7.6,6.2,13.8,13.8,13.8C38.7,34.3,44.9,28.1,44.9,20.5z"/>
                                        <path fill={data && data.me ? "#57fb57" : "#ff3939"} d="M40.8,18.6v-1.7l-6.1-1.7l-1.1,3.4L27,21.6L20.1,18l-0.3,0.8l6.8,5.9l2.9-0.4l1,1.7l-2,1.7
                                            c0.5,0.5,3.1,1.9,3.1,1.9l1.3-0.1L31,27.6l1.3-0.9l0.7-3l3.2-1.2L36,24.3l0.7,0.2l1.3-2.6l-2.3-1l0.8-2.5L40.8,18.6z"/>
                                    </g>

                                </g>
                                </svg>
                                    <div id="nav">
                                    <svg viewBox="0 0 64 101.7">
                                    <g>
                                        <Link to="/listings">
                                        <g id="LISTINGS">
                                            <path fill="#231F20" stroke="#FFFFFF" strokeMiterlimit="10" d="M46,70.8c0-7.6-6.2-13.8-13.8-13.8c-7.6,0-13.8,6.2-13.8,13.8
                                                c0,7.6,6.2,13.8,13.8,13.8C39.8,84.6,46,78.4,46,70.8z"/>
                                            <g id="LISTINGS_1_">
                                                <g>
                                                    <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="37.2" y1="67.9" x2="27.4" y2="67.9"/>
                                                    <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="33.2" y1="70.8" x2="27.4" y2="70.8"/>
                                                    <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="30.3" y1="73.8" x2="27.4" y2="73.8"/>
                                                </g>
                                            </g>
                                        </g>
                                        </Link>
                                        <Link to="/create-listing">
                                        <g id="ADD">
                                            <path fill="#231F20" stroke="#FFFFFF" strokeMiterlimit="10" d="M46,30.9c0-7.6-6.2-13.8-13.8-13.8c-7.6,0-13.8,6.2-13.8,13.8
                                                c0,7.6,6.2,13.8,13.8,13.8C39.8,44.6,46,38.5,46,30.9z"/>
                                            <g id="ADD_1_">
                                                <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="32.2" y1="25.8" x2="32.2" y2="35.6"/>
                                                <line fill="none" stroke="#FFFFFF" strokeMiterlimit="10" x1="37.1" y1="30.7" x2="27.3" y2="30.7"/>
                                            </g>
                                        </g>
                                        </Link>
                                    </g>
                                    </svg>
                                    </div>
                                </div>
                                
                        )
                    
                    }}
            </Query>
            );
    }
}