export const fetchTracks = () =>
  $.ajax({
    url: "/api/tracks",
    method: "GET"
  });

export const fetchTrack = id =>
  $.ajax({
    url: `/api/tracks/${id}`,
    method: "GET"
  });

export const createTrack = track =>
  $.ajax({
    url: "/api/tracks",
    method: "POST",
    data: { track }
  });

export const deleteTrack = id =>
  $.ajax({
    url: `/api/tracks/${id}`,
    method: "DELETE"
  });
