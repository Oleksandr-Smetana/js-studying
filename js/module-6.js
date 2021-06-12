'use strict';

// ========== T1 ========== Метод forEach(callback) ==========
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//    // Пиши код ниже этой строки

//   orderedItems.forEach(function(number, i) {
//     totalPrice += orderedItems[i];
//   });
  
  

//   // Пиши код выше этой строки
//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ========== T2 ========== Задача. Фильтрация массива чисел ==========
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     numbers.forEach(function(number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
  
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ========== T3 ========== Задача. Общие элементы ==========
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
    
//     firstArray.forEach(function(element, i) {
//        if (secondArray.includes(element)) {
//          commonElements.push(element);
//     }
//     })
//     return commonElements;
//     // Пиши код выше этой строки
//   }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// ========== T4 ========== Стрелочные функции ==========
// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));

// ========== T5 ========== 00 ==========

// ========== T6 ========== 00 ==========

// ========== T7 ========== 00 ==========

// ========== T8 ========== 00 ==========

// ========== T9 ========== 00 ==========

// ========== T10 ========== 00 ==========