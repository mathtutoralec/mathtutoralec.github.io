import mime from "mime";
import axios from "axios";
import { saveAs } from "file-saver";

const DEFAULT_MAX_FILE_SIZE = 8388608;
const DEFAULT_ALLOWED_MIME = "image/";
const MB_BYTES = 1048576;

export const getMime = selectedFile => {
  const ext = selectedFile.name.split(".").pop();
  return mime.getType(ext);
};

export const mimeIsAllowed = (allowedMimes, mime) => {
  let mimeAllowed = false;
  allowedMimes.forEach(allowed => {
    if (mime.includes(allowed)) mimeAllowed = true;
  });
  return mimeAllowed;
};

export const validateFile = (selectedFile, fileOptions) => {
  const { maxSize = DEFAULT_MAX_FILE_SIZE, mimeType = DEFAULT_ALLOWED_MIME } = fileOptions || {};

  const { size } = selectedFile;
  const mime = getMime(selectedFile);

  if (size > maxSize) {
    console.error(`File is ${size} bytes of max ${maxSize}`);
    const MB = maxSize / MB_BYTES;
    throw Error(`The selected file is too large. It must be less than ${MB}MB`);
  }

  const mimeAllowed = mimeIsAllowed([mimeType], mime);
  if (!mimeAllowed) {
    console.error(`Invalid file MIME type. MIME must be allowed ${mimeType}`);
    throw Error("The selected file type is not supported");
  }
};

export const uploadFile = async (selectedFile, form) => {
  const mime = getMime(selectedFile);
  const headers = { "Content-Type": "multipart/form-data" };
  const { url, fields } = form;
  const data = new FormData();
  data.append("Content-Type", mime);
  Object.entries(fields).forEach(([k, v]) => data.append(k, v));
  data.append("file", selectedFile);
  await axios({ method: "POST", url, headers, data });
};

export const saveFile = (blob, fileName) => saveAs(blob, fileName);

export const downloadFile = async file => {
  const { url, fileName } = file;
  if (!url) return;
  const dload = await axios({ method: "GET", url, responseType: "blob" });
  const blob = new Blob([dload.data]);
  saveFile(blob, fileName);
};

export const getPrefixFromKey = key => {
  const finalSlash = key.lastIndexOf("/");
  return finalSlash !== -1 ? key.substring(0, finalSlash + 1) : "root";
};

export const getFileNameFromKey = key => {
  if (!key) return null;
  return key.split("/").pop();
};

export const getExtensionFromKey = key => {
  if (!key) return null;
  const splitKey = key.split(".");
  if (splitKey.length < 2) return "";
  return splitKey.pop();
};

export const removeExtensionFromFileName = fileName => {
  const lastDotIndex = fileName.lastIndexOf(".");
  if (lastDotIndex === -1) return fileName;
  return fileName.substring(0, lastDotIndex);
};
