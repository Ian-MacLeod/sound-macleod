import { combineReducers } from "redux";

import modalReducer from "./modal_reducer";
import playerReducer from "./player_reducer";
import searchReducer from "./search_reducer";

const UIReducer = combineReducers({
  modal: modalReducer,
  player: playerReducer,
  search: searchReducer
});

export default UIReducer;
