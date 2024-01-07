const sum = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

// let res1 = sum(1);
// let res2 = res1(2);
// let res3 = res2(3);
// console.log(res3);

console.log(sum(1)(2)(3));
