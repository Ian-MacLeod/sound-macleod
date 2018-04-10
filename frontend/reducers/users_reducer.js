import { mapValues } from "lodash";

import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  REMOVE_TRACK
} from "../actions/track_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LIKE:
      if (state.id === action.like.userId) {
        return Object.assign({}, state, {
          likedTrackIds: [action.like.trackId].concat(state.likedTrackIds)
        });
      }
      return state;
    case REMOVE_LIKE:
      if (state.id === action.like.userId) {
        return Object.assign({}, state, {
          likedTrackIds: state.likedTrackIds.filter(
            id => id !== action.like.trackId
          )
        });
      }
      return state;
    default:
      return state;
  }
};

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_CURRENT_USER:
      if (action.user === null) return state;
      return Object.assign({}, state, {
        [action.user.id]: action.user
      });
    case RECEIVE_TRACK:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_TRACKS:
      return Object.assign({}, state, action.payload.users);
    case REMOVE_TRACK:
      if (Object.keys(state).includes(action.track.userId.toString())) {
        const user = state[action.track.userId];
        const newTrackIds = user.trackIds.filter(id => id !== action.track.id);
        const newCommentIds = user.commentIds.filter(
          id => !action.deletedCommentIds.includes(id)
        );
        const newUser = Object.assign({}, user, {
          trackIds: newTrackIds,
          commentIds: newCommentIds
        });
        return Object.assign({}, state, { [action.track.userId]: newUser });
      }
      return state;
    case RECEIVE_LIKE:
      return mapValues(state, user => userReducer(user, action));
    case REMOVE_LIKE:
      return mapValues(state, user => userReducer(user, action));
    default:
      return state;
  }
};

export default usersReducer;
