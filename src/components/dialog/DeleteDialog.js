import { useState } from "react";
import PropTypes from "prop-types";
import Switched from "../common/Switched";
import Iconify from "../iconify";
// @mui
import LoadingButton from "@mui/lab/LoadingButton";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";

// ----------------------------------------------------------------------

export default function DeleteDialog(props) {
  const { entityName, requireConfirm, open, onClose, handleDelete, isDeleting } = props;
  const [deleteCheck, setDeleteCheck] = useState("");

  const onDelete = () => {
    if (!requireConfirm) handleDelete();
    if (deleteCheck.toLowerCase() === "delete") handleDelete();
  };

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <DialogTitle sx={{ pb: 2 }}>{`Delete ${entityName}?`}</DialogTitle>

      <Switched isShown={requireConfirm}>
        <DialogContent>
          <DialogContentText sx={{ typography: "body2" }}>
            This will permanently delete this {entityName} and cannot be reversed. If you want to
            continue write delete below.
          </DialogContentText>

          <TextField
            fullWidth
            margin="normal"
            label="Confirm Delete"
            value={deleteCheck}
            onChange={e => setDeleteCheck(e.target.value)}
            placeholder="delete"
          />
        </DialogContent>
      </Switched>

      <DialogActions>
        <LoadingButton
          variant="outlined"
          color="error"
          onClick={onDelete}
          loading={isDeleting}
          startIcon={<Iconify icon="basil:trash-outline" />}
        >
          Delete
        </LoadingButton>

        <Button variant="outlined" color="inherit" onClick={onClose} disabled={isDeleting}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DeleteDialog.propTypes = {
  action: PropTypes.node,
  content: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
};
