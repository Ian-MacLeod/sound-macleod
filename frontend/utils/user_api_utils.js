export const fetchUser = id =>
  $.ajax({
    url: `/api/users/${id}`,
    method: "GET"
  });

export const updateUser = user => {
  const formData = new FormData();
  formData.append("user[profile_pic]", user.image);

  return $.ajax({
    url: `api/users/${user.id}`,
    method: "PATCH",
    processData: false,
    contentType: false,
    data: formData
  });
};
