Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i));
  }
  return result;
};

const numArr = [1, 2, 3];
const square = numArr.myMap((item, index) => {
  return item * item;
});

console.log(square);
