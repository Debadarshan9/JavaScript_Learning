// Creating of array
let fruits = ["Banana","Orange","Mangoes","Pomegrante","Apple"];
console.log(fruits)
console.log(`The array is given that: ${fruits} and isArray: ${Array.isArray(fruits)}`)

// converting array to string
console.log(`The converted array to string is: ${fruits.toString()} and isArray: ${Array.isArray(fruits)}`)

// length of an array
console.log(`The length of the array is: ${fruits.length}`)

// Accessing the element of an array
for (let i=0;i<fruits.length;i++){

    console.log(`The elements present is ${i} index is: ${fruits[i]}`)
}

// Accessing all the elements of the array
console.log(`All the elements present in the array are: ${fruits} `)


// Adding array elements
let element = ["Grapes"]
fruits.push(element)
console.log(`Now the new array is: ${fruits}`)

