import { Allowed } from "../authorization";
import Iconify from "../iconify";
import FormIsDirty from "../form/FormIsDirty";
//@mui
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import Switched from "../common/Switched";

export const SaveButton = props => {
  const {
    loading,
    loadingPosition = "start",
    color = "primary",
    statements = ["*"],
    onClick = () => null,
    label = "Save",
    loadingLabel = "Saving...",
    noLoadingLabel,
    startIcon = <Iconify icon="basil:save-outline" />,
    disabled,
    variant = "contained",
    isDirty,
    isShown = true,
    sx,
    ...other
  } = props;
  return (
    <Switched isShown={!!isShown}>
      <Stack direction="row" spacing={2} alignItems="center">
        <FormIsDirty isDirty={isDirty} />
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
      </Stack>
    </Switched>
  );
};

export default SaveButton;

