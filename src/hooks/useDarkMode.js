// ========== IMPORTS
import useLocalStorage from "./useLocalStorage";

// ========== DEFINITIONS
const useDarkMode = () => {
  // ========== STATES
  const [values, setValues] = useLocalStorage("mode");

  // ========== EVENT HANDLERS
  const handleChange = (event) => {
    return setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }
  
  return [values, handleChange];
}

// ========== EXPORTS
export default useDarkMode;