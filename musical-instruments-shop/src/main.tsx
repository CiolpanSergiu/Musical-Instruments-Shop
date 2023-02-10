import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/appStyle.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ShoppingCartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ShoppingCartContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
