//Hoisting
console.log(x); //prints undefined
console.log(getNameNormalFn); //prints getNameNormalFn fn
console.log(getNameArrowFn); //prints undefined
console.log(getNameFnExp); //prints undefined
getNameNormalFn(); //calls getName fn
getNameArrowFn(); //throws error
getNameFnExp(); //throws error

var x = 7;

function getNameNormalFn() {
  console.log("Getting name from normal fn...");
}

var getNameArrowFn = () => {
  console.log("Getting name from arrow Fn...");
};

var getNameFnExp = () => {
  console.log("Getting name from function expression...");
};

//Without hoisting
console.log(x); //prints undefined
console.log(getNameNormalFn); //prints getNameNormalFn fn
console.log(getNameArrowFn); //prints getNameArrowFn fn
console.log(getNameFnExp); //prints getNameFnExp fn
getNameNormalFn(); //calls getName fn
getNameArrowFn(); //calls getNameArrowFn fn
getNameFnExp(); //calls getNameFnExp fn
