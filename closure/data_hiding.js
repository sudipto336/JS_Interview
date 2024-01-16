function counter() {
  let count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

let incCount1 = counter();

let incCount2 = counter();

incCount1();
incCount1();
incCount1();

incCount2();
incCount2();
incCount2();
