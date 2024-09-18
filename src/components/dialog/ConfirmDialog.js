import PropTypes from "prop-types";
import Switched from "../common/Switched";
// @mui
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

// ----------------------------------------------------------------------

export default function ConfirmDialog(props) {
  const {
    title,
    content,
    action,
    loading,
    open,
    onClose,
    onConfirm,
    closeOnConfirm,
    forceButtonClick,
    switched,
    noCancel = false,
  } = props;

  if (!!switched && !open) return null;

  const _onConfirm = async () => {
    const result = await onConfirm();
    if (closeOnConfirm) onClose();
    return result;
  };

  const onConfirmAction = (
    <LoadingButton variant="contained" color="primary" onClick={_onConfirm} loading={loading}>
      Confirm
    </LoadingButton>
  );

  const renderAction = !!action ? action : onConfirmAction;

  const preventCloseOnBackdropClick = !!loading || !!forceButtonClick;

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={!preventCloseOnBackdropClick ? onClose : undefined}
    >
      <Switched isShown={!!title}>
        <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>
      </Switched>

      <Switched isShown={!!content}>
        <DialogContent sx={{ typography: "body2" }}>{content}</DialogContent>
      </Switched>

      <DialogActions>
        <Switched isShown={!noCancel}>
          <Button color="error" variant="outlined" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
        </Switched>

        {renderAction}
      </DialogActions>
    </Dialog>
  );
}

ConfirmDialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  action: PropTypes.node,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

