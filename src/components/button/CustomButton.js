import { Allowed } from "../authorization";
import Iconify from "../iconify/Iconify";
import Switched from "../common/Switched";
//@mui
import LoadingButton from "@mui/lab/LoadingButton";

const getLoadingPosition = (loadingPosition, startIcon, endIcon) => {
  if (!!loadingPosition) return loadingPosition;
  if (!!startIcon) return "start";
  if (!!endIcon) return "end";
};

export const CustomButton = (props) => {
  const {
    loading = false,
    color = "primary",
    loadingPosition,
    statements = ["*"],
    isPublic,
    onClick = () => null,
    label = "OK",
    loadingLabel = "",
    startIcon = "",
    endIcon = "",
    disabled = false,
    isShown = true,
    variant = "contained",
    href,
    sx,
    ...other
  } = props;

  return (
    <Switched isShown={!!isShown}>
      <Allowed statements={statements} isPublic={isPublic}>
        <LoadingButton
          loading={loading}
          loadingPosition={getLoadingPosition(
            loadingPosition,
            startIcon,
            endIcon
          )}
          color={color}
          onClick={onClick}
          href={href}
          startIcon={startIcon ? <Iconify icon={startIcon} /> : undefined}
          endIcon={endIcon ? <Iconify icon={endIcon} /> : undefined}
          disabled={disabled}
          variant={variant}
          sx={sx}
          {...other}
        >
          {!!loading && !!loadingLabel ? loadingLabel : label}
        </LoadingButton>
      </Allowed>
    </Switched>
  );
};

export default CustomButton;
