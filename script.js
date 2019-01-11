window.onload = function() {
  function firstFunc() {
    secondFunc();
  }
  function secondFunc() {
    thirdFunc();
  }
  function thirdFunc() {
    console.trace('test trace stack');
  }

  firstFunc();
};
