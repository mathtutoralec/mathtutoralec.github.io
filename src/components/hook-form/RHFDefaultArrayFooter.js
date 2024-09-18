import PropTypes from "prop-types";
import Iconify from "../iconify";
//@mui
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// ----------------------------------------------------------------------

export default function RHFDefaultArrayFooter({ append, newItem, disabled, buttonText = "Add" }) {
  return (
    <Box>
      <Button
        onClick={() => append(newItem)}
        startIcon={<Iconify icon="mingcute:add-line" />}
        variant="outlined"
        disabled={disabled}
      >
        {buttonText}
      </Button>
    </Box>
  );
}

RHFDefaultArrayFooter.propTypes = {
  append: PropTypes.func,
  newItem: PropTypes.any,
};
