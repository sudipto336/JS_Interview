const numArr = [1, 2, 3, 4];

const even = (arr) => {
  let even = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      even.push(arr[index]);
    }
  }
  return even;
};

console.log(even(numArr));

const odd = (arr) => {
  let odd = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 !== 0) {
      odd.push(arr[index]);
    }
  }
  return odd;
};

console.log(odd(numArr));
