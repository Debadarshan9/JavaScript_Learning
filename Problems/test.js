console.log("Enter size of array");
let numbers = [];
let size;
let target;
process.stdin.on("data", (data) => {
  if (size === undefined) {
    size = parseInt(data.toString().trim());
    console.log("Enter a target");
  } else if (target === undefined) {
    target = parseInt(data.toString().trim());
    console.log(`Enter ${size} numbers:`);
  } else {
    let ele = parseInt(data.toString().trim());
    numbers.push(ele);
    if (numbers.length === size) {
      console.log(tripleSum(numbers, target, size));
      process.stdin.pause();
    }
  }
});

let tripleSum = (arr, t, l) => {
  arr = arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < l - 2; i++) {
    if(i > 0 && arr[i] === arr[i - 1]){
        continue
    }
    let left = i + 1;
    let right = l - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === t) {
        res.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (sum < t) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};
