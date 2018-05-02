import React from "react";
import ReactDOM from "react-dom";

import { fetchUser } from "./actions/user_actions";
import configureStore from "./store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);

  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
