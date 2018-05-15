export const performSearch = query =>
  $.ajax({
    url: "/api/search",
    method: "GET",
    data: { query }
  });
