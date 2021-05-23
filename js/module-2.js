'go strict'

//=============== Q1 ==============================
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

//=============== Q2 ==============================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//  if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
  
//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//=============== Q3 ==============================
// function checkStorage(available, ordered) {
//   // Change code below this line

//     if (ordered === 0) {
//     return "Your order is empty!";
//   } 
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
  
//   return "The order is accepted, our manager will contact you";
  
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//=============== Q4 ==============================
// Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

//=============== Q5 ==============================
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

//=============== Q6 ==============================
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = 'peach';
// fruits[3] = 'banana';

//=============== Q7 ==============================
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

//=============== Q8 ==============================
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);

//=============== Q9 ==============================
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
  
//   return [firstElement, lastElement];
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

//=============== Q10 ==============================
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);

//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

//=============== Q11 ==============================
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   const wordsQuantity = message.split(' ');
//   const messageLength = wordsQuantity.length;
//   const totalPrice = messageLength * pricePerWord;
  
//   return totalPrice;
//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

//=============== Q12 ==============================
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);


//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

//=============== Q13 ==============================
// function slugify(title) {
//   // Change code below this line
//   const titleLowerCase = title.toLowerCase();
//   const titleJoined = titleLowerCase.split(' ');
//   const slug = titleJoined.join('-');

//   return slug;
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//=============== Q14 ==============================
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//=============== Q15 ==============================
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

//=============== Q16 ==============================
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const preArray = firstArray.concat(secondArray);
//   const postArray = preArray.slice(0, maxLength);
  
//   return postArray;
//   // Change code above this line
//   }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

//=============== Q17 ==============================
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

//=============== Q18 ==============================
// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
  
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
//   // Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal(0));

//=============== Q19 ==============================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//=============== Q20 ==============================
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const value of order) {
//     total += value;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// =============== Q21 ============================== Задача: поиск самого длинного слова
function findLongestWord(string) {
  // Change code below this line
  let stringArray = string.split(' ');
  let longestWord = stringArray[0];
  
  for (let i = 0; i < stringArray.length; i += 1) {
    if (longestWord.length < stringArray[i].length) {
      longestWord = stringArray[i];
    }
  }
  
  return longestWord;
  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord(""));

// =============== Q22 ==============================

// =============== Q23 ==============================

// =============== Q24 ==============================

// =============== Q25 ==============================

// =============== Q26 ==============================

// =============== Q27 ==============================

// =============== Q28 ==============================

// =============== Q29 ==============================

// =============== Q30 ==============================