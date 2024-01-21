function apiCall() {
  const API_URL = "https://api.github.com/users/sudipto336";
  const promise = fetch("https://api.github.com/users/sudipto336");
  promise.then((res) => res.json()).then((data) => console.log(data));
}

apiCall();
