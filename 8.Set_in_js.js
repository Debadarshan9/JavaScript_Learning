// Set is a mutable collection
var letters = new Set();
letters.add(1)
letters.add(2)
letters.add(3)
letters.add(3) //If you add same element, only first one will be saved

// Printing all the eleents of a set in one line 
var ele = " "
for(var i of letters){
    ele += i+" "
}
console.log(ele)

console.log(typeof(letters)) //object
console.log(letters instanceof Set) //true
console.log(letters instanceof Array) //false



// Methods of Set ===============================
var s1 = new Set(["a","b","c"])
console.log(s1.has("d")) //false
console.log(s1.has("b")) //true

// use values() and keys() for selecting the elements in a set
console.log(s1.values())
console.log(s1.keys())

console.log(s1.entries()) //entries() returns [key,value] pair