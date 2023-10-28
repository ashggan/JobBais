import { createContext, useContext, useState } from "react";
import { ThemeContextProbs, ThemeContextType } from "../utils/types";

export const ThemeContext = createContext({} as ThemeContextType);
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: ThemeContextProbs) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
