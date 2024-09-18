import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
import { useEffect, useMemo, useCallback } from "react";
// hooks
import { useLocalStorage } from "../../hooks/useLocalStorage";
// utils
import { localStorageGetItem } from "../../utils/storage";
//
import { SettingsContext } from "./SettingsContext";

// ----------------------------------------------------------------------

const STORAGE_KEY = "settings";

const defaultSettings = {
  themeMode: "dark",
  themeDirection: "ltr",
  themeContrast: "default",
  themeLayout: "vertical",
  themeColorPresets: "default",
  themeStretch: false,
};

export function SettingsProvider({ children }) {
  const { state, update, reset } = useLocalStorage(STORAGE_KEY, defaultSettings);
  const canReset = !isEqual(state, defaultSettings);

  // RTL
  const onChangeDirectionByLang = useCallback(
    lang => {
      update("themeDirection", lang === "ar" ? "rtl" : "ltr");
    },
    [update]
  );

  const isArabic = localStorageGetItem("i18nextLng") === "ar";

  useEffect(() => {
    if (isArabic) onChangeDirectionByLang("ar");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isArabic]);

  const memoizedValue = useMemo(
    () => ({
      ...state,
      onUpdate: update,
      // Direction
      onChangeDirectionByLang,
      // Reset
      canReset,
      onReset: reset,
    }),
    [reset, update, state, canReset, onChangeDirectionByLang]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}

SettingsProvider.propTypes = {
  children: PropTypes.node,
};
