const obj1 = {
  id: 1,
  getId: function () {
    return this.id;
  },
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
};

const obj2 = {
  id: 2,
  name: "Sam",
  __proto__: obj1,
};

const obj3 = {
  age: 20,
  __proto__: obj2,
};

console.log(`Id: ${obj2.getId()}`);
console.log(`Name: ${obj3.getName()}`);
console.log(`Age: ${obj3.getAge()}`);
