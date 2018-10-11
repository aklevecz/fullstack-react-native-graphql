import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withGrabTicket, WithGrabTicket } from "@abb/controller";


class C extends React.PureComponent<
  RouteComponentProps<{listingId: string;
  }> & WithGrabTicket
> {
    state = {
        ticketId:''
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
            this.setState({ticketId});
        } 

    }
//   submit = async (
//     values: ListingFormValues,
//     { setSubmitting }: FormikActions<ListingFormValues>
//   ) => {
//     const {
//         match: {
//           params: { listingId }
//         }
//       } = this.props;
//       const {picture} = values;
//       await this.props.createTicket({ticket:picture ,listingId});
//       setSubmitting(false);
//   };

  render() {
    console.log(this.state);
    return (
        <div style={{color:'white'}}>
       {this.state.ticketId ?
         <img src={`https://s3-us-west-1.amazonaws.com/last-minute-ticket/${this.state.ticketId}`} />
        :<div>loading...</div>}
        </div>
        )   
    }
}

export const GrabTicketConnector = withGrabTicket(C);