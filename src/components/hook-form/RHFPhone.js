import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import FormGridItem from "../form/form-layout/FormGridItem";
// @mui
import { MuiTelInput } from "mui-tel-input";

// ----------------------------------------------------------------------

export default function RHFPhone(props) {
  const {
    name,
    wrap,
    hiddenNames,
    helperText,
    type: fieldType,
    readOnly,
    disabled,
    ...other
  } = props;
  const { control } = useFormContext();

  if (!!hiddenNames?.length && hiddenNames.includes(name)) return null;

  const render = (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <MuiTelInput
            fullWidth
            error={!!error}
            disabled={readOnly || disabled}
            helperText={error ? error?.message : helperText}
            defaultCountry="GB"
            forceCallingCode
            {...field}
            {...other}
          />
        );
      }}
    />
  );

  if (!wrap) return render;
  return <FormGridItem {...wrap}>{render}</FormGridItem>;
}

RHFPhone.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  errorCallback: PropTypes.func,
};
