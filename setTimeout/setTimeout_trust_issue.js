console.log("program start");

setTimeout(() => {
  //will be executed after 4 sec (not 2 sec) as the main thread or call stack is empty only after 10 sec
  //after 2 sec this callback fn will wait in callback queue for call stack to be empty to get chance to be executed
  console.log("setTimeout callback called");
}, 2000);

//blocking call stack or main thread for 4 sec

const startTime = new Date().getTime();
let endTime = startTime;
const delay = 4000;

while (endTime > startTime + delay) {
  endTime = new Date().getTime();
}

console.log("program end");
