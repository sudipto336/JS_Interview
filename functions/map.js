const students = [
  {
    id: 1,
    name: "Sam",
    age: 20,
  },
  {
    id: 2,
    name: "John",
    age: 25,
  },
  {
    id: 3,
    name: "Peter",
    age: 30,
  },
];

const studentAges = students.map((student, index) => {
  return student.age;
});

console.log(studentAges);

const numArr = [1, 2, 3, 4];

const triple = numArr.map((curr) => curr * 3);

const doubleFn = function (num) {
  return num * 2;
};

const double = numArr.map(doubleFn);

const binary = numArr.map((curr) => curr.toString(2));

console.log(double);
console.log(triple);
console.log(binary);

const users = [
  {
    firstName: "sam",
    lastName: "william",
    age: 30,
  },
  {
    firstName: "peter",
    lastName: "roy",
    age: 40,
  },
  {
    firstName: "jane",
    lastName: "willey",
    age: 50,
  },
  {
    firstName: "andrew",
    lastName: "ho",
    age: 40,
  },
];

const output = users.map((curr) => curr.firstName + " " + curr.lastName);

console.log(output);
