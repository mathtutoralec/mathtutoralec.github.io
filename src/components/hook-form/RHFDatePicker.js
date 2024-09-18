import PropTypes from "prop-types";
import moment from "moment";
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// ----------------------------------------------------------------------

export default function RHFDatePicker(props) {
  const {
    name,
    helperText,
    type,
    errorCallback,
    margin,
    readOnly,
    disabled,
    pickerIcon,
    fullWidth = true,
    ...other
  } = props;
  const { control } = useFormContext();

  const getFieldValue = value => {
    if (!value) return null;
    if (moment.isMoment(value)) return value;
    return moment(value);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        if (errorCallback) errorCallback(!!error);
        return (
          <DatePicker
            {...field}
            value={getFieldValue(field.value)}
            slotProps={{
              textField: {
                fullWidth: !pickerIcon && fullWidth,
                error: !!error,
                helperText: error ? error?.message : helperText,
                margin: margin,
                readOnly: !pickerIcon,
                variant: pickerIcon ? "standard" : "outlined",
                sx: !!pickerIcon ? { maxWidth: 130 } : undefined,
              },
              inputAdornment: {
                sx: { marginTop: !!pickerIcon ? -0.5 : 0 },
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

RHFDatePicker.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  errorCallback: PropTypes.func,
};
