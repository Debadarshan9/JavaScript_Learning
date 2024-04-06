let fruits = ['Banana','Mango','Orange','Apple']
console.log(`The given array is: ${fruits}`)

//sort() --> This method sorts the array in alphabeticlly order (e.g A > B, 2 > 5)
console.log(`The sorted array will be: ${fruits.sort()}`)

// reverse() --> This method reverse the elements of an array 
console.log(`The reversed array is: ${fruits.reverse()}`)

// Numeric sort
let numArray = [21,43,23,76,34]
let sortAscending = numArray.sort((a,b)=>{
    return a-b
})
console.log(`The sorted array in ascending order is: ${sortAscending}`)
 let sortDescending = numArray.sort((a,b)=>{
    return b-a
 })
console.log(`The sorted array in descending order is: ${sortDescending}`)

// sorting array in random order
let randomSort = numArray.sort(() =>{
    return 0.5 - Math.random()
} )

// minimum number in an array 
let minValue = Math.min.apply(null, numArray)
console.log(`The minimum value in the array is: ${minValue}`)

// max value in the array 
let maxValue = Math.max.apply(null,numArray)
console.log(`The maximum value in the array is: ${maxValue}`)

// sorting object arrays
let cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ]; 
  console.log(cars)

  cars.sort((a,b)=>{
    return a.year - b.year
  })

  console.log(cars)