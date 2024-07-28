import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { App } from "@/app/App";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
