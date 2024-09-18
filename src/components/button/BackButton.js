import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const BackButton = ({ label = "BACK", ...props }) => {
  const { goBack } = useNavigate();
  return (
    <Button onClick={goBack} {...props}>
      {label}
    </Button>
  );
};

export default BackButton;
