import { useState, useEffect } from "react";
import { FormGroup, Button, Input, Label } from "reactstrap";
import Loading from "components/common/Loading";
import _ from "lodash";
import { Upload, Eye, Trash, Link2, Download } from "react-feather";

const File = ({ file, onRemove, onUpdate, onDownload, onUpdateUrl, label, bucket, allowUrl = true }) => {
  const { exists, publicAccess, key, externalUrl } = file;
  const noFile = !externalUrl && !exists;
  const initInputValue = externalUrl ? externalUrl : "";

  const [inputValue, setInputValue] = useState(initInputValue);
  const [loading, setLoading] = useState(null);

  const showUpdateUrl = allowUrl && !!inputValue;
  const showRemove = exists || externalUrl;
  const showDownload = exists;
  const showUsingText = exists || externalUrl;
  const showPublicView = publicAccess && !noFile;

  const viewUrl = !!externalUrl ? externalUrl : `${bucket}${key}`;
  const uploadText = exists && !externalUrl ? "Replace File" : "Upload File";
  const inputPlaceholder = exists && !externalUrl ? "An uploaded file is being used" : "";
  const usingText = externalUrl ? "URL above" : "uploaded file";

  const isDirty = inputValue !== initInputValue;

  useEffect(() => setInputValue(initInputValue), [file?.key]);

  const onChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleUpdateFile = async event => {
    try {
      setLoading("Uploading file");
      await onUpdate({ file, event });
    } finally {
      setLoading(null);
    }
  };

  const handleUpdateUrl = async () => {
    try {
      setLoading("Updating URL");
      await onUpdateUrl({ file, externalUrl: inputValue });
    } finally {
      setLoading(null);
    }
  };

  const handleRemove = async () => {
    try {
      setLoading("Removing file");
      await onRemove({ file });
    } finally {
      setLoading(null);
    }
  };

  const handleDownload = async event => {
    try {
      setLoading("Downloading file");
      await onDownload({ file });
    } finally {
      setLoading(null);
    }
  };

  if (!file || loading) return <Loading />;

  return (
    <div>
      <FormGroup className="mb-0">
        {!!label && <Label>{label}</Label>}

        {allowUrl && <Input type="text" value={inputValue} onChange={onChange} placeholder={inputPlaceholder} />}

        <div className="mt-2">
          {/* Upload File */}
          <Label className="btn btn-secondary mb-0">
            <Upload size={16} /> {uploadText}
            <input type="file" onChange={handleUpdateFile} hidden />
          </Label>

          {/* View Public File */}
          {showPublicView && (
            <a className="btn btn-primary ml-2" rel="noopener noreferrer" href={viewUrl} target="_blank">
              <Eye size={16} /> View
            </a>
          )}

          {/* Update URL */}
          {showUpdateUrl && (
            <Button className="ml-2" onClick={handleUpdateUrl} color="success">
              <Link2 size={16} /> Update URL
            </Button>
          )}

          {/* Download File */}
          {showDownload && (
            <Button className="ml-2" onClick={handleDownload} color="primary">
              <Download size={16} /> Download
            </Button>
          )}

          {/* Remove File / URL */}
          {showRemove && (
            <Button className="ml-2" onClick={handleRemove} color="danger">
              <Trash size={16} /> Remove
            </Button>
          )}

          {isDirty && <span className="text-danger ml-2">There are unsaved changes to the URL</span>}
        </div>
      </FormGroup>

      {showUsingText && (
        <div className="text-success">
          <small>Currently using the {usingText}</small>
        </div>
      )}

      {!showUsingText && (
        <div className="text-success">
          <small>Upload a file or enter a URL</small>
        </div>
      )}
    </div>
  );
};

export default File;
