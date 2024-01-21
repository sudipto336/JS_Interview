const student1 = {
  name: "sam",
  printName: function () {
    console.log(this.name);
  },
};

student1.printName();

const student2 = {
  name: "peter",
};

student1.printName.call(student2);
