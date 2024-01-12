function x() {
  for (var index = 1; index <= 5; index++) {
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  }
}
x();
//as var is function scoped
