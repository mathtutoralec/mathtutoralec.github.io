import { useLocation, matchPath } from "react-router-dom";

// ----------------------------------------------------------------------

export function useActiveLink(path, deep = true) {
  const { pathname } = useLocation();

  const normalActive = path ? !!matchPath(pathname, { path, exact: true }) : false;
  const deepActive = path ? !!matchPath(pathname, { path, exact: false }) : false;

  return deep ? deepActive : normalActive;
}

export default useActiveLink;

