import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input, InputNumber } from "antd";
import "./spotifySearch.css";
const FormItem = Form.Item;

export const InputField: React.SFC<
  FieldProps<any> & {
    prefix: React.ReactNode;
    label?: string;
    useNumberComponent?: boolean;
  }
> = ({
  field: { onChange, ...field },
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  useNumberComponent = false,
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];

  const Comp = useNumberComponent ? InputNumber : Input;

  return (
    <FormItem
      label={label}
      help={errorMsg}
      validateStatus={errorMsg ? "error" : undefined} 
      style={{width:"70%", margin:"0 auto"}}   >
      <Comp
            style={{color:"white",backgroundColor:"black",border:"2px white solid",borderRadius:"0px", marginBottom:"20px"}}
        {...field}
        {...props}
        onChange={
          useNumberComponent
            ? (newValue: any) => setFieldValue(field.name, newValue)
            : onChange
        }
      />
    </FormItem>
  );
};
