import * as React from "react";
import { Form as AntForm } from "antd";
import { Form, Formik, FormikActions } from "formik";
import { ImageFile } from "react-dropzone";
import { Page1 } from "./ui/Page1";
import { ArtistPicker } from "./ui/ArtistPicker";

const FormItem = AntForm.Item;

export interface ListingFormValues {
  pictureUrl: string | null;
  picture: ImageFile | null;
  artist: string;
  spotifyId:string;
  venue: string;
  date: string;
}

interface State {
  page: number;
}

interface Props {
  initialValues?: ListingFormValues;
  submit: (
    data: ListingFormValues,
    actions: FormikActions<ListingFormValues>
  ) => Promise<void>;
}

// tslint:disable-next-line:jsx-key
const pages = [<ArtistPicker nextPage={alert}/>,<Page1 />];

export const defaultListingFormValues = {
  pictureUrl: null,
  picture: null,
  artist: "",
  spotifyId:"",
  venue: "",
  date: "",
};

export class ListingForm extends React.PureComponent<Props, State> {
  state = {
    page: 0,
  };
  nextPage = () => this.setState(state => ({ page: state.page + 1 }));

  render() {
    const { submit, initialValues = defaultListingFormValues } = this.props;
    return (
      <Formik<{}, ListingFormValues>
        initialValues={initialValues}
        onSubmit={ async ({...values},{...actions}) => {
          console.log('values',values);
          if (this.state.page===0){
            actions.setSubmitting(false);
          } else{
            await submit(values,actions)
                              .then(()=>{
                                actions.setSubmitting(true);
                              }
                              )
                              .catch(err=>{
                                console.log('listingformerror', err);
                                actions.setSubmitting(false);
                              });  
                    
          }
          
          }}
      >
        {({ isSubmitting, values }) => {
          const {picture, venue, date} = values;
          let ready = false;
          if (picture && venue && date){
            ready=true;
          }
           return (
            <Form id="venue-date-upload-form" className={values.venue.toString()}>
              <div style={{ width: 400, margin: "auto" }}>
                {this.state.page===0 && <ArtistPicker nextPage={this.nextPage}/>}
                {this.state.page!==0 && pages[this.state.page]}
                <FormItem>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                      {ready && <div>
                        <button
                          style={{color:"red",marginTop:"30%", backgroundColor:"white",width:"200px",fontSize:"20px",fontWeight:"bold"}}
                          type="submit"
                          disabled={isSubmitting}
                        >
                          CREATE
                        </button>
                      </div>}
                  </div>
                </FormItem>
              </div>
            </Form>
          )
        }
        }
      </Formik>
   );
  }
}