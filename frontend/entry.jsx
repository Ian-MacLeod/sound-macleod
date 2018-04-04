import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store";
import Root from "./components/root";

import { matchPath } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);

  window.store = store;
  window.matchPath = matchPath;

  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
