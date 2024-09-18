import { Allowed } from "../authorization";
import Iconify from "../iconify";
//@mui
import LoadingButton from "@mui/lab/LoadingButton";
import Switched from "../common/Switched";

export const DeleteButton = props => {
  const {
    loading = false,
    loadingPosition = "start",
    color = "error",
    statements = ["*"],
    onClick = () => null,
    label = "Delete",
    loadingLabel = "Deleting...",
    noLoadingLabel = false,
    startIcon = <Iconify icon="basil:trash-outline" />,
    disabled = false,
    variant = "contained",
    isShown = true,
    sx,
    ...other
  } = props;
  return (
    <Switched isShown={!!isShown}>
      {/* <Allowed statements={statements}> */}
      <LoadingButton
        loading={loading}
        loadingPosition={loadingPosition}
        color={color}
        onClick={onClick}
        startIcon={startIcon}
        disabled={disabled}
        variant={variant}
        sx={sx}
        {...other}
      >
        {loading && !noLoadingLabel ? loadingLabel : label}
      </LoadingButton>
      {/* </Allowed> */}
    </Switched>
  );
};

export default DeleteButton;

