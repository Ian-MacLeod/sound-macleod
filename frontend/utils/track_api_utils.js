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

export const createTrack = track => {
  const formData = new FormData();
  formData.append("track[title]", track.title);
  formData.append("track[data]", track.dataFile);
  return $.ajax({
    url: "/api/tracks",
    data: formData,
    processData: false,
    contentType: false,
    type: "POST"
  });
};

export const deleteTrack = id =>
  $.ajax({
    url: `/api/tracks/${id}`,
    method: "DELETE"
  });
