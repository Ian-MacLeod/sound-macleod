import * as PlaylistAPIUtils from "../utils/playlist_api_utils";

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";

const receivePlaylist = payload => ({
  type: RECEIVE_PLAYLIST,
  payload
});

const receivePlaylists = payload => ({
  type: RECEIVE_PLAYLISTS,
  payload
});

export const fetchPlaylist = id => dispatch =>
  PlaylistAPIUtils.fetchPlaylist(id).then(playlist =>
    dispatch(receivePlaylist(playlist))
  );

export const fetchPlaylists = () => dispatch =>
  PlaylistAPIUtils.fetchPlaylists().then(playlist =>
    dispatch(receivePlaylists(playlist))
  );

export const createPlaylist = playlist => dispatch =>
  PlaylistAPIUtils.createPlaylist(playlist).then(newPlaylist =>
    dispatch(receivePlaylist(newPlaylist))
  );

export const updatePlaylist = playlist => dispatch =>
  PlaylistAPIUtils.updatePlaylist(playlist).then(newPlaylist =>
    dispatch(receivePlaylist(newPlaylist))
  );

export const fetchPlaylistsForUser = userId => dispatch =>
  PlaylistAPIUtils.fetchPlaylistsForUser(userId).then(playlists =>
    dispatch(receivePlaylists(playlists))
  );
