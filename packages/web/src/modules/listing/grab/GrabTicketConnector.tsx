import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withGrabTicket, WithGrabTicket } from "@abb/controller";


class C extends React.PureComponent<
  RouteComponentProps<{listingId: string;
  }> & WithGrabTicket
> {
    state = {
        ticketId:'',
        fileType: '',
        height: window.innerHeight
    }

    async componentWillMount(){
        const {
            match: {
                params: {listingId}
            }
        } = this.props;
        const resp = await this.props.grabTicket({listingId});

        if((resp as any).data.grabTicket) {
            console.log((resp as any).data.grabTicket.ticketId)
            if ((resp as any).data.grabTicket.ticketId==="gone"){
                alert("sorry! someone grabbed this right before you! oh gosh!")
                this.props.history.push("/listings")
            }
            const ticketId = (resp as any).data.grabTicket.ticketId
            const fileType = ticketId.split('.')[1];
            this.setState({ticketId,fileType});
        } 

    }

  render() {
    const TICKET_URL = `${process.env.REACT_APP_AWS_BUCKET_URL}${this.state.ticketId}`;
    return (
        <div style={{height:this.state.height}}>
            <h2 style={{padding:"1%"}}>HERE IS UR TICKY</h2>
                {this.state.ticketId && 
                <div id="ticket-grab-container" style={{height:"100%"}}>
                    {this.state.fileType==="pdf" ?
                    <div style={{textAlign:"center"}}>
                    <a style={{color:"red",fontFamily:"IBM Plex Sans",fontSize:"30px"}} href={TICKET_URL}>DOWNLOAD</a>
                    <embed src={TICKET_URL} type="application/pdf" width="100%" height="100%"/>            </div>
                        :
                        <div style={{textAlign:"center"}}>
                        <a style={{color:"red",fontFamily:"IBM Plex Sans",fontSize:"30px"}} href={TICKET_URL}>DOWNLOAD</a><br/>
                        <img id="ticket-grab" src={TICKET_URL} /></div>
                    }
                    
                </div>
                }
        </div>
        )   
    }
}

export const GrabTicketConnector = withGrabTicket(C);