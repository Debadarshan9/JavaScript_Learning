const getData = async (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error:"+res.status +" "+ res.statusText)
      }
      const data = await res.json();
      console.log("✅ Data fetched successfully");
      resolve(data);
    } catch (error) {
      reject(error || "Some error occured");
    }
  });
};

getData("https://jsonplaceholder.typicode.com/posts/43")
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });
