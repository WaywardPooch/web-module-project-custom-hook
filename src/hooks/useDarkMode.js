// ========== IMPORTS
import useLocalStorage from "./useLocalStorage";

// ========== DEFINITIONS
const useDarkMode = (key) => {
  const [darkMode, setDarkMode] = useLocalStorage(key);
  return [darkMode, setDarkMode];
}

// ========== EXPORTS
export default useDarkMode;