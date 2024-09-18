import { useSelector } from "react-redux";
import { selectCurrentUser } from "store/authenticator/selectors";

export const useCurrentUser = () => {
  const user = useSelector(selectCurrentUser);
  return user;
};

export default useCurrentUser;
