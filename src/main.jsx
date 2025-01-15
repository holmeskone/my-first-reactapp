import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import List from "./Greeting.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <List />
  </StrictMode>,
);
