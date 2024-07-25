// indexOf() --> It searches an element in the array and returns its position
// If the element is not present it returns -1
let fruits1 = ["Banana","Orange","Apple","Pine apple","Guava"]
console.log(`The position of Banana is: ${fruits1.indexOf("Banana")}`) //2

// lastIndexOf() --> It is same as indexOf() but it returns the position of last occurance element
let fruits2 = ["Banana","Orange","Apple","Banana","Pine apple","Guava"]
console.log(`Here the position of Banana is: ${fruits2.lastIndexOf("Banana")}`) //3 

// includes() --> It returns boolean value i.e the element is present or not
console.log(`Is pine apple present in the fruits1: ${fruits1.includes("Pine apple")}`) //true

// find() --> it returns the nearest element
let numArray = [45,32,76,12,39]
console.log(`The values greater than 32 are: ${numArray.find(myFun)}`) //45
function myFun(value){
    return value > 32
}

// findIndex() --> It returns the index of finding element which is nearest
console.log(`The index of the element greater than 32 is :${numArray.findIndex(myFun1)}`)
function myFun1(val){
    return val>32
}