const obj1 = {
  name: "Sam",
  printName: function () {
    console.log(`Name: ${this.name}`);
  },
  printDetails: function (id, age) {
    console.log(`Id: ${id} - Name: ${this.name} - Age: ${age}`);
  },
};

const obj2 = {
  name: "Ram",
};

obj1.printName.apply(obj2);
obj1.printDetails.apply(obj2, [1, 22]);