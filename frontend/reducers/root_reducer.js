import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import UIReducer from "./ui_reducer";
import entitiesReducer from "./entities_reducer";

import { LOG_OUT } from "../actions/session_actions";

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  ui: UIReducer,
  entities: entitiesReducer
});

export default (state, action) => {
  if (action.type === LOG_OUT) {
    return rootReducer(undefined, {});
  }
  return rootReducer(state, action);
};
