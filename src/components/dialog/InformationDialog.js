import PropTypes from 'prop-types';
import Switched from 'components/common/Switched';
// @mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

// ----------------------------------------------------------------------

export default function InformationDialog({ title, content, action, open, onClose, ...other }) {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose} {...other}>
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>

      <Switched isShown={!!content}>
        <DialogContent sx={{ typography: 'body2' }}> 
          {content} 
        </DialogContent>
      </Switched>

      <DialogActions>
        <Button variant="outlined" color="inherit" onClick={onClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

InformationDialog.propTypes = {
  action: PropTypes.node,
  content: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
};
