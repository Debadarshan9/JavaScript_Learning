// twoSum problem: This is problem is solved by ussing toPointer method

let no_of_ele
let target
let arr =[]
process.stdin.on("data",(data)=>{
    if(no_of_ele === undefined){
        no_of_ele = parseInt(data.toString().trim())
    }
    else if(target === undefined){
        
        target = parseInt(data.toString().trim())
    }
    else{
        arr.push(parseInt(data))
        if(arr.length === no_of_ele){
            console.log(twoSum(arr,target))
            process.stdin.pause()
        }
    }
})

let twoSum = (arr,target)=>{
    let st = 0
    let end = arr.length - 1
    let sum
    let res = []
    while(st < end){
        sum = arr[st] + arr[end]
        if(sum < target){
            st++
        }
        else if(sum > target){
            end--
        }
        else{
            res.push([arr[st],arr[end]])
            st++
            end--
        }
    }
    return res
}
