const students = [
  {
    id: 1,
    name: "Sam",
    age: 18,
  },
  {
    id: 2,
    name: "John",
    age: 19,
  },
  {
    id: 3,
    name: "Peter",
    age: 21,
  },
];

const teenStudents = students.filter((student, index) => {
  return student.age >= 13 && student.age <= 19;
});

console.log(teenStudents);

const numArr = [1, 2, 3, 4];

const even = numArr.filter((curr) => curr % 2 === 0);

const oddFn = (num) => {
  return num % 2;
};

const odd = numArr.filter(oddFn);

console.log(even);
console.log(odd);
