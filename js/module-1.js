//=============== Q1 ============== Объявление переменных ================
// const productName = 'Droid';
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);

//=============== Q2 =============== Переопределение значения переменной ===============
// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem = pricePerItem + 1500;

// console.log(productName); // добавил для проверки
// console.log(pricePerItem); // добавил для проверки

//=============== Q3 ============== Типы примитивов (числа, строки, були) ================
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// let isOnline = true;
// let isAdmin = false;

//=============== Q4 ============== Математические операторы ================
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice); // добавил для проверки

//=============== Q5 =============== Шаблонные строки ===============
// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message); // добавил для проверки

//=============== Q6 =============== Задача: заказ продукта ===============
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//=============== Q7 ============== Объявление и вызов функции ================
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }

// sayHi();

//=============== Q8 ============== Параметры и аргументы ================
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//=============== Q9 ============== Возврат значения ================
// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//=============== Q10 =============== Задача: шаблонные строки 2.0 ===============
// function makeMessage (name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// };

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

//=============== Q11 ============== Задача: математические операторы 2.0 ================
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;

//   return totalPrice;
// };

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

//=============== Q12 ============== Задача: заказ продукта 2.0 ================
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`

//   return message;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

//=============== Q13 ============== Операторы сравнения >, >=, < и <= ================
// function isAdult(age) {
//   const passed = age >= 18;

//   return passed;
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

//=============== Q14 ============== Операторы сравнения === и !== ================
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = SAVED_PASSWORD === password;

//   return isMatch;
// }

// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

//=============== Q15 ============== Инструкция if...else ================
// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

//=============== Q16 ============== Задача: склад товаров ================
// function checkStorage(available, ordered) {
//   let message;

//   if (ordered > available) {
//       message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//     }
    
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

//=============== Q17 ============== Комбинированный оператор присвоения ================
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

//=============== Q18 ============== Задача: проверка баланса ================
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
  
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }

//   return message;
// }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

//=============== Q19 ============== Блок else...if ================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

//=============== Q20 ============== Задача: склад товаров 2.0 ================
// function checkStorage(available, ordered) {
//   let message;

//   if (ordered === 0) {
//     message = "There are no products in the order!"
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!"
//   } else {
//     message = "The order is accepted, our manager will contact you"
//   }

//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

//=============== Q21 ============== Логическое «И» (оператор &&) ================
// function isNumberInRange(start, end, number) {
//   const isInRange = start < number && end > number;

//   return isInRange;
// }

// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

//=============== Q22 ============== Логическое «ИЛИ» (оператор ||) ================
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip';

//   return canAccessContent;
// }

// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

//=============== Q23 ============== Логическое «НЕ» (оператор !) ================
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;

//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76)

//=============== Q24 =============== Задача: расчёт скидки ===============
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent < 50000 && totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent < 20000 && totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }

//   return discount;
// }

// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

//=============== Q25 ============== Тернарный оператор ================
// function checkStorage(available, ordered) {
//   let message;

//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

//=============== Q26 ============== Задача: проверка пароля ================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message = ADMIN_PASSWORD === password ? 'Access is allowed' : 'Access denied, wrong password!'

//   return message;
// }

// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// console.log(checkPassword("r3actsux"));

//=============== Q27 ============== Инструкция switch ================
// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) {
//     case 'starter':
//       price = 0;
//       break;

//     case 'professional':
//       price = 20;
//       break;

//     case 'organization':
//       price = 50;
//       break;
//   }

//   return price;
// }

// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");

//=============== Q28 ============== Инструкция switch c блоком default ================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
  
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
  
//     default:
//       message = 'Access denied, wrong password!';
//   }
  
//   return message;
// }

// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

//=============== Q29 ============== Задача: доставка товара ================
// function getShippingCost(country) {
//   let message;

//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
      
//     case 'Chile':
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
      
//     case 'Australia':
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
      
//     case 'Jamaica':
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
      
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
  
//   return message;
// }

// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");

//=============== Q30 ============== Длина строки ================
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");

//=============== Q31 ============== Индексация элементов строки ================
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

//=============== Q32 ============== Метод slice() ================
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }

// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);

//=============== Q33 ============== Задача: форматирование сообщения ================
// function formatMessage(message, maxLength) {
//   let result;
  
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }
    
//   return result;
// }

// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);

//=============== Q34 ============== Методы toLowerCase() и toUpperCase() ================
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   return normalizedInput;
// }

//=============== Q35 ============== Метод includes() ================
// function checkForName(fullName, name) {
//  const result = fullName.includes(name);
//   return result;
// }

// checkForName("Egor Kolbasov", "Egor");
// checkForName("Egor Kolbasov", "egor");
// checkForName("Egor Kolbasov", "egOr");
// checkForName("Egor Kolbasov", "Zhenya");
// checkForName("Vadim Nekrasov", "Vadim");
// checkForName("Vadim Nekrasov", "vadim");
// checkForName("Vadim Nekrasov", "Dima");

//=============== Q36 ============== Задача: проверка спама ================
function checkForSpam(message) {
  let result;

  result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale') ? true : false;
  
  return result;
}

checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");
