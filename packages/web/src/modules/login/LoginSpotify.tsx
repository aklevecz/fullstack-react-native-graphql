import * as React from 'react';

export class LoginSpotify extends React.PureComponent{
    render(){
        return (
        <div style={{
            textAlign:"center",
            width: "70%",
            color:"white",
            marginTop: "7%",
            cursor:"pointer",
            margin:"0 auto",
            fontSize:"21px"
        }}> Oh shoot! Whatever you tried to do requires that you are logged in!

        <div style={{
                color:"red",
                fontSize:"30px",
                border: "3px solid white",
                width: "150px",
                height: "70px",
                lineHeight: "62px",
                margin: "0 auto",
                marginTop: "13px"
            }}
        onClick={()=> window.location.href = process.env.REACT_APP_SERVER_URL+'auth/spotify?meepo=onetwothree'}
        >LOGIN
        </div>
        </div>
    )
    }
}