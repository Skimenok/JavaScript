// 1
let task1 = 4656,
  res = task1 % 2 === 0 ? "число чётное" : "число нечётное";
console.log(`ответ 1 задачи: ${res}`);
// 2
alert("Задача 2");
let age = prompt("Введите свой возрост", 75);
let discount = age < 18 ? 10 : (age <= 65 ? 20 : 30);
alert(discount);
switch (age) {
  case age < 18:
    discount = 10;
    break;
  case age >= 65:
    discount = 20;
    break;
  default:
    discount = 30;
}
// 3
alert("Задача 3");
let username = prompt("Введите имя пользователя", "гость"),
  password = prompt("Введите пароль", 0);
if ((username == "admin" || "user") && password == '123456') {
  alert("Доступ разрешен");
} else {
  alert("Доступ запрещен")
}
// 4
alert("Задача 4");
let weight = prompt("вес посылки (в килограммах)", 0),
  delivery = prompt('тип доставки. Допустимые варианты: "Стандарт" "Экспресс" "Премиум"', '');

if (weight <= 0) {
  alert("Некорректный вес посылки")
}
if (delivery != 'Стандарт' && delivery != 'Экспресс' && delivery != 'Премиум') {
  alert("Неверный тип доставки")
}

const bas = weight < 1 ? 5 : (weight <= 5 ? 10 : 15);

const coefficient =
  delivery == "Стандарт" ? 1 : delivery == "Экспресс" ? 1.5 : 2;

const result = bas * coefficient
alert(result)
