//=============== Q1 ==============================
// const productName = 'Droid';
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);

//=============== Q2 ==============================
// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem = pricePerItem + 1500;

// console.log(productName); // добавил для проверки
// console.log(pricePerItem); // добавил для проверки

//=============== Q3 ==============================
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// let isOnline = true;
// let isAdmin = false;

//=============== Q4 ==============================
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice); // добавил для проверки

//=============== Q5 ==============================
// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message); // добавил для проверки

//=============== Q6 ==============================
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//=============== Q7 ==============================
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }

// sayHi();

//=============== Q8 ==============================
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//=============== Q9 ==============================
// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//=============== Q10 ==============================
// function makeMessage (name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// };

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

//=============== Q11 ==============================
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;

//   return totalPrice;
// };

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

//=============== Q12 ==============================
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`

//   return message;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

//=============== Q13 ==============================
// function isAdult(age) {
//   const passed = age >= 18;

//   return passed;
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

//=============== Q14 ==============================
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = SAVED_PASSWORD === password;

//   return isMatch;
// }

// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

//=============== Q15 ==============================
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

//=============== Q16 ==============================
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

//=============== Q17 ==============================
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

//=============== Q18 ==============================
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

//=============== Q19 ==============================
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

//=============== Q20 ==============================
function checkStorage(available, ordered) {
  let message;

  if (ordered === 0) {
    message = "There are no products in the order!"
  } else if (ordered > available) {
    message = "Your order is too large, there are not enough items in stock!"
  } else {
    message = "The order is accepted, our manager will contact you"
  }

  return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0);
