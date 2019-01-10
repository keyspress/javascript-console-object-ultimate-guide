window.onload = function() {
  var label = 'Function is called';
  console.count(label);
  console.count(label);

  function foo() {
    console.count(label);
  }

  foo();
  foo();
  foo();
  foo();
  foo();
};
