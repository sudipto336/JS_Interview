const add = function (a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
};

console.log(add(1)(2)(3)(4)(5)());
