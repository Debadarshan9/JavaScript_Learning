// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Please Enter a string:",(input) =>{
    
    let result = input.split(/[_-]/).map((word,index) =>{
        if(index === 0){
            return word
        }
        return word.charAt(0).toUpperCase()+word.slice(1)
    }).join("")
    console.log(result)
    rl.close()
})
