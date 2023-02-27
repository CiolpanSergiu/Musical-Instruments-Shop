import { useState, createContext } from "react";

const AuthentificationContext = createContext({});

export const AuthentificationProvider = ({ children }: any) => {
  const isUserLoggedIn =
    localStorage.getItem("isLogged") === "true" ? true : false || false;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isUserLoggedIn);

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
