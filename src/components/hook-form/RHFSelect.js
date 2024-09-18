import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
// @mui
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Iconify from "../iconify";

// ----------------------------------------------------------------------

const EndAdornment = ({ link, sx }) => {
  if (!link) return null;
  return (
    <Link href={link} sx={{ cursor: "pointer" }} sx={sx}>
      <Iconify icon="mdi:link" width={24} sx={{ mt: 0.75 }} />
    </Link>
  );
};

// ----------------------------------------------------------------------

export function RHFSelect({
  name,
  native,
  maxHeight = 220,
  helperText,
  options = [],
  disabled,
  readOnly,
  PaperPropsSx,
  link,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          value={field?.value?.id || field?.value?.value || field?.value || ""}
          select
          fullWidth
          disabled={readOnly || disabled}
          SelectProps={{
            native,
            MenuProps: {
              PaperProps: {
                sx: {
                  ...(!native && {
                    maxHeight: typeof maxHeight === "number" ? maxHeight : "unset",
                  }),
                  ...PaperPropsSx,
                },
              },
            },
            sx: { textTransform: "capitalize" },
            endAdornment: <EndAdornment link={link} sx={{ mr: 3 }} />,
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        >
          {options.map(option => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </TextField>
      )}
    />
  );
}

RHFSelect.propTypes = {
  PaperPropsSx: PropTypes.object,
  options: PropTypes.array,
  helperText: PropTypes.string,
  maxHeight: PropTypes.number,
  name: PropTypes.string,
  native: PropTypes.bool,
};

// ----------------------------------------------------------------------

export function RHFMultiSelect({
  name,
  chip,
  label,
  options,
  checkbox = true,
  placeholder,
  readOnly,
  disabled,
  helperText,
  sx,
  ...other
}) {
  const { control } = useFormContext();

  const renderValues = selectedIds => {
    const selectedItems = options?.filter(item => selectedIds.includes(item.value));

    if (!selectedItems?.length && placeholder) {
      return (
        <Box component="em" sx={{ color: "text.disabled" }}>
          {placeholder}
        </Box>
      );
    }

    if (chip) {
      return (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {selectedItems?.map(item => (
            <Chip key={item.value} size="small" label={item.label} />
          ))}
        </Box>
      );
    }

    return selectedItems?.map(item => item.label).join(", ");
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const mappedValues = field?.value?.map(value => value?.id || value?.value || value) || [];
        return (
          <FormControl sx={sx} fullWidth>
            {label && <InputLabel id={name}> {label} </InputLabel>}

            <Select
              {...field}
              value={mappedValues}
              multiple
              fullWidth
              displayEmpty={!!placeholder}
              labelId={name}
              input={
                <OutlinedInput
                  fullWidth
                  label={label}
                  error={!!error}
                  disabled={readOnly || disabled}
                />
              }
              renderValue={renderValues}
              {...other}
            >
              {placeholder && (
                <MenuItem disabled value="">
                  <em> {placeholder} </em>
                </MenuItem>
              )}

              {options?.map(option => {
                const selected = mappedValues.includes(option.value);
                return (
                  <MenuItem key={option.value} value={option.value}>
                    {checkbox && <Checkbox size="small" disableRipple checked={selected} />}

                    {option.label}
                  </MenuItem>
                );
              })}
            </Select>

            {(!!error || helperText) && (
              <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
            )}
          </FormControl>
        );
      }}
    />
  );
}

RHFMultiSelect.propTypes = {
  checkbox: PropTypes.bool,
  chip: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  sx: PropTypes.object,
};

