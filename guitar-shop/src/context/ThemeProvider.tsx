import { useState, createContext } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: any) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
