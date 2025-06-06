import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/boxicons/css/boxicons.css";
import "./styles/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
