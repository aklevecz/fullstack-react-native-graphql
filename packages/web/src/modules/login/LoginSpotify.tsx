import * as React from 'react';

export class LoginSpotify extends React.PureComponent{
    render(){
        return (
        <div style={{
            textAlign:"center",
            width: "100%",
            color:"red",
            marginTop: "7%",
            fontSize:"30px"
        }}
        onClick={()=> window.location.href = process.env.REACT_APP_SERVER_URL+'auth/spotify'}
        >LOGIN</div>
    )
    }
}