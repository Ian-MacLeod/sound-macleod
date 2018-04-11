import * as PlaylistAPIUtils from "../utils/track_api_utils";

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
  PlaylistAPIUtils.fetchPlaylist(id).then(
    playlist => dispatch(receivePlaylist(playlist)),
    error => console.log(error)
  );

export const fetchPlaylists = () => dispatch =>
  PlaylistAPIUtils.fetchPlaylists().then(
    playlist => dispatch(receivePlaylists(playlist)),
    error => console.log(error)
  );

export const createPlaylist = track => dispatch =>
  PlaylistAPIUtils.createPlaylist(track).then(
    newPlaylist => dispatch(receivePlaylist(newPlaylist)),
    error => console.log(error)
  );
