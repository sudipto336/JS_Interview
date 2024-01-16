function clickMe() {
  let count = 0;
  document.getElementById("click_btn").addEventListener("click", () => {
    console.log("Button cliked: " + ++count);
  });
}

clickMe();
