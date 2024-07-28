import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { App } from "@/app/app";

import "./index.scss"
import { Provider } from "react-redux";
import { createReduxStore } from "./app/providers/store/store";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const store = createReduxStore();

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
