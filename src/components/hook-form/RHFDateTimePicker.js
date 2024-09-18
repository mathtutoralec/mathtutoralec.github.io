import PropTypes from "prop-types";
import moment from "moment";
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Iconify from "../iconify";
import Switched from "../common/Switched";

// ----------------------------------------------------------------------

export default function RHFDateTimePicker(props) {
  const { name, helperText, type, margin, readOnly, disabled, canNull, ...other } = props;
  const { control, setValue } = useFormContext();

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
        return (
          <Stack direction="row" spacing={1} alignItems="flex-start">
            <MobileDateTimePicker
              {...field}
              value={getFieldValue(field?.value)}
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
            <Switched isShown={canNull}>
              <IconButton onClick={() => setValue(name, null)} sx={{ marginTop: 1 }}>
                <Iconify icon={"mdi:clear-box-outline"} />
              </IconButton>
            </Switched>
          </Stack>
        );
      }}
    />
  );
}

RHFDateTimePicker.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  errorCallback: PropTypes.func,
};
