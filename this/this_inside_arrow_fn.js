const obj2 = {
  a: 10,
  b: () => {
    console.log(this);
  },
};

obj2.b();

const obj3 = {
  a: 10,
  b: () => {
    function c() {
      console.log(this);
    }
    c();
  },
};

obj3.b();
