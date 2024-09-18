import Container from "@mui/material/Container";
import CustomAlert from "./CustomAlert";
import BackButton from "../button/BackButton";

export const RouteNotAllowed = () => (
  <Container>
    <CustomAlert
      severity="warning"
      title="Permission Denied"
      message="You do not have permission to access this route"
      action={<BackButton />}
    />
  </Container>
);

export default RouteNotAllowed;
