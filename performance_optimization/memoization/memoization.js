const calculateSum = function (num) {
  let sum = 0;
  for (let counter = 1; counter <= num; counter++) {
    sum += counter;
  }
  return sum;
};

const memoize = function (callback) {
  let cache = {};
  return function (...args) {
    const num = args[0];
    if (num in cache) {
      console.log(`Result is present in cache, so getting result from cache`);
      return cache[num];
    } else {
      console.log(
        `Result is not present in cache, so getting result after calculation`
      );
      const result = callback(num);
      cache[num] = result;
      return result;
    }
  };
};

const memoizedCalculateFn = memoize(calculateSum);

console.time();
console.log(memoizedCalculateFn(1000000000));
console.timeEnd();

//calling calculateSum() with same input (5)

console.time();
console.log(memoizedCalculateFn(1000000000));
console.timeEnd();
