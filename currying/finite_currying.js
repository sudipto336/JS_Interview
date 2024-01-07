const add = function (a) {
  return function (b) {
    return function () {
      return a + b;
    };
  };
};

console.log(add(1)(2)());
