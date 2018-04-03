import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const nullUser = {
  currentUser: null
};

const sessionReducer = (state = nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user };
    default:
      return state;
  }
};

export default sessionReducer;
