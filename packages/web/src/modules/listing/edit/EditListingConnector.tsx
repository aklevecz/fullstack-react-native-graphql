import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikActions } from "formik";
import { withCreateTicket, WithCreateTicket } from "@abb/controller";
import { ListingFormValues, CreateTicketForm } from "../shared/CreateTicketForm";


class C extends React.PureComponent<
  RouteComponentProps<{listingId: string;
  }> & WithCreateTicket
> {

  submit = async (
    values: ListingFormValues,
    { setSubmitting }: FormikActions<ListingFormValues>
  ) => {
    const {
        match: {
          params: { listingId }
        }
      } = this.props;
      const {picture} = values;
      await this.props.createTicket({ticket:picture ,listingId});
      setSubmitting(false);
  };

  render() {

    return <CreateTicketForm submit={this.submit} /> ;
  }
}

export const EditListingConnector = withCreateTicket(C);