import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import trackErrorsReducer from "./track_errors_reducer";
import commentErrorsReducer from "./comment_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  tracks: trackErrorsReducer,
  comments: commentErrorsReducer
});

export default errorsReducer;
