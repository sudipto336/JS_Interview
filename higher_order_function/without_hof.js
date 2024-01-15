const radi = [1, 2, 3, 4];

const calculateArea = (radi) => {
  let result = [];
  for (let index = 0; index < radi.length; index++) {
    result.push(Math.PI * radi[index] * radi[index]);
  }
  return result;
};

console.log(calculateArea(radi));

const calculateCircumference = (radi) => {
  let result = [];
  for (let index = 0; index < radi.length; index++) {
    result.push(2 * Math.PI * radi[index]);
  }
  return result;
};

console.log(calculateCircumference(radi));

const calculateDiameter = (radi) => {
  let result = [];
  for (let index = 0; index < radi.length; index++) {
    result.push(2 * radi[index]);
  }
  return result;
};

console.log(calculateDiameter(radi));

//this code is not good, lots of repeating logic
