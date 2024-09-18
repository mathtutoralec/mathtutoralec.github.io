import PropTypes from "prop-types";
import moment from "moment";
import { useFormContext, Controller } from "react-hook-form";
import Iconify from "../iconify/Iconify";
// @mui
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";

// ----------------------------------------------------------------------

export default function RHFDateRangePicker(props) {
  const {
    name,
    helperText,
    type,
    errorCallback,
    margin,
    readOnly,
    disabled,
    twoFields,
    pickerIcon,
    fullWidth = true,
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
          <DateRangePicker
            {...field}
            value={field.value || [moment.utc(), moment.utc()]}
            slots={
              twoFields
                ? null
                : {
                    field: SingleInputDateRangeField,
                  }
            }
            slotProps={{
              textField: {
                fullWidth: !pickerIcon && fullWidth,
                error: !!error,
                helperText: error ? error?.message : helperText,
                margin: margin,
                readOnly: !pickerIcon,
                variant: pickerIcon ? "standard" : "outlined",
                InputProps: {
                  disableUnderline: true,
                  endAdornment: (
                    <Iconify
                      icon="solar:calendar-mark-bold-duotone"
                      width={pickerIcon ? 28 : 24}
                      sx={{
                        marginTop: !!pickerIcon ? -0.5 : 0,
                        cursor: "pointer",
                      }}
                    />
                  ),
                },
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

RHFDateRangePicker.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  errorCallback: PropTypes.func,
};
