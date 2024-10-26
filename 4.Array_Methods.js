let fruits = ["Banana","Orange","Pomegrante","Guava","Grapes"]

// at()
for(let i = 0;i<fruits.length;i++){
    console.log(`The element at ${i} index is: ${fruits.at(i)}`)
}

// join()--> It helps to separate to array elements with specific separator
console.log(`The fruits are given that : ${fruits.join("*")}`)

// pop()--> It remove the last element of the array
let poped = fruits.pop()
console.log(`Now the fruits are: ${fruits}`)
console.log(`The poped elements is: ${poped}`)

// push() --> It adds the element at the last index
let add = fruits.push("Apple")
console.log(`After adding Apple the fruits array is: ${fruits}`)
console.log(`The pushed element at: ${add}`) //It returns the lengthof the array

// shift() --> This method removes the 1st index element from the array and shifts all the elemets to lower index
let fruit = fruits.shift()
console.log(`The element which is removed is: ${fruit}`)
console.log(`Now the fruits array is: ${fruits}`)

// unshift() --> It adds element/elements from the 1st index of the array and it returns the new array length
fruits.unshift("Lemon","Pine Apple")
console.log(`The fruits array is: ${fruits}`)

// concat() --> It merge no. of arrays
let fruit1 = ["Cherry","Watermelon","Raspbery"]
let fruit2 = ["Papeya","Blueberry"]
let fruit3 = fruit1.concat(fruit2)
console.log(`The merged array is: ${fruit3}`)

// flat() --> It creates a new array with all the subarray elements concatenated into it
let arr = [1,2,3,[4,5,[6,7]],]
console.log(arr.flat(1))
console.log(arr.flat(2)) //with specifing 2, this method flattens the array up to a depth of 2

// splice() --> It helps to add new elements into an array and it returns the removed elements
let removed = fruits.splice(2,2,"Papaya","Coconut")
console.log(`The new array will be: ${fruits}`)
console.log(`The removed fruits are: ${removed}`)

// slice() --> It take 2 arguement, 1st one is start index and 2nd one is end adress. It returns the elements of array which are in between start index and end index
let symbols= ["Comma","Alpha","Bita","Gamm"]
console.log(`The elemets of arry in between 1 and 3 is: ${symbols.slice(1,3)}`)