import { Controller, useFormContext } from "react-hook-form";
import Iconify from "components/iconify/Iconify";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

//TODO

const ToggleView = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name="view"
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <ToggleButtonGroup
            size="small"
            exclusive
            value={value}
            onChange={(event, newValue) => onChange(newValue)}
          >
            <ToggleButton value="list">
              <Iconify icon="solar:list-bold" />
            </ToggleButton>

            <ToggleButton value="grid">
              <Iconify icon="mingcute:dot-grid-fill" />
            </ToggleButton>
          </ToggleButtonGroup>
        );
      }}
    />
  );
};

export default ToggleView;
