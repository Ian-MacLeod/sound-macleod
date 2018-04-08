import { RECEIVE_TRACK_FORM_ERRORS } from "../actions/error_actions";
import { RECEIVE_TRACK } from "../actions/track_actions";

const trackErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TRACK_FORM_ERRORS:
      return action.errors;
    case RECEIVE_TRACK:
      return [];
    default:
      return state;
  }
};

export default trackErrorsReducer;
