function Person(id, firstName, lastName, age, nationality) {
  (this.id = id),
    (this.firstName = firstName),
    (this.lastName = lastName),
    (this.age = age),
    (this.nationality = "Hindu");
}
// Ex - 1
Person.prototype.name = function () {
  return `My name is ${this.firstName} ${this.lastName}`;
};

const Deba = new Person(1, "Debadarshan", "Maharana", 23);
console.log(Deba.name());

// Ex - 2

Person.prototype.eyeColor = "Blue";
const Subha = new Person(2, "Subhasmita", "Pradhan", 22);
console.log(`The eye color of ${Subha.firstName} is ${Subha.eyeColor}`);
