const numbers = [1, -3, 0, 4, -4];
const posNumbers = removeNeg(numbers, (x) => x > 0); // Here (x) => x > 0 is an callback function passed as an arguement. We can make a function and pass it here also.

console.log(posNumbers); // [ 1, 4 ]

function removeNeg(arr, callback) {
  const myArr = [];
  for (let i of arr) {
    if (callback(i)) {
      myArr.push(i);
    }
  }
  return myArr;
}

// Ex - 1
console.log("Example 1 👇")
function greet(name, callback) {
    console.log("Hi " + name);
    // 👉 Call the callback here
    callback();
  }

  greet("Subha", function() {
    console.log("Welcome!");
  });

// Ex - 2
console.log("Example 2 👇")
  function calculate(a, b, operation) {
    // call the operation function with a and b (callback function)
    operation(a,b)
  }
  
  calculate(10, 20, function(x, y) {
    console.log(x + y);
  });
  
  calculate(10, 20, function(x, y) {
    console.log(x * y);
  });


// Ex - 3
console.log("Example 3 👇")
  function customForEach(array, callback) {
    // Loop through array and call the callback with each element
    for(let i in array){
        callback(array[i],i)
    }
  }
  
  customForEach(["a", "b", "c"], function(value, index) {
    console.log(`Index ${index}: ${value}`);
  });


function doHomeWork(subject,callback){
  console.log(`Starting homework for ${subject}`)
  setTimeout(() => {
    console.log(`Finished homework for ${subject}`)
    callback()
  }, 2000);
}

function afterHomeWork(){
  console.log("Now I can watch TV!")
}

doHomeWork("Math",afterHomeWork)