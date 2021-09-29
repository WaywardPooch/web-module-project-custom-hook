// ========== IMPORT
// Libraries
import { useState } from "react";

// ========== DEFINITIONS
const useLocalStorage = (key, initialValue) => {
  // ========== HELPERS
  const getStoredValue = (key, initialValue) => {
    // Store the value of the key in localstorage as "item"
    const item = window.localStorage.getItem(key);
    // If item exists, use it, otherwise use initialValue
    return item ? JSON.parse(item) : initialValue;
  };
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  // ========== STATES
  const [storedValue, setStoredValue] = useState(
    getStoredValue(key, initialValue)
  );

  // ========== OUTPUT
  return [storedValue, setValue];
};

// ========== EXPORT
export default useLocalStorage;
