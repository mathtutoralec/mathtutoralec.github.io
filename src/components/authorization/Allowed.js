import useAuthorization from "../../hooks/useAuthorization";

const Allowed = ({ roles, statements, children, isPublic }) => {
  /**
   * Assess the statements, roles and public status that are passed in
   * and return the children if the user has appropriate permissions
   */
  const { isAllowed } = useAuthorization();
  const authorized = isAllowed({ roles, statements, isPublic });
  if (authorized && !!children) return children;
  return null;
};

export default Allowed;
