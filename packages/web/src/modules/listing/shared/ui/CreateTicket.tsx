import * as React from "react";
import { Field } from "formik";
import { DropzoneField } from "../../../shared/DropzoneField";


export const CreateTicket = () => (
  <>
    <Field name="picture" component={DropzoneField} />
  </>
);
