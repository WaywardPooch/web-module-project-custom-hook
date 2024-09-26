// ========== IMPORT
// Libraries
import { useState } from "react";

// ========== DEFINITIONS
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // Store the value of the key in local storage as "item"
    const item = window.localStorage.getItem(key);
    // If item exists, parse and return it, otherwise return the inital value
    if (item) {
      return JSON.parse(item);
    } else {
      return initialValue;
    }
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

// ========== EXPORT
export default useLocalStorage;
