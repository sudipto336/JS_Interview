const calculateSum = function (num) {
  let sum = 0;
  for (let counter = 1; counter <= num; counter++) {
    sum += counter;
  }
  return sum;
};

console.time();
console.log(calculateSum(1000000000));
console.timeEnd();

//calling calculateSum() with same input (5)

console.time();
console.log(calculateSum(1000000000));
console.timeEnd();
