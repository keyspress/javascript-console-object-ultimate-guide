window.onload = function() {
  $.ajax({
    url: 'https://regres.in/api/users',
    type: 'GET',
    success: function(response) {
      console.log(response);
    }
  });
};
