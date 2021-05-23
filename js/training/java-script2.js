'go strict';

//========== 6. Ітерація по масиву ====================
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers);

//========== 6.1. Цикл for...of ====================
// Ітерація по масиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// // Ітерація по рядку
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

//========== 6.2. Инструкции break и continue ====================
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в resultMsg сообщение об отсутствии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// /*
//  * Для чисел менше ніж поріг спрацьовує continue, виконання тіла припиняється
//  * і управління передається на наступну ітерацію.
//  */
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше ніж ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

//========== 7. Багатовимірні масиви ====================
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][0]); // 1
// console.log(matrix[1][2]); // 6
// console.log(matrix[2][2]); // 9

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Підмасив матриці matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Елемент підмасив матриці matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45

//========== 2. Функциональное выражение ====================
// const add = function (a, b, c) {
//   return a + b + c;
// };

// // 1, 2, 3 это аргументы
// const result = add(1, 2, 3);
// console.log(result);

//========== 5. Псевдомассив arguments ====================
// const sum = function() {
//   let total = 0;
//   for (const argument of arguments) {
//     total += argument;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3)); //  6
// console.log(sum(1, 2, 3, 4)); //  10
// console.log(sum(1, 2, 3, 4, 5));

//========== 7. Объявление функции ====================
add(1, 2, 3); // 6
print('text'); // text

function add(a, b, c) {
  let sum = a + b + c;
  console.log(sum);
}


function print(str) {
  console.log(str);
}