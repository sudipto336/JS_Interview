//Function declaration/statement

function a() {
  console.log("fn a called");
}

a();

//Function expression

b(); //throws error - as undefined is stored in memory for variable b

var b = function () {
  console.log("fn b called");
};

b();

//Named function expression

var b = function xyz() {
  console.log(xyz);
};

b();
xyz(); //throws error as fn xyz is not creted in global scope, it created as local variable

//Anonymous fn - not assigning anonymous fn to variable throws error as fn statements must have a name

// function() {
//     console.log('Anonymous fn');
// }
