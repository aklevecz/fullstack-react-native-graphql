import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";
import './dropzone.css';

interface UploadPreviewProps {
  fileType: string,
  pUrl: string
}
const UploadPreview: React.SFC<UploadPreviewProps> = ({pUrl, fileType}) => {
  if (fileType==="application/pdf"){
    return <embed src={pUrl} type="application/pdf" width="600" height="500" />
  }
  return <img
    id="dropzone-img"
    src={pUrl}
    style={{
    maxHeight: 200,
    maxWidth:200,
    borderRadius:"0%",
    marginLeft:"0%",
    padding:"0%",
    }}
  />
  };

export const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name, value },
  form: { setFieldValue, values, setValues }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const pUrl = (value ? value.preview : null) || values.pictureUrl;
  const fileType = value ? value.type : null;
  return (
    <div style={{textAlign:'left'}}>
    <div id="dropzone-container">
    {!pUrl && 
      <Dropzone
          className="dropzone"
          accept="image/jpeg, image/png, application/pdf"
          style={{color:"white"}}
          multiple={false}
          onDrop={([file]) => {
            console.log(name,file.type)
            setFieldValue(name, file);
          }}
          {...props}
        >
          <p>drop a file or click here to upload</p>
        </Dropzone>
      }

      {pUrl && (
        <UploadPreview fileType={fileType} pUrl={pUrl}/>
      )}
    </div>
    {pUrl &&<button
          style={{    
            marginTop: "3%",
            color: "white",
            width: "151px",
            border: "3px red solid",
            backgroundColor: "black",
            fontWeight: "bold",
            marginLeft:"25%"}}
          onClick={(e) => {
            e.preventDefault();
            setValues({
              ...values,
              pictureUrl: null,
              picture: null
            })
          }
          }
        >
          REMOVE
        </button>}
        </div>
  );
};