export const createLike = trackId =>
  $.ajax({
    url: `/api/tracks/${trackId}/likes`,
    method: "POST"
  });

export const deleteLike = trackId =>
  $.ajax({
    url: `/api/tracks/${trackId}/likes`,
    method: "DELETE"
  });
