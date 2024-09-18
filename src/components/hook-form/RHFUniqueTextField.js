import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import FormGridItem from "../form/form-layout/FormGridItem";
// @mui
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Iconify from "../iconify";
import { CircularProgress, Tooltip } from "@mui/material";

// ----------------------------------------------------------------------

const Adornment = ({ error, isUnique, uniqueLoading }) => {
  const renderLoading = <CircularProgress size={22} color="success" thickness={5} />;
  const renderUnique = (
    <Tooltip title="Name is Available">
      <Iconify icon={"mdi:tick-circle-outline"} color="success.main" width={25} />
    </Tooltip>
  );
  const renderTaken = (
    <Tooltip title="Name is taken">
      <Iconify icon="mdi:error-outline" color="error.main" width={25} />
    </Tooltip>
  );
  const renderError = (
    <Tooltip title="Errored">
      <Iconify icon="mdi:error" color="error.main" width={25} />
    </Tooltip>
  );
  const renderNotChecked = (
    <Tooltip title="Not Checked">
      <Iconify icon={"mdi:tick-circle-outline"} color="text.disabled" width={25} />
    </Tooltip>
  );

  const Render = ({ render }) => <InputAdornment position="end">{render}</InputAdornment>;

  // Always show loading if loading and error if errored
  if (uniqueLoading) return <Render render={renderLoading} />;
  if (error) return <Render render={renderError} />;

  // truthy means it is available
  if (!!isUnique) return <Render render={renderUnique} />;

  // undefined means it hasn't debounced yet but that it has changed
  if (isUnique === undefined) return <Render render={renderLoading} />;

  // false means it has been checked and is taken
  if (isUnique === false) return <Render render={renderTaken} />;

  // It shouldn't be possible to get here
  return <Render render={renderNotChecked} />;
};

// ----------------------------------------------------------------------

export default function RHFUniqueTextField(props) {
  const {
    name,
    wrap,
    hiddenNames,
    helperText,
    type: fieldType,
    readOnly,
    disabled,
    isUnique,
    uniqueLoading,
    ...other
  } = props;
  const { control } = useFormContext();

  const isNumber = fieldType === "number";
  const type = isNumber ? undefined : fieldType;

  if (!!hiddenNames?.length && hiddenNames.includes(name)) return null;

  const render = (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const onChange = event => {
          const value = event.target.value;
          if (isNumber && (isNaN(value) || value.includes(" "))) return;
          field.onChange(value);
        };

        return (
          <TextField
            {...field}
            fullWidth
            type={type}
            onChange={onChange}
            value={field.value || ""}
            error={!!error}
            disabled={readOnly || disabled}
            helperText={error ? error?.message : helperText}
            InputProps={{
              endAdornment: (
                <Adornment error={!!error} isUnique={isUnique} uniqueLoading={uniqueLoading} />
              ),
            }}
            {...other}
          />
        );
      }}
    />
  );

  if (!wrap) return render;
  return <FormGridItem {...wrap}>{render}</FormGridItem>;
}

RHFUniqueTextField.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  errorCallback: PropTypes.func,
};

