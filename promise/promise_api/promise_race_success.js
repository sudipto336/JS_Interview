const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 success"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 success"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 success"), 3000);
});

Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
