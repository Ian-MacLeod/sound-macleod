import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import tracksErrorsReducer from "./tracks_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  tracks: tracksErrorsReducer
});

export default errorsReducer;
