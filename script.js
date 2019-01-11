window.onload = function() {
  $.ajax({
    url: 'https://regres.in/api/users?per_page=10',
    type: GET,
    success: function(response) {
      var users = response.data;
      console.table(users);
    }
  });
};
