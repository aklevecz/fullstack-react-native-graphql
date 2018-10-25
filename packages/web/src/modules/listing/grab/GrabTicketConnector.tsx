import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withGrabTicket, WithGrabTicket } from "@abb/controller";


class C extends React.PureComponent<
  RouteComponentProps<{listingId: string;
  }> & WithGrabTicket
> {
    state = {
        ticketId:'',
        fileType: ''
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
        <div>
        <h2 style={{padding:"1%"}}>HERE IS UR TICKY</h2>
        {this.state.ticketId && 
        <div id="ticket-grab-container">
            {this.state.fileType==="pdf" ?
            <object data={`https://s3-us-west-1.amazonaws.com/last-minute-ticket/${this.state.ticketId}`} type="application/pdf" width="80%" height="800">
            <p>Your web browser doesn't have a PDF plugin.
            Instead you can <a href={`https://s3-us-west-1.amazonaws.com/last-minute-ticket/${this.state.ticketId}`}>click here to
            download the PDF file.</a></p>
                </object>
                // <embed type="application/pdf" id="ticket-grab" src={`https://s3-us-west-1.amazonaws.com/last-minute-ticket/${this.state.ticketId}`} />
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