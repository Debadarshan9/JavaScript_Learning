function Person(id, firstName, lastName, age, nationality) {
  (this.id = id),
    (this.firstName = firstName),
    (this.lastName = lastName),
    (this.age = age),
    (this.nationality = "Hindu");
}

const Subha = new Person(1, "Subhasmita", "Pradhan", 22);
const Deba = new Person(2, "Debadarshan", "Maharana", 23);

console.log(Deba); // Person {id: 2, firstName: 'Debadarshan', lastName: 'Maharana', age: 23, nationality: 'Hindu'}
console.log(Subha); // Person {id: 1, firstName: 'Subhasmita', lastName: 'Pradhan', age: 22, nationality: 'Hindu'}