import useAuthorization from "../../hooks/useAuthorization";

const Feature = ({ products, exact, includes, isPublic, children }) => {
  /**
   * Assess the products array passed in and return the children if 
   * the user is allowed to use these products
   */
  const { isFeatureAllowed } = useAuthorization();
  const authorized = isFeatureAllowed({ products, exact, includes, isPublic });

  if (authorized) return children;
  return null;
};

export default Feature;