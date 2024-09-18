import { useEffect, useState, useCallback } from 'react';

export function useLocalStorage(key, initialState) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const restored = getStorage(key);
    if (restored) setState(state => ({ ...state, ...restored }));
  }, [key]);

  const _updateState = useCallback(updateValue => {
    setState(state => {
      setStorage(key, { ...state, ...updateValue });
      return { ...state, ...updateValue };
    });
  }, [key]);

  const update = useCallback((name, updateValue) => {
    _updateState({ [name]: updateValue });
  }, [_updateState]);

  const reset = useCallback(() => {
    removeStorage(key);
    setState(initialState);
  }, [initialState, key]);

  return { state, update, reset };
}

export const getStorage = (key) => {
  let value = null;

  try {
    const result = window.localStorage.getItem(key);
    if (result) value = JSON.parse(result);
  } catch (error) {
    console.error(error);
  }

  return value;
};

export const setStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const removeStorage = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
