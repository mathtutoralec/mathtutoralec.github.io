import PropTypes from "prop-types";
import moment from "moment";
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

// ----------------------------------------------------------------------

export default function RHFTimePicker(props) {
  const {
    name,
    helperText,
    type,
    errorCallback,
    margin,
    readOnly,
    disabled,
    ...other
  } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        if (errorCallback) errorCallback(!!error);
        return (
          <MobileTimePicker
            {...field}
            value={moment(field.value)}
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!error,
                helperText: error ? error?.message : helperText,
                margin: margin,
              },
            }}
            disabled={disabled || readOnly}
            {...other}
          />
        );
      }}
    />
  );
}

RHFTimePicker.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  errorCallback: PropTypes.func,
};
