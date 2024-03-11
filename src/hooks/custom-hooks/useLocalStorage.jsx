import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultValue) {
  const initialValue = localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key)) : defaultValue;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
