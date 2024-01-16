const numArr = [1, 2, 3, 4];

const sum = (arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
};

console.log(sum(numArr));

const max = (arr) => {
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  return max;
};

console.log(max(numArr));
