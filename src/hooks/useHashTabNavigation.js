
import { useLocation } from "react-router-dom";

const getTabFromHash = (hash, tabs, defaultTab) => {
  if (!hash) return defaultTab || null;
  const allowedTabs = Object.keys(tabs).map(t => t.toLowerCase());
  const match = allowedTabs.find(tab => tab === hash);
  return match || defaultTab || null;
};

export const useHashTabNavigation = (tabs={}, defaultTab="") => {
  /**
   * tabs - key value pair object of tab names and labels
   * defaultTab - the default tab name if the hash is invalid or missing
   */
  const { hash: urlHash="" } = useLocation();
  const hash = urlHash.substring(1).toLowerCase(); // Remove the hash

  const activeTab = getTabFromHash(hash, tabs, defaultTab);
  const activeTabLabel = (activeTab) ? tabs[activeTab] || null : null;

  return { activeTab, activeTabLabel };

};

export default useHashTabNavigation;