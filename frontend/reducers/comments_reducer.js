import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_TRACK } from "../actions/track_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const commentsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment });
    case RECEIVE_TRACK:
      return Object.assign({}, state, action.payload.comments);
    case REMOVE_COMMENT:
      newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.comments);
    default:
      return state;
  }
};

export default commentsReducer;
