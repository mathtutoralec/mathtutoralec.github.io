import { useMemo } from "react";
import { useHistory } from "react-router-dom";

// ----------------------------------------------------------------------

export function useRouter() {
  const history = useHistory();

  const router = useMemo(
    () => ({
      back: () => history.go(-1),
      forward: () => history.go(1),
      reload: () => window.location.reload(),
      push: href => history.push(href),
      replace: href => history.replace(href, { replace: true }),
    }),
    [history]
  );

  return router;
}

