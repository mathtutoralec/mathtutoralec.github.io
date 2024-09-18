import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/authenticator/selectors";

const checkAuthorizations = ({ permission, statement }) => {
  const _statement = statement.split(":");
  const _permission = permission.split(":");

  // Add * to any incomplete statements, such as `service:*`
  for (let i = _statement.length; i < 3; i++) _statement.push("*");
  for (let i = _permission.length; i < 3; i++) _permission.push("*");

  return (
    (_statement[0] === _permission[0] || _statement[0] === "*" || _permission[0] === "*") &&
    (_statement[1] === _permission[1] || _statement[1] === "*" || _permission[1] === "*") &&
    (_statement[2] === _permission[2] || _statement[2] === "*" || _permission[2] === "*")
  );
};

const checkStatements = ({ statements, permissions }) => {
  if (!statements?.length) return false;
  return statements.some(
    statement =>
      (permissions.allow.some(permission => checkAuthorizations({ permission, statement })) ||
        permissions.restricted.some(permission => checkAuthorizations({ permission, statement }))) &&
      !permissions.deny.some(permission => checkAuthorizations({ permission, statement }))
  );
};

const checkRoles = ({ roles, permissions }) => {
  // There must be at least 1 role and 1 permissions.role
  if (!roles?.length || !permissions?.roles?.length) return false;

  // Check all required roles to see if the user has one
  return roles.reduce((prev, curr) => {
    if (permissions.roles.includes(curr)) return true;
    return prev;
  }, false);
};

const _isAllowed = ({ permissions, roles, statements, isPublic }) => {
  /**
   * Allowed if:
   *
   * - is public
   * - roles and statements are empty, null or undefined
   * - any of the roles in the roles array match a role in permissions.role
   * - any of the statements in the statements array match a statement.allow
   *   or statement.restricted value and not a statement.deny value
   *
   * Roles are checked before statements.
   */
  if (isPublic) return true; // If public, always allowed
  if (!roles?.length && !statements?.length) return true;
  return checkRoles({ roles, permissions }) || checkStatements({ statements, permissions });
};

const _isFeatureAllowed = ({ permissions, products, exact, includes, isPublic }) => {
  /**
   * Allowed if:
   *
   * - is public
   * - there are no products specified
   * - exact is specified and all products are in permissions.products
   * - includes is specified and one or more products are in permissions.products
   */
  if (isPublic) return true; // If public, always allowed
  if (!products?.length) return true; // If no products, always allowed

  const pProducts = permissions?.products?.map(p => p.toLowerCase()) || [];
  const fProducts = products.map(p => p.toLowerCase());

  if (exact) return fProducts.every(p => pProducts.includes(p));
  if (includes) return fProducts.some(p => pProducts.includes(p));
  return false; // Must be either exact or includes
};

export const useAuthorization = () => {
  const permissions = useSelector(selectCurrentUser);

  // Wrappers for functions above
  const isAllowed = ({ roles, statements, isPublic }) => {
    return _isAllowed({ roles, statements, permissions, isPublic });
  };

  const isFeatureAllowed = ({ products, exact, includes, isPublic }) => {
    return _isFeatureAllowed({ permissions, products, exact, includes, isPublic });
  };

  return { isAllowed, isFeatureAllowed };
};

export default useAuthorization;
