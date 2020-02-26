import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Store from "./store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement
);
