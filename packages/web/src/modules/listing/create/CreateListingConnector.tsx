import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FormikActions } from "formik";
import { withCreateListing, WithCreateListing } from "@abb/controller";
import { ListingFormValues, ListingForm } from "../shared/ListingForm";


class C extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateListing
> {
  submit = async (
    values: ListingFormValues,
    { setSubmitting }: FormikActions<ListingFormValues>
  ) => {
    console.log(values);
    const resp = await this.props.createListing(values);
    setSubmitting(false);
    console.log(resp);
    if ((resp as any).data.createListing){
      this.props.history.push('/listings');
      // this.props.history.push('/listing/'+(resp as any).data.createListing);
    }
  };

  render() {
    return <ListingForm submit={this.submit} /> ;
  }
}

export const CreateListingConnector = withCreateListing(C);
