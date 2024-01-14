Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      result.push(this[i]);
    }
  }
  return result;
};

const numArr = [1, 2, 3];
const even = numArr.myFilter((item, index) => {
  return item % 2 === 0;
});

console.log(even);
