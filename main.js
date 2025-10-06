// 1
const person = {
  name: "Илья",
  age: 16,
  isSchoolboy: true,
  class: "10A",
};
console.log(person);

// 2
const isEmpty = (list) => {
  for (let key in list) {
    return false;
  }
  return true;
};
let list = {};
console.log(isEmpty(person));

// 3
const task = {
  title: "Выучить JavaScript",
  description: "Пройти несколько практических задач",
  isCompleted: false,
};

const cloneAndModify = (object, modifications) => {
  const newObject = { ...object, ...modifications };
  return newObject;
};

const updatedTask = cloneAndModify(task, {
  isCompleted: true,
  title: "Выучить JS до конца",
});

for (let key in updatedTask) {
  console.log(`${key}: ${updatedTask[key]}`);
}

// 4
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

function callAllMethods(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
}
callAllMethods(myObject);
