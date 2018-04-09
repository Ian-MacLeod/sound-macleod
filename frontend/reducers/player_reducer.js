import {
  START_PLAYER,
  PAUSE_PLAYER,
  PLAY_TRACK,
  PLAY_PAUSE_PLAYER,
  PLAYER_SEEK,
  WAVE_FORM_SEEK
} from "../actions/player_actions";

const defaultState = {
  trackId: null,
  playing: false,
  lastPlayerSeek: 0,
  lastWaveFormSeek: 0
};

const playerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PLAY_TRACK:
      return {
        trackId: action.trackId,
        playing: true
      };
    case START_PLAYER:
      return Object.assign({}, state, { playing: true });
    case PAUSE_PLAYER:
      return Object.assign({}, state, { playing: false });
    case PLAY_PAUSE_PLAYER:
      if (action.trackId !== state.trackId) {
        return {
          trackId: action.trackId,
          playing: true
        };
      }
      return Object.assign({}, state, { playing: !state.playing });
    case PLAYER_SEEK:
      return Object.assign({}, state, { lastPlayerSeek: action.progress });
    case WAVE_FORM_SEEK:
      return Object.assign({}, state, { lastWaveFormSeek: action.progress });
    default:
      return state;
  }
};

export default playerReducer;
