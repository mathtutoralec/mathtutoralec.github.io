import PropTypes from 'prop-types';
// @mui
import Grid from "@mui/material/Unstable_Grid2";

// ----------------------------------------------------------------------

const defaultColumnWidths = {
  xs: 12,
  sm: 12,
  md: 6,
  lg: 4, 
  xl: 4,
}

const getColumnWidths = (propSizes) => {
  const widths = {};
  let override = false;
  Object.keys(defaultColumnWidths).forEach(size => {
    if (propSizes[size]) {
      override = propSizes[size];
      return widths[size] = propSizes[size];
    }
    if (!!override) return widths[size] = override;
    widths[size] = defaultColumnWidths[size];
  });
  return widths;
}

// ----------------------------------------------------------------------

export default function FormGridItem (props){
  const { 
    children, xs, sm, md, lg, xl,
    ...other
  } = props;
  const columnWidths = getColumnWidths({xs, sm, md, lg, xl})
  return (
    <Grid {...columnWidths} {...other}>
      {children}
    </Grid>
  );
} 

FormGridItem.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
}
