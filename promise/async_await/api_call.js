async function callAPI() {
  const API_URL = "https://api.github.com/users/sudipto336";
  const response = await fetch(API_URL);
  const jsonValue = await response.json();
  console.log(jsonValue);
}

callAPI();
