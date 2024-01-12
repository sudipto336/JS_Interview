function a() {
  var x = 10;
  return function b() {
    var y = 20;
    return function c() {
      console.log(x, y);
    };
  };
}

const d = a()();
//still remembers value of x, y outside fn a and b due to closure
d();
