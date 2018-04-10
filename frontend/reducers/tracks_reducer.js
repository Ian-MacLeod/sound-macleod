import { mapValues } from "lodash";

import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  REMOVE_TRACK
} from "../actions/track_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";

const trackReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRACK:
      return action.payload.track;
    case RECEIVE_COMMENT:
      if (action.comment.trackId === state.id) {
        return Object.assign({}, state, {
          commentIds: [action.comment.id].concat(state.commentIds)
        });
      }
      return state;
    case RECEIVE_LIKE:
      if (action.like.trackId === state.id) {
        return Object.assign({}, state, {
          numLikes: state.numLikes + 1,
          isLiked: !state.isLiked
        });
      }
      return state;
    case REMOVE_LIKE:
      if (action.like.trackId === state.id) {
        return Object.assign({}, state, {
          numLikes: state.numLikes - 1,
          isLiked: !state.isLiked
        });
      }
      return state;
    default:
      return state;
  }
};

const tracksReducer = (state = {}, action) => {
  let newState;
  let newTrack;
  switch (action.type) {
    case RECEIVE_TRACK:
      newTrack = action.payload.track;
      if (state.hasOwnProperty(newTrack.id)) {
        newTrack.data = state[newTrack.id].data;
      }
      return Object.assign({}, state, {
        [newTrack.id]: newTrack
      });
    case RECEIVE_TRACKS:
      return Object.assign({}, action.payload.tracks, state);
    case RECEIVE_USER:
      return Object.assign({}, action.payload.tracks, state);
    case REMOVE_TRACK:
      newState = Object.assign({}, state);
      delete newState[action.track.id];
      return newState;
    case RECEIVE_COMMENT:
      return mapValues(state, track => trackReducer(track, action));
    case RECEIVE_LIKE:
      return mapValues(state, track => trackReducer(track, action));
    case REMOVE_LIKE:
      return mapValues(state, track => trackReducer(track, action));
    default:
      return state;
  }
};

export default tracksReducer;
