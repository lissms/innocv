import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n.js";
import { HashRouter } from "react-router-dom";

//REDUX
import { createStore } from "redux";
import { Provider } from "react-redux";

//STORE
import reducer from "./reducers/reducer";
const reduxChromeExtensionSettings = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, reduxChromeExtensionSettings);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
