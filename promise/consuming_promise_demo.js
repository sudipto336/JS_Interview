const user = fetch("https://api.github.com/users/sudipto336");

console.log(user);

user.then((data) => console.log(data));
