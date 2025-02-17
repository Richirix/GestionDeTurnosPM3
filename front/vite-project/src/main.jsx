// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/UsersContext.jsx"; 
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsersProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </UsersProvider>
  </StrictMode>
);
