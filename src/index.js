import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
document.title = "Qtify"
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
