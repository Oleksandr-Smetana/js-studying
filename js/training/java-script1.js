// ===== LECTION 1 =====

const a = 5;
console.log(a);

const yearOfBirth = 2006;
console.log(yearOfBirth);
console.log(typeof yearOfBirth);

// let age;
// console.log(age);

// let age;
// age = 8;
// console.log(age);

const b = null;
console.log(typeof b);

let text = 'Hello!'
console.log(typeof text);
console.log('Introdution: ', text);

const e = false;
console.log(typeof e);

// alert(age);

// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);

let v = 20;
v -= 5;
console.log(v);

const valA = '8';
console.log(Number(valA));

console.log(Math.random() * (10 - 1) + 1);

// const message = 'Welcome to Bahamas!';
// console.log(message.indexOf('to'));
// console.log(message.includes('welcome'));

const name = 'Mango';
const age = 2;
const mood = 'happy';

const message =
  'My name is ' + name + ", I'm " + age + ' years old and ' + mood + '.';
console.log(message);

const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;
console.log(sameMessage);

console.log(`Результат сложения равен ${2 + 2}.`);

let counter = 0;
while (counter < 10) {
  console.log('counter: ', counter);
  counter += 1;
}

let clientCounter = 18;
const maxClients = 25;
while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

// let password = '';
// do {
//   password = prompt('Введите пароль длиннее 4-х символов');
// } while (password.length < 5);
// console.log('Ввели пароль: ', password);

const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

for (let i = 0; i < 10; i += 1) {
  if (i === 5) {
    console.log('Дійшли до 5-ї ітерації, перериваємо цикл!');
    break;
  }
}

const number = 10;
for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}