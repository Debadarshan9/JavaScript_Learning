// Tripple Sum

let trippleSum = (arr)=>{
    let sortedArr = arr.sort((a,b)=> a - b)
    let res = []
    for(let i = 0; i < sortedArr.length - 2; i++){
        if(i > 0 && sortedArr[i] === sortedArr[i - 1]){
            continue
        }
        let left = i + 1
        let right = sortedArr.length - 1
        while(left < right){
            let current_sum = sortedArr[i] + sortedArr[left] + sortedArr[right]
            if(current_sum === 0){
                res.push([sortedArr[i],sortedArr[left],sortedArr[right]])
                left++
                right--
            }
            else if(current_sum < 0){
                left++
            }
            else{
                right--
            }
        }
    }
    return res
}
// let arr = [-1, 0, 1, 2, -1, -4]
// console.log(trippleSum(arr))
console.log(trippleSum([-1, 0, 1, 2, -1, -4]))
console.log(trippleSum([-3, 0, 1, 2, -1, 1, -2]))