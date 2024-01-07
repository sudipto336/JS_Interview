const userObj = {
  name: "Sam",
  age: 20,
};

const getUserInfo = (userObj) => {
  return function (userInfo) {
    return userObj[userInfo];
  };
};

let res = getUserInfo(userObj);
console.log(res("name"));

console.log(getUserInfo(userObj)("name"));
