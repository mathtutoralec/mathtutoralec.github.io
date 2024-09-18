import { useState } from "react";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
// @mui
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// ----------------------------------------------------------------------

export default function RHFPassword(props) {
  const { name, helperText, type, errorCallback, readOnly, disabled, ...other } = props;
  const { control } = useFormContext();

  const [showPassword, setShowPassword] = useState();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        if (errorCallback) errorCallback(!!error);
        return (
          <TextField
            {...field}
            fullWidth
            value={field.value || ""}
            type={showPassword ? "text" : "password"}
            disabled={disabled || readOnly}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(state => !state)}
                    onMouseDown={event => event.preventDefault()}
                    edge="end"
                    tabIndex={-1}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!!error}
            helperText={error ? error?.message : helperText}
            {...other}
          />
        );
      }}
    />
  );
}

RHFPassword.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  errorCallback: PropTypes.func,
};

