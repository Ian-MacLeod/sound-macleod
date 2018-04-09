import { PLAY_PAUSE_PLAYER } from "../actions/player_actions";

const TrackProgressReducer = (state = {}, action) => {
  switch (action.type) {
    case PLAY_PAUSE_PLAYER:
      if (action.progress !== undefined) {
        return Object.assign({}, state, { [action.trackId]: action.progress });
      } else {
        return state;
      }
    default:
      return state;
  }
};
