// Chocolate and wrapper problem

let chocolate
let wrappers
process.stdin.on("data",(data)=>{
    if(chocolate === undefined){
        chocolate = parseInt(data.toString().trim())
    }
    else{
        wrappers = parseInt(data.toString().trim())

        console.log(wrappersLeft(chocolate,wrappers))
        process.stdin.pause()
    }
})

let wrappersLeft = (ch,wr)=>{
    wrappers = ch + wr
    days = ch
    if(ch <= 0 && wr <= 0){
        return 0
    }
    else if(ch === 0 && wr < 7){
        return 0
    }
    else{
        while(wrappers >= 7){
            let add_ch = parseInt(wrappers/7)
            days += add_ch
            wrappers = add_ch + parseInt(wrappers%7)
        }
        return days
    }
}
