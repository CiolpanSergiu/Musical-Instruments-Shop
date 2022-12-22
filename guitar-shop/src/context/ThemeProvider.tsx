import { useState, createContext } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: any) => {
  const isDarkTheme =
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
