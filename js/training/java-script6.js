'use strict';

// ========== Array.prototype.forEach() ==========
// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// ========== Array.prototype.map() ==========
// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // [2, 4, 6]

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => user.name);
// console.log(names); // ["Mango", "Poly", "Ajax"]

// ========== Array.prototype.filter() ==========
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.filter(num => num > 5)); // [6, 7, 8, 9]
// console.log(numbers.filter(num => num < 5)); // [0, 1, 2, 3, 4]
// console.log(numbers.filter(num => num === 5)); // [5]

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

// ========== Array.prototype.find() ==========
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.find(num => num > 5)); // 6
// console.log(numbers.find(num => num < 5)); // 0
// console.log(numbers.find(num => num === 5)); // 5

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === '002');
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

// ========== Array.prototype.reduce() ==========
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// Пройдем по всем элементам коллекции и прибавим значения свойства likes
// к аккумулятору, начальное значение которого укажем 0.
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes); // 32

// Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// для подсчета лайков из коллекции
const countLikes = tweets =>
  tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(countLikes(tweets)); // 32

// соберем в массив все теги, которые встречаются в постах.

// Пройдем по всем элементам коллекции и добавим значения свойства tags
// к аккумулятору, начальное значение которого укажем пустым массивом [].
// На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);

// Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// для сбора тегов из коллекции
const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log(getTags(tweets));

// хорошо бы было посчитать количество уникальных тегов в массиве
// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
  console.log(acc);
};


// Начальное значение аккумулятора это пустой объект {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);

// ========== Array.prototype.sort() ==========
// const numbers = [2, 1, 4, 3, 5];
// // Отсортирует по возрастанию
// console.log('Before sort: ', numbers); // [2, 1, 4, 3, 5]
// console.log('After sort: ', numbers.sort()); // [1, 2, 3, 4, 5]

// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// // Отсортирует по алфавиту
// console.log('Before sort: ', clients); // ["Mango", "Ajax", "Poly", "Chelsey"]
// console.log('After sort: ', clients.sort()); // ["Ajax", "Chelsey", "Mango", "Poly"]

// ========== Свой порядок сортировки ==========
// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];

// const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

// console.log(users.sort(sortByActiveDays));
