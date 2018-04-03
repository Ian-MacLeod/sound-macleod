import { RECEIVE_SESSION_FORM_ERRORS } from "../actions/session_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_FORM_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
