// 1.Object.defineProperty(object, property, descriptor) --> We can add new property or change the value of existing property

const Person = {
  firstName: "Debadarshan",
  lastName: "Maharana",
  age: 23,
};

Object.defineProperty(Person, "salary", { value: 2400, enumerable: true }); // By adding this enumerable:true we can access in console. if we will mot add this we can access it directly like Person.salary
console.log(Person);

// 2.Object.getOwnPropertyNames()

const Person2 = {
  firstName: "Subhasmita",
  lastName: "Pradhan",
  age: 22,
};
Object.defineProperty(Person2, "fullName", {
  get: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  set: function (value) {
    const [first, last] = value.split(" ");
    (this.firstName = first), (this.lastName = last);
  },
  enumerable: true,
});

console.log(Person2.fullName); // Subhasmita Pradhan

Person2.fullName = "Ghost Rider";
console.log("After setting fullName : " + Person2.fullName); //Ghost Rider
console.log(Object.getOwnPropertyNames(Person2)); // [ 'firstName', 'lastName', 'age', 'fullName' ]
