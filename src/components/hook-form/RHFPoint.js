import PropTypes from 'prop-types';
import RHFTextField from './RHFTextField';
import { useFormContext } from 'react-hook-form';
// @mui
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

// ----------------------------------------------------------------------

export default function RHFPoint(props) {
  const { 
    name,
    helperText, 
    label,
    readOnly,
    disabled,
    ...other 
  } = props;

  return (
    <Grid container columnSpacing={1}>
      {label && <Grid xs={12}>
        <Typography 
          variant="caption"
          sx={ {
            color:'text.secondary',
            fontWeight: 'bold',
          } }
        >{label}</Typography>
      </Grid>}
      <Grid xs={6}>
        <RHFTextField
          label="Lat"
          name={`${name}.coordinates.0`}
          margin="dense"
          disabled={disabled || readOnly}
          {...other}
        />
      </Grid>
      <Grid xs={6}>
        <RHFTextField
          label="Lon"
          name={`${name}.coordinates.1`}
          margin="dense"
          disabled={disabled || readOnly}
          {...other}
        />
      </Grid>
      {helperText && <Grid xs={12}>
        <Typography variant="caption">{helperText || "Is this helpful"}</Typography>
      </Grid>}
    </Grid>
  );
}

RHFPoint.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};
