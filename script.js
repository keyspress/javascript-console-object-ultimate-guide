window.onload = function() {
  $.ajax({
    url: 'https://regres.in/api/users',
    type: 'GET',
    success: function(response) {
      console.log(response);
      console.assert(
        response.per_page === 4,
        '[Error]: item numbers per page is not true'
      );
    }
  });
};
