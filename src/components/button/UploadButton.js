import { useRef } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function UploadButton(props) {
  const { label, onChange, ...rest } = props;
  return (
    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} {...rest}>
      {label}
      <VisuallyHiddenInput type="file" onChange={onChange} />
    </Button>
  );
}

export const UploadIconButton = props => {
  const { onChange, sx } = props;
  const fileInputRef = useRef(null);
  return (
    <>
      <VisuallyHiddenInput type="file" onChange={onChange} ref={fileInputRef} />
      <IconButton onClick={() => fileInputRef.current.click()} sx={{ ...sx }}>
        <CloudUploadIcon />
      </IconButton>
    </>
  );
};
