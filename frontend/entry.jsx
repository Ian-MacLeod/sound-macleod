import React from "react";
import ReactDOM from "react-dom";

import { fetchUser } from "./actions/user_actions";
import configureStore from "./store";
import Root from "./components/root";

import { matchPath } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState;
  const userId = window.currentUser.id;
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser } };
    delete window.currentUser;
  }
  const store = configureStore(preloadedState);
  if (userId !== undefined) {
    store.dispatch(fetchUser(userId));
  }

  window.store = store;
  window.matchPath = matchPath;

  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
