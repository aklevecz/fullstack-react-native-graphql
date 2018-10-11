import * as React from "react";
import { Field } from "formik";
import { InputField } from "../../../shared/InputField";
import { DropzoneField } from "../../../shared/DropzoneField";
import { DateField } from "../../../shared/DateField";


export const Page1 = () => (
  <>
    <div className="form-label">Venue</div>
    <Field name="venue" component={InputField} />
    <div className="form-label">Date</div>
    <Field name="date" component={DateField}/>
    <div className="form-label ticket">Ticket</div>
    <Field name="picture" component={DropzoneField} />
  </>
);
