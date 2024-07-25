// forEach() 
let numbers = [45, 4, 9, 16, 25];
let t = ""
numbers.forEach((value,index,numbers) =>{
    t+=value+'-'
})
console.log(`The numbers are: ${t}`)
// ṃap()

let map = numbers.map((value,index,numbers)=>{
     return  value*2
})
console.log(`The values with multiplied 2 are: ${map}`)

// filter()
let filter = numbers.filter((value,index,numbers)=>{
    return value > 18
})
console.log(`The numbers greter than 18 in the array are: ${filter}`)

// reduce()
let reduce = numbers.reduce((total,value,index,numbers)=>{
    return total+value
})
console.log(`The sum of the elements in the array is ${reduce}`)

// every() --> It returns is all the numbers are accepting the condition or not
let every1 = numbers.every((value,index,numbers) =>{
    return value > 5
})
console.log(`Is all the elements in the array are greater than 5: ${every1}`)

let every2 = numbers.every((value,index,numbers) =>{
    return value > 1
})
console.log(`Is all the elements in the array are greater than 1: ${every2}`)

// some() --> It returns is some of the numbers are accepting the condtion or not
let some = numbers.some((value,index,numbers) =>{
    return value > 15
})
console.log(`Is some of the numbers are greater than 15: ${some}`)

// Array.from() --> It helps to split an word in single caharacters
let str = "ABCDE"
console.log(Array.from(str))

// spread()
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

console.log("The months are: ",...q1,...q2,...q3,...q4)
