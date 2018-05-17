import {
  RECEIVE_PLAYLIST,
  RECEIVE_PLAYLISTS
} from "../actions/playlist_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

const playlistsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, {
        [action.payload.playlist.id]: action.payload.playlist
      });
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.payload.playlists);
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.payload.playlists)
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.playlists);
    default:
      return state;
  }
};

export default playlistsReducer;
