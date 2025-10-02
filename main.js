// 1
function calculateFinalPrice(basePrice, discountPercent, taxRate) {
  let priceAfterDiscount = basePrice - (basePrice * discountPercent) / 100;
  let finalPrice = priceAfterDiscount * (1 + taxRate);
  return finalPrice;
}

// 2
function checkAccess(login, password) {
  if (login == "admin" && password == "123456") {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}

// 3
function getTimeOfDay(time) {
  switch (time) {
    case time >= 0 && time <= 5:
      console.log("Ночь");
      break;
    case time >= 6 && time <= 11:
      console.log("Утро");
      break;
    case time >= 12 && time <= 17:
      console.log("День");
      break;
    case time >= 18 && time <= 23:
      console.log("Ночь");
      break;
    default:
      console.log("Некорректное время");
  }
}

//4
function findFirstEven(start, end) {
  let fist = 0;
  for (start; start != end; start++) {
    if (start % 2 == 0) {
      fist = start;
      break;
    }
  }
  if (start == 0) {
    return "Чётных чисел нет";
  } else {
    return start;
  }
}
