const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello from promise1"), 5000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello from promise2"), 10000);
});

async function asyncFn() {
  console.log("async fn execution started");
  const data1 = await promise1;
  console.log(`data from promise1 - ${data1}`);
  const data2 = await promise2;
  console.log(`data from promise2 - ${data2}`);
  console.log("async fn execution completed");
}

asyncFn();
