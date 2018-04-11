import {
  RECEIVE_PLAYLIST,
  RECEIVE_PLAYLISTS
} from "../actions/playlist_actions";

const playlistsReducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, {
        [action.payload.playlist.id]: action.payload.paylist
      });
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.payload.playlists);
    default:
      return state;
  }
};

export default playlistsReducer;
