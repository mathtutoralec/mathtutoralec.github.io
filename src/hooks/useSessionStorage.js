export const useSessionStorage = () => {
  const setItem = (key, value) => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  };

  const getItem = key => {
    if (typeof window !== "undefined") {
      return JSON.parse(window.sessionStorage.getItem(key));
    }
  };

  const removeItem = key => {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(key);
    }
  };

  return { setItem, getItem, removeItem };
};

export default useSessionStorage;
