import PropTypes from "prop-types";

import Switched from "../../Switched";
import FormVertical from "./FormVertical";
import FormSectioned from "./FormSectioned";
import Form2Col from "./Form2Col";
import Form3Col from "./Form3Col";

import Box from "@mui/material/Box";

export const Form = props => {
  const { formData, layout = "vertical", onSubmit = () => null, sx, ...rest } = props;

  return (
    <Box sx={sx}>
      <form onSubmit={onSubmit} {...rest}>
        <Switched isShown={layout === "vertical"}>
          <FormVertical formData={formData} {...rest} />
        </Switched>
        <Switched isShown={layout === "sectioned"}>
          <FormSectioned formData={formData} {...rest} />
        </Switched>
        <Switched isShown={layout === "2col"}>
          <Form2Col formData={formData} {...rest} />
        </Switched>
        <Switched isShown={layout === "3col"}>
          <Form3Col formData={formData} {...rest} />
        </Switched>
      </form>
    </Box>
  );
};

export default Form;

Form.propTypes = {
  formData: PropTypes.object,
  layout: PropTypes.oneOf(["vertical", "2col", "3col", "sectioned"]),
};

