// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

process.stdin.on("data",(input)=>{
    
    input = input.toString().trim()
    
    let strings = input.split(" ").map(s => s)
    if(strings.length > 1){
        console.log(longest(strings[0],strings[0]))
    }
    else{

        console.log(longest(strings[0],strings[1]))
    }
    process.exit()
})
// 1st Approach
let longest = (s1,s2) =>{
    let total = s1+s2
    // let chars = []
    let set = new Set()
    for(let char of total){
        set.add(char)
    }
    let long = ""
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    for(let item of alphabets){
        if(set.has(item)){
            long += item
        }
    }
    return long
}

// 2nd Approach
let longest2 = (a,b)=>{
    let combined = a+b
    let unique = [...new Set(combined)]
    return unique.sort().join("")
}