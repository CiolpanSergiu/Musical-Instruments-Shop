import { useState, createContext } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
