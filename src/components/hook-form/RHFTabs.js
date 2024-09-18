import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
// @mui
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";

// ----------------------------------------------------------------------

export function RHFTabs({ name, options = [], disabled, readOnly, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TabContext value={field.value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={(event, newValue) => {
                field.onChange(newValue);
              }}
            >
              {options.map(option => (
                <Tab
                  disabled={disabled || readOnly}
                  key={`tab-${option?.label}`}
                  label={option?.label}
                  value={option?.value}
                  icon={option?.icon}
                  iconPosition={option?.iconPosition || "start"}
                  sx={{ color: option?.color || undefined }}
                />
              ))}
            </TabList>
          </Box>
        </TabContext>
      )}
    />
  );
}

RHFTabs.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
};
