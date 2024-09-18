
import { useFormContext, Controller } from "react-hook-form";
import FormGridItem from '../form/form-layout/FormGridItem'
// @mui
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Iconify from '../iconify/Iconify';

// ----------------------------------------------------------------------

const EndAdornment = ({ link }) => {
  if (!link) return null;
  return (
    <Link href={link} sx={{ cursor: "pointer" }}>
      <Iconify icon="mdi:link" width={25} />
    </Link>
  );
};

// ----------------------------------------------------------------------

export default function RHFTextField(props) {
  const {
    name,
    wrap,
    hiddenNames,
    helperText,
    type: fieldType,
    readOnly,
    disabled,
    link,
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
              endAdornment: <EndAdornment link={link} />,
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

