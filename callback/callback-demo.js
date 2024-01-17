function a() {
  console.log("fn a called");
}

setTimeout(a, 1000);

//fn a - callback

function b() {
  console.log("fn b called");
  a();
}

b();
