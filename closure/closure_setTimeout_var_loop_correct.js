function x() {
  for (var index = 1; index <= 5; index++) {
    function y(num) {
      setTimeout(() => {
        console.log(num);
      }, num * 1000);
    }
    y(index);
  }
}
x();
