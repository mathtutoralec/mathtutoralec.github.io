import PropTypes from "prop-types";
import Iconify from "../iconify/Iconify";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import moment from "moment";
// @mui
import FormHelperText from "@mui/material/FormHelperText";
import RHFDefaultArrayFooter from "./RHFDefaultArrayFooter";
import RHFTextField from "./RHFTextField";
import RHFDatePicker from "./RHFDatePicker";
import RHFDateTimePicker from "./RHFDateTimePicker";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import RHFPoint from "./RHFPoint";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// ----------------------------------------------------------------------

const getFieldComponent = fieldType => {
  if (fieldType === "text") return RHFTextField;
  if (fieldType === "date") return RHFDatePicker;
  if (fieldType === "datetime") return RHFDateTimePicker;
  if (fieldType === "point") return RHFPoint;
};

const getNewItem = fieldType => {
  if (fieldType === "text") return { value: "" };
  if (fieldType === "date") return { value: moment.utc() };
  if (fieldType === "datetime") return { value: moment.utc() };
  if (fieldType === "point") return { type: "Point", coordinates: [1, 1] };
};

// ----------------------------------------------------------------------

export default function RHFFormArray(props) {
  const { name, helperText, label, sx, fieldType = "text", readOnly, disabled, ...other } = props;
  const { newItem = getNewItem(fieldType) } = props;
  const { control } = useFormContext();
  const { fields, append, remove, prepend } = useFieldArray({ control, name });

  const FieldComponent = getFieldComponent(fieldType);

  return (
    <Stack spacing={0.5}>
      <Typography
        variant="caption"
        sx={{
          color: "text.secondary",
          fontWeight: "bold",
        }}
      >
        {label}
      </Typography>
      {fields.map((field, index) => {
        const fieldName = fieldType === "point" ? `${name}.${index}` : `${name}.${index}.value`;
        return (
          <Grid container key={field.id} spacing={1}>
            <Grid xs>
              <FieldComponent
                name={fieldName}
                margin="none"
                disabled={readOnly || disabled}
                {...other}
              />
            </Grid>
            <Grid xs="auto" display="flex" marginTop={1.5}>
              <Button
                size="small"
                onClick={() => remove(index)}
                variant="outlined"
                disabled={readOnly || disabled}
              >
                <Iconify icon="mingcute:delete-2-line" />
              </Button>
            </Grid>
          </Grid>
        );
      })}
      <Stack direction="row" spacing={3}>
        <RHFDefaultArrayFooter append={append} newItem={newItem} disabled={readOnly || disabled} />
        <Controller
          control={control}
          name={name}
          render={({ fieldState: { error } }) => (
            <FormHelperText error={!!error?.message}>
              {error?.message ? error.message : helperText}
            </FormHelperText>
          )}
        />
      </Stack>
    </Stack>
  );
}

RHFFormArray.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  sx: PropTypes.object,
  fieldType: PropTypes.string,
  newItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
