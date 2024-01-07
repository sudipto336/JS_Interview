const subjects = [
  {
    id: 1,
    name: "Maths",
    marks: 90,
  },
  {
    id: 2,
    name: "Science",
    marks: 95,
  },
  {
    id: 3,
    name: "English",
    marks: 80,
  },
];

const totalMarks = subjects.reduce((agg, subject) => {
  return agg + subject.marks;
}, 0);

console.log(totalMarks);
