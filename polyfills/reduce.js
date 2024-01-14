Array.prototype.myReduce = function (cb, acc_init_val) {
  let acculator = acc_init_val;
  for (let i = 0; i < this.length; i++) {
    acculator = cb(acculator, this[i]);
  }
  return acculator;
};

const numArr = [1, 2, 3];
const sum = numArr.myReduce((acc, item) => {
  return acc + item;
}, 0);

console.log(sum);
