import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const WrappedAction = ({ children }) => {
  return (
    <Stack justifyContent="center" sx={{ height: "calc(100% - 4px)" }}>
      {children}
    </Stack>
  );
};

const CustomAlert = props => {
  const { title, message, severity = "error", variant, action, ...other } = props;
  return (
    <Alert
      severity={severity}
      variant={variant}
      {...other}
      action={!!action ? <WrappedAction>{action}</WrappedAction> : undefined}
    >
      {!!title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  );
};

export default CustomAlert;
