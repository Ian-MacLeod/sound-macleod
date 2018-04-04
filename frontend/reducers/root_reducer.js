import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import UIReducer from "./ui_reducer";
import entitiesReducer from "./entities_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  ui: UIReducer,
  entities: entitiesReducer
});

export default rootReducer;
