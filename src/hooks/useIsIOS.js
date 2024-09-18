import { useState, useEffect } from "react";

const checkForIOS = () => {
  // User is running PWA on iOS
  if (navigator.standalone === true) return false;

  // User is not running iOS
  if (navigator.standalone === undefined) return false;

  const ua = window.navigator.userAgent;
  const webkit = !!ua.match(/WebKit/i);
  const isSafari = webkit && !ua.match(/CriOS/i);

  return isSafari;
};

export const useIsIOS = () => {
  const [isIOS, setIsIOS] = useState(false);
  useEffect(() => setIsIOS(checkForIOS()), []);
  return { isIOS };
};

export default useIsIOS;