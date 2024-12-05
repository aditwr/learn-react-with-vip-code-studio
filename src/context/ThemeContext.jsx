import { createContext, useState } from "react";
import PropTypes from "prop-types";

// create a context
export const ThemeContext = createContext("light");

// create a provider
// provider is a component that wraps our application
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
