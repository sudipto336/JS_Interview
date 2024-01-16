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

const output2 = users
  .filter((curr) => curr.age < 50)
  .map((curr) => curr.firstName);

console.log(output2);
