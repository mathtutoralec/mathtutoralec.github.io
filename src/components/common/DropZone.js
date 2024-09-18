import React from "react";
import DZ from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const dropRootStyle = { position: "relative", top: 0 };
const dropDragStyle = {
  width: "100%",
  height: "100%",
  background: "rgba(155, 155, 155, 0.48)",
  zIndex: 130,
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const dropBlurStyle = isDragActive => {
  return {
    filter: `blur(${isDragActive ? 4 : 0}px)`,
  };
};

const DropZone = ({ children, onDrop, accept = "image/*" }) => (
  <DZ onDrop={onDrop} accept={accept}>
    {({ getRootProps, getInputProps, isDragActive }) => (
      <div {...getRootProps()} onClick={() => {}} id="OpenChannel" style={dropRootStyle}>
        {isDragActive && (
          <div style={dropDragStyle}>
            <FontAwesomeIcon icon={faUpload} /> <h3>Release to Upload</h3>
          </div>
        )}

        <input id="files" {...getInputProps()} />

        <div style={dropBlurStyle(isDragActive)}>{children}</div>
      </div>
    )}
  </DZ>
);

export default DropZone;
