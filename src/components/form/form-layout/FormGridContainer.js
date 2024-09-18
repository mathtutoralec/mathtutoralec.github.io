import PropTypes from "prop-types";
// @mui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

// ----------------------------------------------------------------------

export default function FormGridContainer(props) {
  const {
    columnSpacing = { xs: 4, md: 6 },
    rowSpacing = { xs: 4, md: 6 },
    columns = 12, // Only change this if you know what you're doing
    children,
    title = "",
    titleVariant = "h6",
    ...other
  } = props;
  return (
    <Grid
      container
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
      columns={columns}
      {...other}
    >
      {title && (
        <Grid xs={12}>
          <Typography variant={titleVariant} gutterBottom>
            {title}
          </Typography>
        </Grid>
      )}
      {children}
    </Grid>
  );
}

FormGridContainer.propTypes = {
  columnSpacing: PropTypes.object,
  rowSpacing: PropTypes.object,
  columns: PropTypes.object,
  titleVariant: PropTypes.string,
};

