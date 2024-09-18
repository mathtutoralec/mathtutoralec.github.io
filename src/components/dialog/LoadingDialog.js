import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';

// ----------------------------------------------------------------------

export default function LoadingDialog({ content, title="Loading", isLoading, ...other }) {
  return (
    <Dialog fullWidth maxWidth="xs" open={isLoading} {...other}>
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>
        <DialogContent sx={{ typography: 'body2', overflow:'hidden'}}> 
          <Stack alignItems='center' mt={2} mb={5}>
            <CircularProgress />
            {content} 
          </Stack>
        </DialogContent>
    </Dialog>
  );
}

LoadingDialog.propTypes = {
  content: PropTypes.node,
  open: PropTypes.bool,
  title: PropTypes.string,
};
