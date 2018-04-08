import { combineReducers } from "redux";

import tracksReducer from "./tracks_reducer";
import usersReducer from "./users_reducer";
import commentsReducer from "./comments_reducer";

const entitiesReducer = combineReducers({
  tracks: tracksReducer,
  users: usersReducer,
  comments: commentsReducer
});

export default entitiesReducer;
