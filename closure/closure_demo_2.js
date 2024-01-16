function outest(a) {
  function outer(b) {
    let f = 11;
    function inner(c) {
      console.log(a, b, c, d, e, f);
    }
    let d = 10;
    return inner;
  }
  return outer;
}

let d = 20;

let e = 100;

const out1 = outest(1);
const out2 = out1(2);
out2(3);
