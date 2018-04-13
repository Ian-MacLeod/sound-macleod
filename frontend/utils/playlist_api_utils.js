export const fetchPlaylists = () =>
  $.ajax({
    url: "/api/playlists",
    method: "GET"
  });

export const fetchPlaylist = id =>
  $.ajax({
    url: `/api/playlists/${id}`,
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
  formData.append("playlist[track_ids]", JSON.stringify(playlist.trackIds));
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
  if (playlist.title) {
    formData.append("playlist[title]", playlist.title);
  }
  if (playlist.trackIds) {
    formData.append("playlist[track_ids]", JSON.stringify(playlist.trackIds));
  }
  if (playlist.imageFile) {
    formData.append("playlist[image]", playlist.imageFile);
  }
  return $.ajax({
    url: `/api/playlists/${playlist.id}`,
    data: formData,
    processData: false,
    contentType: false,
    method: "PATCH"
  });
};
