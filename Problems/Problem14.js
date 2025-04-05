// Input: a5b2
// Output: aabbb


let input = "a5b2"
let arr = input.split("")
let res = []
for(let i = 0; i < arr.length; i++){
    let num = parseInt(arr[i])
    if(!isNaN(num) && arr[i].toString() === num.toString()){
        arr[i] = num
    }
    res.push(arr[i])
}
let i = 0
let res1 = []
while(i < res.length){
    if(typeof(res[i]) === "number" && typeof(res[i+1]) === "number"){
        let merged = parseInt(`${res[i]}${res[i+1]}`)
        res1.push(merged)
        i += 2
    }
    else{
        res1.push(res[i])
        i+=1
    }
}

let ans = ''
for(let i = 1; i < res1.length; i+=2){
    for(let j = 1; j <= res1[i]; j++){
        ans+=res1[i-1]
    }
}
console.log(ans)


