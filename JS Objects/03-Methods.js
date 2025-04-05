//1. Object.assign(target,source)
const Person1 = {
  firstName: "Debadarshan",
  lastName: "Maharana",
  age: 23,
  eyeColor: "Black",
};

const Person2 = {
  firstNam: "Subhasmita",
  lastNam: "Pradhan",
};

Object.assign(Person1, Person2); //It copies all properties from Person2(Target) into Person1(Source) and overwrites if any existing keys exist. If there will not exist any match then properties of both Person1 and Person2 will merge.

console.log(Object.entries(Person1));
/*
[
  [ 'firstName', 'Debadarshan' ],
  [ 'lastName', 'Maharana' ],
  [ 'age', 23 ],
  [ 'eyeColor', 'Black' ],
  [ 'firstNam', 'Subhasmita' ],
  [ 'lastNam', 'Pradhan' ]
]
*/

// If the properties of Person2 will match with Person1 then 👇 (Simply overwrites)
/*
[
  [ 'firstName', 'Subhasmita' ],
  [ 'lastName', 'Pradhan' ],
  [ 'age', 23 ],
  [ 'eyeColor', 'Black' ]
]
*/

//2. Object.entries(objectName) --> It gives the data in array of array
const Fruits = {
    banana:300,
    mangoes:200,

}
console.log(Object.entries(Fruits)) // [ [ 'banana', 300 ], [ 'mangoes', 200 ] ]

//3. Object.fromEntries(objectName) --> It destructures the entries
const Cars = [
    ["Audi","White"],
    ["Thar","Red"],
    ["Mercedes","Black"],
]
console.log(Object.fromEntries(Cars)) // { Audi: 'White', Thar: 'Red', Mercedes: 'Black' }

//4. Object.keys(objectName) --> It gives only keys of an object & 5.Object.values(objectName) --> It gives only values of an object
const Employee = {
    id:1,
    name:"Debadarshan Maharana",
    state:"Odisha",
    dist:"Puri",
    salary:20000
}

console.log(Object.keys(Employee)) // [ 'id', 'name', 'state', 'dist', 'salary' ]
console.log(Object.values(Employee)) // [ 1, 'Debadarshan Maharana', 'Odisha', 'Puri', 20000 ]
