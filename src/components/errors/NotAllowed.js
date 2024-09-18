import CustomAlert from "./CustomAlert";

export const NotAllowed = () => (
  <CustomAlert
    title="Permission Denied"
    message="You do not have permission to access this resource"
    severity="warning"
  />
);

export default NotAllowed;
