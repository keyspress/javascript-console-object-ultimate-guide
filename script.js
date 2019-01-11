window.onload = function() {
  console.time('for loop label');
  for (var i = 0; i < 1000000; i++) {
    var b = i * 5;
  }
  console.timeEnd('for loop label');
};
