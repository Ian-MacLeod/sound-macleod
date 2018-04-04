import { RECEIVE_TRACK, RECEIVE_TRACKS } from "../actions/track_actions";

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACK:
      return Object.assign({}, state, { [action.user.id]: action.users });
    case RECEIVE_TRACKS:
      return Object.assign({}, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;
