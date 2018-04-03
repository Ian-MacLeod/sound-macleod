import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store";
import Root from "./components/root";

import { signOut } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);

  window.store = store;
  window.signOut = signOut;

  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
