import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserDataContextProvider } from "./contexts/userDataContext";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <UserDataContextProvider>
      <App />
    </UserDataContextProvider>
  </React.StrictMode>
);
