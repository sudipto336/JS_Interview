const numArr = [1, 2, 3, 4];

const double = (arr) => {
  let double = [];
  for (let index = 0; index < arr.length; index++) {
    double.push(arr[index] * 2);
  }
  return double;
};

console.log(double(numArr));

const triple = (arr) => {
  let triple = [];
  for (let index = 0; index < arr.length; index++) {
    triple.push(arr[index] * 3);
  }
  return triple;
};

console.log(triple(numArr));

const binary = (arr) => {
  let binary = [];
  for (let index = 0; index < arr.length; index++) {
    binary.push(arr[index].toString(2));
  }
  return binary;
};

console.log(binary(numArr));
