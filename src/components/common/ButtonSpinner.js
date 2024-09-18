import React from "react";
import { Spinner } from "reactstrap";

export const ButtonSpinner = ({ className = "ml-2", color = "light", size = "sm" }) => (
  <Spinner size={size} color={color} className={className} style={{ marginBottom: "3px" }} />
);

export default ButtonSpinner;
