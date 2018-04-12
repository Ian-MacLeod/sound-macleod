export const fetchPlaylists = () =>
  $.ajax({
    url: "/api/playlists",
    method: "GET"
  });

export const fetchPlaylist = id =>
  $.ajax({
    url: `/api/tracks/${id}`,
    method: "GET"
  });

export const fetchPlaylistsForUser = userId =>
  $.ajax({
    url: `/api/playlists`,
    method: "GET",
    data: { user_id: userId }
  });

export const createPlaylist = playlist => {
  const formData = new FormData();
  formData.append("playlist[title]", playlist.title);
  formData.append("playlist[track_ids]", playlist.trackIds);
  if (playlist.imageFile) {
    formData.append("playlist[image]", playlist.imageFile);
  }
  return $.ajax({
    url: "/api/playlists",
    data: formData,
    processData: false,
    contentType: false,
    method: "POST"
  });
};

export const updatePlaylist = playlist => {
  const formData = new FormData();
  formData.append("playlist[title]", playlist.title);
  formData.append("playlist[track_ids]", playlist.trackIds);
  if (playlist.imageFile) {
    formData.append("playlist[image]", playlist.imageFile);
  }
  return $.ajax({
    url: "/api/playlists",
    data: formData,
    processData: false,
    contentType: false,
    method: "PATCH"
  });
};
