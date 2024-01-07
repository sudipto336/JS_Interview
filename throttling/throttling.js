function clickMe() {
  document.querySelector("button").disabled = true;
  setTimeout(() => {
    document.querySelector("button").disabled = false;
  }, 1000);
}

