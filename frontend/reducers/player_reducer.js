import {
  START_PLAYER,
  PAUSE_PLAYER,
  TOGGLE_PLAY,
  PLAY_TRACK
} from "../actions/player_actions";

const defaultState = {
  trackUrl: null,
  playing: false
};

const playerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PLAY_TRACK:
      return Object.assign({}, state, { trackUrl: action.url, playing: true });
    case START_PLAYER:
      return Object.assign({}, state, { playing: true });
    case PAUSE_PLAYER:
      return Object.assign({}, state, { playing: false });
    default:
      return state;
  }
};

export default playerReducer;
