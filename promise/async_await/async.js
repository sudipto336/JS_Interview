const promise = new Promise((resolve, reject) => resolve("Hello from promise"));

function nonAsyncFn() {
  return "Hello from nonAsyncFn";
}

async function asyncFnReturningNormalValue() {
  return "Hello from asyncFnReturningNormalValue";
}

async function asyncFnReturningPromise() {
  return promise;
}

console.log(nonAsyncFn());
console.log(asyncFnReturningNormalValue());
console.log(asyncFnReturningPromise());
