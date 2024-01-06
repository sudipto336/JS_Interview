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
  }
];

const teenStudents = students.filter((student, index) => {
  return student.age >= 13 && student.age <= 19;
});

console.log(teenStudents);