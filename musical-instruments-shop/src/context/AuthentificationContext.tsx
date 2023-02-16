import { useState, createContext } from "react";

const AuthentificationContext = createContext({});

export const AuthentificationProvider = ({ children }: any) => {
  const isUserLoggedIn =
    localStorage.getItem("isLogged") === "true" ? true : false;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isUserLoggedIn);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(String(localStorage.getItem("currentUser")))
  );

  return (
    <AuthentificationContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}
    >
      {children}
    </AuthentificationContext.Provider>
  );
};

export default AuthentificationContext;
