// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples (input --> output):

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"


console.log("Enter a string:")
process.stdin.on("data",(input)=>{
    maskify(input)
    process.exit()
})

function maskify(input){
    let inputStr = input.toString().trim()
    let length = inputStr.length
    let lastFour = ""
    if(length === 0){
        console.log("")
    }else if(length <= 4){
        console.log(inputStr)
    }
    else{

        for(let i = 0; i < length - 4; i++){
            lastFour += "#"
        }
        for(let i = length - 4; i < length; i++){
            lastFour += inputStr[i]
        }
    }
    console.log(lastFour)
}