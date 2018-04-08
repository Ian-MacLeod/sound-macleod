import {
  RECEIVE_COMMENT_FORM_ERRORS,
  CLEAR_COMMENT_FORM_ERRORS
} from "../actions/error_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";

const commentErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENT_FORM_ERRORS:
      return action.errors;
    case RECEIVE_COMMENT:
      return [];
    case CLEAR_COMMENT_FORM_ERRORS:
      return [];
    default:
      return state;
  }
};

export default commentErrorsReducer;
