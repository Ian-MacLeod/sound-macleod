export const createComment = comment =>
  $.ajax({
    url: `/api/comments`,
    method: "POST",
    data: { comment }
  });

export const deleteComment = id =>
  $.ajax({
    url: `/api/comments/${id}`,
    method: "DELETE"
  });
