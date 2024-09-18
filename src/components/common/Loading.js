import React from "react";
//@mui
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Loading = ({ message, sx, ...props }) => {
  return (
    <Stack
      sx={{
        margin: "auto",
        alignItems: "center",
        ...sx,
      }}
      {...props}
    >
      <CircularProgress />
      <Typography variant="caption" mt={2}>
        {message}
      </Typography>
    </Stack>
  );
};

export default Loading;
