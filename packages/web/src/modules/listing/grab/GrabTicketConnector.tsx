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
            const ticketId = (resp as any).data.grabTicket.ticketId
            const fileType = ticketId.split('.')[1];
            this.setState({ticketId,fileType});
        } 

    }

  render() {
    console.log(this.state);
    return (
        <div style={{height:this.state.height}}>
        <h2 style={{padding:"1%"}}>HERE IS UR TICKY</h2>
        {this.state.ticketId && 
        <div id="ticket-grab-container" style={{height:"100%"}}>
            {this.state.fileType==="pdf" ?
            <div style={{textAlign:"center"}}>
            <a style={{color:"red",fontFamily:"IBM Plex Sans",fontSize:"30px"}} href={`https://s3-us-west-1.amazonaws.com/last-minute-ticket/${this.state.ticketId}`}>DOWNLOAD</a>
            <embed src={`https://s3-us-west-1.amazonaws.com/last-minute-ticket/${this.state.ticketId}`} type="application/pdf" width="100%" height="100%"/>            </div>
                :
                <img id="ticket-grab" src={`https://s3-us-west-1.amazonaws.com/last-minute-ticket/${this.state.ticketId}`} />
            }
            
        </div>
        }
        </div>
        )   
    }
}

export const GrabTicketConnector = withGrabTicket(C);