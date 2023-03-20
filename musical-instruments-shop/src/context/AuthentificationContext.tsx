import { useState, createContext } from "react";
import { ChildrenProp } from "../types/commonTypes";

const AuthentificationContext = createContext({});

export const AuthentificationProvider = ({ children }: ChildrenProp) => {
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
