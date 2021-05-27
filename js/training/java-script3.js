'use strict'

//========== 7. Вычисляемые свойства ====================
// const key = 'person';
// const object = {};

// object[key] = 'Mango';
// console.log(object); // {person: 'Mango'}

// const key = 'person';
// const getKey = function () {
//   return 'age';
// };

// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}

//========== 8. Методы объекта ====================
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   // Так метод объявлялся в ES5
//   greetInES5: function () {
//     console.log('Welcome!');
//   },
//   // Так метод объявляется в ES6
//   greetInES6() {
//     console.log('Welcome!');
//   },
// };

// hotel.greetInES5(); // Welcome!
// hotel.greetInES6(); // Welcome!

//========== Доступ к объекту через this ====================
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.showName(); // Resort Hotel

// hotel.changeCapacity(200);
// console.log(hotel.capacity); // 200

//========== 3. Object.keys(), Object.values(), Object.entries() ====================
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]

// console.log(keys);
// console.log(values);
// console.log(entries);

//=======
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]

// for (const key of keys) {
//   console.log('Value: ', hotel[key]);
// }

//=======

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// /*
//  * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
//  * Первый элемент это ключ свойства, второй это значение.
//  */
// const entries = Object.entries(hotel);
// console.table(entries);

// /*
//  * На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  * в переменную key, а второй (значение) в переменную value
//  */
// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];

//     console.log(`${key}: ${value}`);
// }

//========== 2.2. Распыление массивов ====================
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyOfHouses = [...houses];
// const slicedCopyOfHouses = houses.slice();

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(copyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(slicedCopyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(houses === copyOfHouses); // false - разные ссылки
// console.log(houses === slicedCopyOfHouses); // false - разные ссылки
// console.log(slicedCopyOfHouses === copyOfHouses); // false - разные ссылки

// ====== добавление элемента
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const completeHouses = [...houses, 'Targaryen'];

// console.log(completeHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell','Targaryen']

// ====== слияние массивов
// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
// const secondBatch = ['Stark', 'Lannister', 'Tyrell'];

// const houses = [...firstBatch, ...secondBatch];

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']

// обновление ээлементов
const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// Вертикальная запись удобнее для чтения (комбинируя slice и spread)
const updatedHouses = [
  ...houses.slice(0, 1),
  'Frey of the Crossing',
  ...houses.slice(2),
];

console.log(updatedHouses);
// ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']

//========== 3. Операция rest ====================
const add = function (value, ...args) {
  console.log(value); // первый аргумент
  console.log(args); // массив всех остальных аргументов
};

add(10, 1, 2, 3);
add(15, 1, 2, 3, 4, 5);
