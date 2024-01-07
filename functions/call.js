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

obj1.printName.call(obj2);
obj1.printDetails.call(obj2, 1, 22);