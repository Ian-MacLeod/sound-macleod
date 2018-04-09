import { merge } from "lodash";

import {
  PAUSE_PLAYER,
  PLAY_TRACK,
  PLAY_PAUSE_PLAYER,
  PLAYER_SEEK,
  WAVE_FORM_SEEK,
  SET_PLAYER_REF,
  ADD_TO_NEXT_UP,
  REMOVE_FROM_NEXT_UP,
  NEW_NEXT_UP,
  CLEAR_NEXT_UP,
  TRACK_END
} from "../actions/player_actions";

const defaultState = {
  trackId: null,
  playing: false,
  lastPlayerSeek: 0,
  lastWaveFormSeek: 0,
  progressByTrackId: {},
  playerRef: null,
  nextUp: []
};

const playerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PAUSE_PLAYER:
      return Object.assign({}, state, { playing: false });
    case PLAY_PAUSE_PLAYER:
      if (action.trackId !== state.trackId) {
        return merge({}, state, {
          trackId: action.trackId,
          playing: true,
          lastPlayerSeek: state.progressByTrackId[action.trackId] || 0,
          lastWaveFormSeek: state.progressByTrackId[action.trackId] || 0,
          progressByTrackId: { [state.trackId]: action.progress }
        });
      }
      if (state.playing) {
        return merge({}, state, {
          playing: false,
          progressByTrackId: { [action.trackId]: action.progress }
        });
      }
      return Object.assign({}, state, { playing: !state.playing });
    case PLAYER_SEEK:
      return Object.assign({}, state, { lastPlayerSeek: action.progress });
    case WAVE_FORM_SEEK:
      if (action.trackId && action.trackId !== state.trackId) {
        return merge({}, state, {
          progressByTrackId: { [action.trackId]: action.progress }
        });
      }
      return Object.assign({}, state, { lastWaveFormSeek: action.progress });
    case SET_PLAYER_REF:
      return Object.assign({}, state, { playerRef: action.playerRef });
    case ADD_TO_NEXT_UP:
      return Object.assign({}, state, {
        nextUp: state.nextUp.concat(action.trackIds)
      });
    case REMOVE_FROM_NEXT_UP:
      return Object.assign({}, state, {
        nextUp: state.nextUp
          .slice(0, action.idx)
          .concat(state.nextUp.slice(action.idx + 1))
      });
    case TRACK_END:
      if (state.nextUp.length === 0) {
        return Object.assign({}, state, { playing: !state.playing });
      }
      return Object.assign({}, state, {
        trackId: state.nextUp[0],
        nextUp: state.nextUp.slice(1),
        lastPlayerSeek: 0,
        lastWaveFormSeek: 0
      });
    case NEW_NEXT_UP:
      return Object.assign({}, state, { nextUp: action.trackIds });
    case CLEAR_NEXT_UP:
      return Object.assign({}, state, { nextUp: [] });
    default:
      return state;
  }
};

export default playerReducer;
