// 1
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);
console.log(users);

// 2
function getUserAverageAge(users) {
  let age = 0
  users.forEach((user) => {
    age += user.age;
  });
  return age / users.length;
}
console.log(getUserAverageAge(users));

// 3
const getAllAdmins = (users) => {
  let admin = []
  users.forEach(user => {
    if (user.isAdmin == true) {
      admin.push(user)
    }
  })
  return admin
}
console.log(getAllAdmins(users))

// 4
const first = function (arr, n) {
  if (n === 0) {
    return [];
  } else if (n === undefined) {
    return [arr[0]]; // возвращаем массив с первым элементом
  } else {
    let list = [];
    for (let i = 0; i < n; i++) {
      // до n, а не n - 1
      list.push(arr[i]);
    }
    return list;
  }
};

