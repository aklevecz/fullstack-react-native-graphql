import * as React from "react";
import { Form as AntForm } from "antd";
import { Form, Formik, FormikActions } from "formik";
import { ImageFile } from "react-dropzone";
import { CreateTicket } from "./ui/CreateTicket";

const FormItem = AntForm.Item;

export interface ListingFormValues {
  pictureUrl: string | null;
  picture: ImageFile | null;
}

interface State {
  createTicket: boolean;
}

interface Props {
  initialValues?: ListingFormValues;
  submit: (
    data: ListingFormValues,
    actions: FormikActions<ListingFormValues>
  ) => Promise<void>;
}

export const defaultListingFormValues = {
  pictureUrl: null,
  picture: null,
};

export class CreateTicketForm extends React.PureComponent<Props, State> {

  render() {
    const { submit, initialValues = defaultListingFormValues } = this.props;

    return (
      <Formik<{}, ListingFormValues>
        initialValues={initialValues}
        onSubmit={submit}
      >
        {({ isSubmitting, values }) =>
          console.log(values) || (
            <Form style={{ display: "flex",justifyContent:"center" }}>
              <div style={{ width: "70%" }}>
              <div>
                <CreateTicket/>
              </div>
              
                <FormItem>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                      <div>
                        <button
                          style={{fontWeight:"bold",border:"2px red solid",color:"black",backgroundColor:"white",width:"200px",marginTop:"20%"}}
                          type="submit"
                          disabled={isSubmitting}
                        >
                          UPLOAD
                        </button>
                      </div>
                  </div>
                </FormItem>
              </div>
            </Form>
          )
        }
      </Formik>
    );
  }
}