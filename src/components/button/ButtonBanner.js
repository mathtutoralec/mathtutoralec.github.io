import PropTypes from "prop-types";
import CustomButton from "./CustomButton";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

// ----------------------------------------------------------------------

export const ButtonBanner = props => {
  const { buttons, noCard, sx } = props;
  const output = (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      sx={noCard ? { width: "100%", ...sx } : { width: "100%" }}
    >
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
        {buttons.map((button, index) => {
          const { Component, position, ...buttonProps } = button;
          if (position !== "left") return null;
          if (Component)
            return <button.Component key={`bb-button-left-${index}`} {...buttonProps} />;
          return <CustomButton key={`bb-button-left-${index}`} {...buttonProps} />;
        })}
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
        {buttons.map((button, index) => {
          const { Component, position, ...buttonProps } = button;
          if (position === "left") return null;
          if (Component)
            return <button.Component key={`bb-button-left-${index}`} {...buttonProps} />;
          return <CustomButton key={`bb-button-right-${index}`} {...buttonProps} />;
        })}
      </Stack>
    </Stack>
  );
  if (noCard) return output;
  return <Card sx={{ width: "100%", mt: 2, p: 2, ...sx }}>{output}</Card>;
};

ButtonBanner.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      label: PropTypes.string,
      loadingLabel: PropTypes.string,
      position: PropTypes.string,
      icon: PropTypes.string,
      color: PropTypes.string,
      variant: PropTypes.string,
      statements: PropTypes.arrayOf(PropTypes.string),
      isPublic: PropTypes.bool,
      disabled: PropTypes.bool,
      shown: PropTypes.bool,
      loading: PropTypes.bool,
      href: PropTypes.string,
    })
  ),
};

export default ButtonBanner;
