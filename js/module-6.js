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
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// ========== T5 ========== Неявный возврат ==========
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строки

// ========== T6 ========== Стрелочные функции как коллбеки ==========
// // Пиши код ниже этой строки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => totalPrice += item);

//   return totalPrice;
// }
// // Пиши код выше этой строки

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ========== T7 ========== Задача. Фильтрация массива чисел 2.0 ==========
// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number => {
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

// ========== T8 ========== Задача. Общие элементы 2.0 ==========
// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
// // Пиши код выше этой строки
//     return commonElements;
// }
  
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// ========== T9 ========== Чистые функции ==========
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   let newNumbers = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newNumbers.push(number + value);
//     } else {
//       newNumbers.push(number);
//     }
//   });
//   return newNumbers;
//     // Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// ========== T10 ========== Метод map() ==========
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// ========== T11 ========== Метод map() и массив объектов ==========
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);
// console.log(titles);

// ========== T12 ========== Метод flatMap() ==========
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// ========== T13 ========== Задача. Имена пользователей ==========
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// // Пиши код ниже этой строки
// const getUserNames = users => {
//     return users.map(user => user.name);
//   };
//   // Пиши код выше этой строки

// console.log(getUserNames);

// ========== T14 ========== Задача. Почты пользователей ==========
// // Пиши код ниже этой строки
// const getUserEmails = users => {
//   return users.map(user => user.email);  
//   };
//   // Пиши код выше этой строки
// console.log(getUserEmails);

// ========== T15 ========== Методы filter и find ==========
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ========== T16 ========== Фильтрация уникальных элементов ==========
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, idx, arr) => arr.indexOf(genre) === idx);
  
// console.log(allGenres);
// console.log(uniqueGenres);

// ========== T17 ========== Метод filter() и массив объектов ==========
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// ========== T18 ========== Задача. Пользователи с цветом глаз ==========
// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//  return users.filter(user => user.eyeColor === color);
// };
// // Пиши код выше этой строки
// console.log(getUsersWithEyeColor);

// // ========== T19 ========== Задача. Пользователи в возрастной категории ==========
// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(user => user.age > minAge && user.age < maxAge);
// };
// // Пиши код выше этой строки
// console.log(getUsersWithAge);

// ========== T20 ========== Задача. Пользователи с другом ==========
// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//    return users.filter(user => user.friends.includes(friendName));
// };
// // Пиши код выше этой строки
// console.log(getUsersWithFriend);

// ========== T21 ========== Задача. Список друзей ==========
// // Пиши код ниже этой строки
// const getFriends = (users) => {
//    return users.flatMap(user => user.friends).filter((friend, idx, arr) => arr.indexOf(friend) === idx);
// };
// // Пиши код выше этой строки
// console.log(getFriends);

// ========== T22 ========== Задача. Активные пользователи ==========
// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive);
// };
// // Пиши код выше этой строки
// console.log(getActiveUsers);

// ========== T23 ========== Задача. Неактивные пользователи ==========
// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//    return users.filter(user => !user.isActive);
// };
// // Пиши код выше этой строки
// console.log(getInactiveUsers);

// ========== T24 ========== Метод find() ==========
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// ========== T25 ========== Задача. Пользователь с почтой ==========
// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//    return users.find(user => user.email === email);
// };
// // Пиши код выше этой строки
// console.log(getUserWithEmail);

// ========== T26 ========== Метод every() ==========
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// ========== T27 ========== Задача. Все ли пользователи активны ==========
// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//    return users.every(user => user.isActive);
// };
// // Пиши код выше этой строки
// console.log(isEveryUserActive);

// ========== T27 ========== Метод some() ==========
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);

// ========== T27 ========== Задача. Есть ли активные пользователи ==========
// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//    return users.some(user => user.isActive);
// };
// // Пиши код выше этой строки
// console.log(isAnyUserActive);

// ========== T30 ========== Метод reduce() ==========
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce(((previousValue, number) => previousValue +  number), 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);
// console.log(averagePlayTime);

// ========== T31 ========== Метод reduce() и массив объектов ==========
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce(((acc, player) => acc + player.playtime / player.gamesPlayed), 0);
// console.log(totalAveragePlaytimePerGame);

// ========== T32 ========== Задача. Общий баланс пользователей ==========
// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//    return users.reduce(((acc, user) => acc + user.balance), 0);
// };
// // Пиши код выше этой строки
// console.log(calculateTotalBalance);

// ========== T33 ========== Задача. Общее количество друзей ==========
// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//    return users.reduce(((acc, user) => acc + user.friends.length), 0);
// };
// // Пиши код выше этой строки
// console.log(getTotalFriendCount);

// ========== T34 ========== Метод sort() ==========
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// ========== T35 ========== Свой порядок сортировки чисел ==========
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// ========== T36 ========== Свой порядок сортировки строк ==========
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// ========== T37 ========== Сортировка объектов ==========
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// ========== T38 ========== Задача. Сортировка по балансу ==========
// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//    return [...users].sort((a, b) => a.balance - b.balance);
// };
// // Пиши код выше этой строки
// console.log(sortByAscendingBalance);

// ========== T39 ========== Задача. Сортировка по количеству друзей ==========
// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// // Пиши код выше этой строки
// console.log(sortByDescendingFriendCount);

// // ========== T40 ========== Задача. Сортировка по имени ==========
// // Пиши код ниже этой строки
// const sortByName = users => {
//    return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// // Пиши код выше этой строки
// console.log(sortByName);

// ========== T41 ========== Цепочки методов (чейнинг, chaining) ==========
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));

// ========== T42 ========== Задача. Пользователи и друзья ==========
// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//    return [...users].sort((a, b) => a.friends.length - b.friends.length)
//      .filter((user, index, arr) => arr.indexOf(user) === index)
//      .map(user => user.name)
// };
// // Пиши код выше этой строки
// console.log(getNamesSortedByFriendCount);

// ========== T43 ========== Задача. Имена друзей ==========
// // Пиши код ниже этой строки
// const getSortedFriends = users => {
//    return [...users].flatMap(user => user.friends).filter((uniqueName, ind, arr) => arr.indexOf(uniqueName) === ind).sort((firstName, secondName) => firstName.localeCompare(secondName));
// };
// // Пиши код выше этой строки
// console.log(getSortedFriends);

// ========== T44 ========== Задача. Общий баланс ==========
// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
   return [...users]
      .filter((user) => user.gender === gender)
      .map((user) => user.balance)
      .reduce((previousValue, value) => (previousValue += value), 0);
};
// Пиши код выше этой строки
console.log(getTotalBalanceByGender);
