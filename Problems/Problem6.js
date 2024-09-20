// you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

process.stdin.on("data",(input)=>{
    input = input.toString().trim()
    inputNum = Number(input)
    if(typeof inputNum === "number"){
        console.log(square(inputNum))
        console.log(square2(inputNum))
    }
    
    // console.log(`${input} -> ${typeof(input)}`)
 
    // console.log(`${inputNum} -> ${typeof(inputNum)}`) 
    process.exit() 
})

// 1st Approach
let square = (num) =>{
    num = num.toString()
    return Number(num.split("").map(x => Math.pow(Number(x),2)).join(""))

}

// 2nd Approach
let square2 = (num)=>{
    num = num.toString()
    let result = ""
    for(let n of num){
        result += Math.pow(Number(n),2)
    }
    return Number(result)
}