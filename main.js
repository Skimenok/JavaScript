// 1
const firstName = "Илья",
  lastName = "Улыбин",
  isStudent = true;

// 2
let age = 16,
  currentYear = 2025,
  birthYear;

birthYear = currentYear - age;

// 3
console.log(
  `Меня зовут ${firstName}, мне ${age} лет. Я ученик курса: ${isStudent}.`,
);

// 4
let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;
console.log(result);
