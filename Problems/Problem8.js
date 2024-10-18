// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

let numbers = [];
let totalNumbers = 0;
let res_arr = [];
let num_of_zeros = 0;
console.log("How many elements you want:")
process.stdin.on("data", (data) => {
  let input = data.toString().trim();
  if (totalNumbers === 0) {
    totalNumbers = parseInt(input);
    console.log(`Enter ${totalNumbers} elements:`)
  } else {
    numbers.push(input);
    if (numbers.length === totalNumbers) {
        process.stdin.pause();
        console.log(moveZeros(numbers));
    }
  }
});

let moveZeros = (numbers_arr) => {
  let res_arr = [];
  let num_of_zeros = 0;
  for (let i of numbers_arr){
    if(i != 0){
        res_arr.push(i)
    }
  }
  num_of_zeros = numbers_arr.length - res_arr.length
  let zero = 0
  for(let i = 0; i < num_of_zeros; i++){
    res_arr.push(zero.toString())
  }
  return res_arr
};

