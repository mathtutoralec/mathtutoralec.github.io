import { Children } from 'react';
import useAuthorization from '../../hooks/useAuthorization';
import NotAllowed from '../errors/NotAllowed';

export const Allow = ({ children }) => children;
Allow.displayName = "Allow";

export const Deny = ({ children }) => children;
Deny.displayName = "Deny";

export const Authorized = ({ roles, statements, isPublic, children, denyError=true }) => {
  /**
   * Check if the provided roles and statements are allowed and return
   * either the Allow or Deny children accordingly, i.e.
   * 
   * <Authorized>
   *  <Allow>{children_if_allowed}</Allow>
   *  <Deny>{children_if_denied}</Deny>
   * </Authorized>
   * 
   * If public, return allow regardless of permissions.
   * 
   * If no deny or deny is empty, error is returned by default unless denyError is false
   */
  const _children = Children.toArray(children);
  const allow = _children.find(c => c.type.displayName === 'Allow');
  const deny = _children.find(c => c.type.displayName === 'Deny');
  
  const { isAllowed } = useAuthorization();
  const authorized = isAllowed({ roles, statements, isPublic });

  if (authorized) return allow;
  if (!!deny) return deny;
  return denyError ? <NotAllowed /> : null;

};