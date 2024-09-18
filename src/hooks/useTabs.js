import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router';

const getTabFromHash = (hash, tabs, defaultTab) => {
  if (!hash) return defaultTab || null;
  const allowedTabs = tabs.map(t => t.value.toLowerCase());
  const match = allowedTabs.find(tab => tab === hash.toLowerCase());
  return match || defaultTab || null;
}

export const useTabs = (tabs, defaultTab, useHash = true) => {
  const { pathname, hash: urlHash="" } = useLocation();
  const { push } = useHistory();
  const hash = urlHash.substring(1).toLowerCase(); // Remove the hash
  const tab = useHash ? getTabFromHash(hash, tabs, defaultTab) : defaultTab;

  const [value, setValue] = useState(tab);
  
  useEffect(() => {
    setValue(tab)
  }, [tab]);
  
  const handleTabChange = (event, newValue) => {
    useHash ? push(`${pathname}#${newValue}`) : setValue(newValue) ;
  }

  return { activeTab: value, handleTabChange }
}

export default useTabs;