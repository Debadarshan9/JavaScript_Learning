// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

process.stdin.on("data",(data)=>{
    let decimal = parseInt(data.toString().trim())
    let count = countBits(decimal)

    console.log(count)
    process.stdin.pause()
})

let countBits = (dec)=>{
    let binary = ''
    while(dec > 0){
        binary = (dec % 2) + binary
        dec = parseInt(dec/2)
    }
    let c = 0
    for(let i of binary){
        if(i == 1){
            c++
        }
    }
    return c
}