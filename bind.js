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

const obj2PrintName = obj1.printName.bind(obj2);
const obj2PrintDetails = obj1.printDetails.bind(obj2, 1, 22);
obj2PrintName();
obj2PrintDetails();
