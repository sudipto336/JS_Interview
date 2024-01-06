const getResult = function () {
  let cache = {};
  return function (num) {
    if (!cache[num]) {
      console.log("Not present in cache");
      cache[num] = num * 256;
    }
    return cache[num];
  };
};

const multiplyBy256 = getResult();
console.log(multiplyBy256(1));
console.log(multiplyBy256(2));
console.log(multiplyBy256(1));