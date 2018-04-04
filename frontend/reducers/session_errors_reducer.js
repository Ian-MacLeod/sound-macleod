import { RECEIVE_SESSION_FORM_ERRORS } from "../actions/error_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { CLOSE_MODAL } from "../actions/modal_actions";

const sessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_FORM_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
