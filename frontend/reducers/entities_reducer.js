import { combineReducers } from "redux";

import tracksReducer from "./tracks_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  tracks: tracksReducer,
  users: usersReducer
});

export default entitiesReducer;
