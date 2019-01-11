window.onload = function() {
  $.ajax({
    url: 'https://regres.in/api/users',
    type: 'GET',
    success: function(response) {
      var users = response.data;

      for (var i = 0; i < users.length; i++) {
        console.group('User');
        console.log(users[i].id);
        console.group('Name');
        console.log(users[i].first_name);
        console.log(users[i].last_name);
        console.groupEnd();
        console.log(users[i].avatar);
        console.groupEnd();
      }
    }
  });
};
