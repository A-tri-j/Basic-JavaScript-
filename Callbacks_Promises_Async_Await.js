//A callback is a function passed as an argument to another function

function fetchData(callback) {
  setTimeout(() => {
    const data = "Here's your data!";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("Processing:", data);
}

fetchData(processData);


//A Promise represents a future eventual result of an asynchronous operation.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));




  // async and await make working with promises easier and more readable.


  async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 2000);
  });
}

async function displayData() {
  try {
    const data = await fetchData();
    console.log(data); // "Hello, World!" after 2 seconds
  } catch (error) {
    console.error(error);
  }
}

displayData();
