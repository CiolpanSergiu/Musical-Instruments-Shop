import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/appStyle.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";
import { AuthentificationProvider } from "./context/AuthentificationContext";
import { CurrentUserCartContextProvider } from "./context/CurrentUserShoppingCart";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <CurrentUserCartContextProvider> */}
      <ShoppingCartContextProvider>
        <AuthentificationProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthentificationProvider>
      </ShoppingCartContextProvider>
      {/* </CurrentUserCartContextProvider> */}
    </ThemeProvider>
  </React.StrictMode>
);
