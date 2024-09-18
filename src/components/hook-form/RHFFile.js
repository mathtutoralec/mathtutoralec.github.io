import React from "react";
import { FormGroup, Label, FormText, Button, FormFeedback, Input } from "reactstrap";
import { Upload, Download, X, Link2, Eye } from "react-feather";
import { useFormContext, Controller } from "react-hook-form";
import Loading from "../common/Loading";

const RHFFile = ({
  label = "",
  showLabel = true,
  formText = "",
  name,
  labelProps = {},
  inputProps = {},
  formTextProps = {},
  formGroupProps = {},
  readOnly = false,
  disabled = false,
  invalid = false,
  errorMessage = "",
  fileHook,
  ...props
}) => {
  const {
    showUrlInput,
    showRemove,
    showDownload,
    showPublicView,
    viewUrl,
    uploadText,
    inputPlaceholder,
    statusText,
    handleUpload,
    handleDownload,
    handleDelete,
    handleUpdate,
    isBusy,
    updateUrlDisabled,
  } = fileHook || {};

  const { control } = useFormContext();

  if (isBusy || !fileHook) {
    return (
      <FormGroup {...formGroupProps}>
        {showLabel && label && <Label {...labelProps}>{label}</Label>}
        <Loading />
      </FormGroup>
    );
  }

  return (
    <FormGroup {...formGroupProps}>
      {showLabel && label && <Label {...labelProps}>{label}</Label>}

      {/* File URL */}
      {showUrlInput && (
        <Controller
          name={`${name}.externalUrl`}
          control={control}
          render={({ field }) => {
            return (
              <Input
                type="text"
                placeholder={inputPlaceholder}
                disabled={disabled || readOnly}
                invalid={invalid}
                {...field}
                {...inputProps}
                {...props}
              />
            );
          }}
        />
      )}

      <div className={showUrlInput ? "mt-2" : ""}>
        {/* Upload File */}
        <Label className="btn btn-secondary mr-2 mb-2">
          <Upload size={16} /> {uploadText}
          <input type="file" onChange={handleUpload} hidden />
        </Label>

        {/* View Public File */}
        {showPublicView && (
          <a className="btn btn-primary mr-2 mb-2" rel="noopener noreferrer" href={viewUrl} target="_blank">
            <Eye size={16} /> View
          </a>
        )}

        {/* Update URL */}
        {showUrlInput && (
          <Button className="mr-2 btn-primary mb-2" onClick={handleUpdate} color="success" disabled={updateUrlDisabled}>
            <Link2 size={16} /> Update URL
          </Button>
        )}

        {/* Download File */}
        {showDownload && (
          <Button className="mr-2 btn-success mb-2" onClick={handleDownload}>
            <Download size={16} /> Download
          </Button>
        )}

        {/* Remove File / URL */}
        {showRemove && (
          <Button className="mr-2 btn-danger mb-2" onClick={handleDelete}>
            <X size={16} /> Remove
          </Button>
        )}
      </div>

      {formText && <FormText {...formTextProps}>{formText}</FormText>}
      <FormFeedback>{errorMessage}</FormFeedback>

      <div className="text-success">
        <small>{statusText}</small>
      </div>
    </FormGroup>
  );
};

export default RHFFile;