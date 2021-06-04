'use strict';

//=======================================================================

// const totality = function (a, b) {
//   return a + b;
// };
// console.log(totality(2, 7));

// //=====

// function total(c, d) {
//   return c + d;
// }
// console.log(total(9, 5));

// //=====

// const sum = (e, f) => e + f;
// console.log(sum(6, 13));

//=======================================================================

//========== 3. Фильтрация массива ====================

// const filter = function (array, test) {
//     const filteredElements = [];
    
//     for (let element of array) {
//         const passed = test(element);
        
//         if (passed) {
//             filteredElements.push(element);
//         }
//     }
    
//     return filteredElements;
// };

// // const array = [1, 2, 3, 4, 5, 6, 5, 7, 2, 3];
// // const element = 5;

// // console.log(filteredElements);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

//========== 1. Замыкания ====================
// const makeShef = function (name) {
//   /*
//    * Параметр name это локальная переменная для функции makeShef.
//    * Это значит что она будет доступна функции makeDish через замыкание.
//    */
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef('Mango');
// mango('apple pie'); // Mango is cooking apple pie
// mango('beef stew'); // Mango is cooking beef stew

// const poly = makeShef('Poly');
// poly('pancakes'); // Poly is cooking pancakes
// poly('eggs and bacon'); // Poly is cooking eggs and bacon

//=========================================

// const fnOutter = function (name) {
//   let a = 10;

//   return function fnInner(value) {
//     a = value + 5;
//     console.log(`${name} has a ${a} dollars!`);
//   }
// }

// const smith = fnOutter('Smith');
// smith(10);

// const nika = fnOutter('Nika');
// nika(44);

//=========================================

const func1 = function () {
  console.log('func1 -> this: ', this);
  console.log('func1 -> this.name: ', this.name);
}

const obj = {
  name: 'Alex',
};

console.log('obj: ', obj);

obj.showFunc1 = func1;
console.log('obj: ', obj);
obj.showFunc1();

//========== 1. Замыкания ====================