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

const numArr = [1, 2, 3, 4];

const sum = numArr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);

const max = numArr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(max);

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

const output = users.reduce((agg, curr) => {
  if (agg[curr.age]) {
    agg[curr.age] = agg[curr.age] + 1;
  } else {
    agg[curr.age] = 1;
  }
  return agg;
}, {});
