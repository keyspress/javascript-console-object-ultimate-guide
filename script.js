window.onload = function() {
  $.ajax({
    url: 'test.url.co.uk',
    type: 'GET',
    error: function(errorResponse) {
      console.error(errorResponse.statusText);
    }
  });
};
