import { useState, createContext } from "react";

const AuthentificationContext = createContext({});

export const AuthentificationProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState();

  return (
    <AuthentificationContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}
    >
      {children}
    </AuthentificationContext.Provider>
  );
};

export default AuthentificationContext;
