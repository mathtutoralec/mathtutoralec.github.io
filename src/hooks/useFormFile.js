import { useSelector } from "react-redux";
import { selectBucket } from "store/env/selectors";
import { useFormContext } from "react-hook-form";
import _ from "lodash";
import { validateFile, uploadFile, downloadFile } from "utils/files";

export const useFormFile = (name, allowUrl) => {
  const bucket = useSelector(selectBucket);
  const { getFieldState, getValues, formState } = useFormContext();

  // Get the default values for the file
  const original = _.get(formState?.defaultValues, _.toPath(name));

  if (!original) return null;

  const { isDirty } = getFieldState(name);
  const [id, file] = getValues(["id", name]); // Form values for file

  const { key, publicAccess, externalUrl, exists } = original || {};
  const hasFile = !!externalUrl || !!exists;

  const showUrlInput = allowUrl;
  const showRemove = exists || externalUrl;
  const showDownload = exists;
  const showUsingText = exists || externalUrl;
  const showPublicView = publicAccess && hasFile;
  const updateUrlDisabled = !isDirty;

  const viewUrl = !!externalUrl ? externalUrl : `${bucket}/${key}`;
  const uploadText = exists && !externalUrl ? "Replace" : "Upload";
  const inputPlaceholder = exists && !externalUrl ? "An uploaded file is being used" : "";
  const usingText = externalUrl ? "URL above" : "uploaded file";
  const statusText = showUsingText
    ? `Currently using the ${usingText}`
    : allowUrl
    ? `Upload a file or enter a URL`
    : `Upload a file`;

  return {
    showUrlInput,
    showRemove,
    showDownload,
    showPublicView,
    viewUrl,
    uploadText,
    inputPlaceholder,
    statusText,
    updateUrlDisabled,
    id,
    file,
    downloadFile,
    uploadFile,
    validateFile,
  };
};

export default useFormFile;
