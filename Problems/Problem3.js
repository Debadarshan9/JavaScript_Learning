// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


process.stdin.on("data",(input)=>{
    input = input.toString().trim()
    let numbers = input.split(" ").map(Number)
    console.log(sum(numbers[0],numbers[1]))
    console.log(sum2(numbers[0],numbers[1]))

    process.exit()
})

// 1st Approach
let sum = (a,b) =>{
    if(a === b){
        return a
    }
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    let s = 0
    for(let i = min; i <= max; i++){
        s += i
    }
    return s
} 

// 2nd Approach
let sum2 = (a,b) =>{
    let min = Math.min(a,b)
    let max = Math.max(a,b)

    return ((max - min + 1) * (max + min))/2
}