import { RECEIVE_TRACK, RECEIVE_TRACKS } from "../actions/track_actions";

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACK:
      return Object.assign({}, state, {
        [action.payload.user.id]: action.payload.user
      });
    case RECEIVE_TRACKS:
      return Object.assign({}, state, action.payload.users);
    default:
      return state;
  }
};

export default usersReducer;
