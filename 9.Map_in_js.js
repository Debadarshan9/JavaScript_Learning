var m1 = new Map()
m1.set(100,"Apple")
m1.set(200,"Orange")
m1.set(300,"Guava")
m1.set(300,"Guava") //If you add same key then, it will save only 1st one
m1.set(400,"Guava") //if you add different key but same value then, it will add it to map

console.log(m1.keys()) //It returns only keys 
console.log(m1.values()) //It returns only values

console.log(m1.get(100)) //This get() method takes key and returns its corresponding value

console.log(m1.size) //size returns the no. of pairs present in the map
m1.delete(300) //It takes only key and deletes that key along with value
console.log(m1)

// clear() is used to empty the map

console.log(m1.has("Guava")) // has() takes key and checks whether the key is available or not

console.log(m1.entries())  //Returns an itereator object with the [key,value] pair in a map

// keys() returns all the keys present in the map
// values() returns all the values present in the map



