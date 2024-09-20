// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

process.stdin.on("data",(input)=>{
    console.log(removeVowels3(input.toString().trim()))
    process.exit()
})

// 1st Approach
let removeVowels = (str)=>{
    let vowels = "aeiouAEIOU"
    let newStr = ""
    for(let char of str){
        if(!vowels.includes(char)){
            newStr += char
        }
    }
    return newStr
}

// 2nd Approach
let removeVowels2 = (str)=>{
    return str.replace(/[aeiouAEIOU]/g,"")
}


// 3rd Approach => using filter()

let removeVowels3 = (str)=>{
    let newStr = str.split("").filter(char =>
        !"aeiouAEIOU".includes(char)
    ).join("")

    return newStr
}