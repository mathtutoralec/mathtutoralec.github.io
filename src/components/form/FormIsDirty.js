import Typography from '@mui/material/Typography';

export const FormIsDirty = ({isDirty}) => {
  if (!isDirty) return null;
  return (
    <Typography variant="caption" color="error" sx={ { my: 'auto'} }>
      There are unsaved changes
    </Typography>
  )
}

export default FormIsDirty;