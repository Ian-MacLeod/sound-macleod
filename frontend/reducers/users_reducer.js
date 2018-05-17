import { mapValues, merge } from "lodash";

import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  REMOVE_TRACK
} from "../actions/track_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import {
  RECEIVE_PLAYLIST,
  RECEIVE_PLAYLISTS
} from "../actions/playlist_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

const userReducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_LIKE:
      if (state.id === action.like.userId) {
        return Object.assign({}, state, {
          likedTrackIds: [action.like.trackId].concat(state.likedTrackIds || [])
        });
      }
      return state;
    case REMOVE_LIKE:
      if (state.id === action.like.userId) {
        return Object.assign({}, state, {
          likedTrackIds: (state.likedTrackIds || []).filter(
            id => id !== action.like.trackId
          )
        });
      }
      return state;
    case RECEIVE_COMMENT:
      if (state.id === action.comment.userId) {
        return Object.assign({}, state, {
          commentIds: [action.comment.id].concat(state.commentIds || [])
        });
      }
      return state;
    case REMOVE_COMMENT:
      if (state.id === action.comment.userId && state.commentIds) {
        return Object.assign({}, state, {
          commentIds: state.commentIds.filter(id => id !== action.comment.id)
        });
      }
      return state;
    default:
      return state;
  }
};

const usersReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, action.payload.users);
    case RECEIVE_CURRENT_USER:
      if (action.user === null) return state;
      return Object.assign({}, state, {
        [action.user.id]: action.user
      });
    case RECEIVE_TRACK:
      return merge({}, state, action.payload.users);
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.payload.users);
    case RECEIVE_TRACKS:
      return merge({}, state, action.payload.users);
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
    case RECEIVE_COMMENT:
      return mapValues(state, user => userReducer(user, action));
    case REMOVE_COMMENT:
      return mapValues(state, user => userReducer(user, action));
    case RECEIVE_PLAYLIST:
      newState = merge({}, state, action.payload.users);
      let user = newState[action.payload.playlist.userId];
      if (user.playListIds) {
        if (!user.playlistIds.includes(action.payload.playlist.id)) {
          user = Object.assign({}, user, {
            playlistIds: user.playlistIds.concat([action.payload.playlist.id])
          });
        }
      } else {
        user.playListIds = [action.payload.playlist.id];
      }

      newState[action.payload.playlist.userId] = user;
      return newState;
    case RECEIVE_PLAYLISTS:
      newState = merge({}, state, action.payload.users);
      if (action.payload.queriedUser) {
        const { userId, playlistIds } = action.payload.queriedUser;
        newState[userId] = Object.assign({}, newState[userId], { playlistIds });
      }
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
