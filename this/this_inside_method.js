const obj = {
  a: 10,
  b: function () {
    console.log(this.a);
  },
};

obj.b();
