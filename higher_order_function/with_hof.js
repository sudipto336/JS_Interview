const radi = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circulference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

//HOF
const calculate = (radi, logic) => {
  let result = [];
  for (let index = 0; index < radi.length; index++) {
    result.push(logic(radi[index]));
  }
  return result;
};

console.log(calculate(radi, area));
console.log(calculate(radi, circulference));
console.log(calculate(radi, diameter));

//this code is good in terms reusuability, not repeating logic
