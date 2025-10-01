// 1
console.log("Задача 1");
for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    continue;
  }
  console.log(i);
}

// 2
console.log("Задача 2");
alert("Задача 2");
let x = +prompt("Введите число", 1),
  factorialX = 1;
for (x; x > 0; x--) {
  factorialX = factorialX * x;
}
console.log(factorialX);

// 3
console.log("Задача 3");
let board = "";
row = 1;
el = true;

while (row < 9) {
  for (let i = 0; i < 8; i++) {
    if (el == true) {
      board += "* ";
      el = false;
    } else {
      board += "# ";
      el = true;
    }
  }
  board += "\n";
  row++;
  el = el == true ? false : true
}
console.log(board);
