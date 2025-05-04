let p = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (response.status !== 200) {
        reject("Error occured");
      }
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((e) => {
      reject(e);
    });
});

p.then((value) => {
  console.log(value);
}).catch((e) => {
  console.log(e);
});
