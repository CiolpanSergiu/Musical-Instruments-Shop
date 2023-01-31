import { useState, createContext } from "react";
import { nanoid } from "nanoid";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: any) => {
  const isDarkTheme: boolean =
    localStorage.getItem("darkTheme") === "true" ? true : false;

  const [isDark, setIsDark] = useState<boolean>(Boolean(isDarkTheme));

  localStorage.setItem("darkTheme", String(isDark));

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
