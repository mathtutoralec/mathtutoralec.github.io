import { Children, cloneElement } from "react";
//lib
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
//s16
import Iconify from "../iconify";
//mui
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import OutlinedBox from "../outlined-box/OutlinedBox";
import RHFDefaultArrayFooter from "./RHFDefaultArrayFooter";
import Switched from "../common/Switched";
import React from "react";

/* ----------------------------------------------------------------------

Note: The component to be rendered for each item in the fields array should
be passed in as the child of <RHFCustomArray> and will have an index prop 
injected into any other props it has

---------------------------------------------------------------------- */

const DefaultRemoveItemButton = ({ remove, index, readOnly, disabled }) => (
  <Grid xs="auto" display="flex" justifyContent="center">
    <Button
      size="small"
      onClick={() => remove(index)}
      variant="outlined"
      disabled={readOnly || disabled}
    >
      <Iconify icon="mingcute:delete-2-line" />
    </Button>
  </Grid>
);

const BoxWrapper = ({ children }) => <Box width="100%">{children}</Box>;

const WrapperComponent = ({ children, noBox }) => {
  if (noBox) return <BoxWrapper>{children}</BoxWrapper>;
  return <OutlinedBox>{children}</OutlinedBox>;
};

// ----------------------------------------------------------------------

const RHFCustomArray = props => {
  const {
    label,
    name,
    helperText,
    RemoveItemButton = DefaultRemoveItemButton,
    ArrayFooter = RHFDefaultArrayFooter,
    RenderComponent,
    newItem = { value: "" },
    readOnly,
    disabled,
    noBox = false,
    divideItems = false,
    noDelete = false,
    ...other
  } = props;

  const { control } = useFormContext();
  const { fields, append, remove, prepend } = useFieldArray({ control, name });

  return (
    <WrapperComponent label={label} {...other}>
      {fields.map((field, index) => {
        return (
          <React.Fragment key={field.id}>
            <Grid
              container
              width="100%"
              key={field.id}
              spacing={1}
              alignItems="center"
              marginTop={1}
            >
              {Children.map(props.children, child => cloneElement(child, { index }))}
              <Switched isShown={!noDelete}>
                <RemoveItemButton
                  remove={remove}
                  index={index}
                  readOnly={readOnly}
                  disabled={disabled}
                />
              </Switched>
            </Grid>
            {divideItems && <Divider sx={{ my: 2 }} />}
          </React.Fragment>
        );
      })}
      <Stack direction="row" spacing={3} marginTop={1}>
        <ArrayFooter append={append} newItem={newItem} disabled={readOnly || disabled} />
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
    </WrapperComponent>
  );
};

export default RHFCustomArray;

