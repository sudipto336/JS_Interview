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
  }
];

const studentAges = students.map((student, index) => {
  return student.age;
});

console.log(studentAges);