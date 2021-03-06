'use strict';

// ========== T1 ========== Прототип объекта и метод Object.create() ==========
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки
// console.log(child.name);
// console.log(child.age);

// ========== T2 ========== Задача. Цепочка прототипов ==========
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// ========== T3 ========== Функция-конструктор ==========
// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// const audi = new Car('Audi', 'Q3', 36000);
// const bmw = new Car('BMW', 'X5', 58900);
// const nissan = new Car('Nissan', 'Murano', 31700);

// console.log(audi);
// console.log(bmw);
// console.log(nissan);

// ========== T4 ========== Объект настроек ==========
// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// console.log(audi);
// console.log(bmw);
// console.log(nissan);

// ========== T5 ========== Свойство prototype ==========
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function() {
//   return this.price;
// };

// Car.prototype.changePrice = function(newPrice) {
//   this.price = newPrice;
// };

// console.log(Car.prototype.hasOwnProperty('getPrice'));
// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(audi.getPrice());
// audi.changePrice(35000);
// console.log(audi.getPrice());
// console.log(audi);

// ========== T6 ========== Задача. Хранилище ==========
// function Storage(items) {
//   this.items = items;
// };

// Storage.prototype.getItems = function() {
//   return this.items;
// };

// Storage.prototype.addItem = function(newItem) {
//   return this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   return this.items.splice(this.items.indexOf(item),1);
// };

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ========== T7 ========== Конструктор строк ==========
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// };

// StringBuilder.prototype.getValue = function() {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function(str) {
//   return this.value = this.value + str;
// };

// StringBuilder.prototype.padStart = function(str) {
//   return this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function(str) {
//   return this.value = str + this.value + str;
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// ========== T8 ========== Объявление класса ==========
// class Car {};
// const car = new Car();

// console.log(car);

// ========== T9 ========== Конструктор класса ==========
// class Car {
//   constructor({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   }
// }

// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// console.log(audi);
// console.log(bmw);
// console.log(nissan);

// ========== T10 ========== Методы класса ==========
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
//   getPrice() {
//     return this.price;
//   }
  
//   changePrice(newPrice) {
//     return this.price = newPrice;
//   }
// }

// console.log(Car.prototype.hasOwnProperty('getPrice'));
// const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(audi.getPrice());
// audi.changePrice(35000);
// console.log(audi.getPrice());
// console.log(audi);

// ========== T11 ========== Приватные свойства ==========
// class Car {
//   #brand;
  
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  
//   getBrand() {
//     return this.#brand;
//   }
  
//   changeBrand(newBrand) {
//     return this.#brand = newBrand;
//   }
// }

// const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// ========== T12 ========== Задача. Хранилище 2.0 ==========
// class Storage {
//   #items;
  
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   };

//   addItem(newItem) {
//     this.#items.push(newItem);
//   };

//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   };
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ========== T13 ========== Задача. Конструктор строк 2.0 ==========
// class StringBuilder {
//   #value;
  
//   constructor(baseValue) {
//     this.#value = baseValue;
//   }

//   getValue() {
//     return this.#value;
//   };

//   padEnd(str) {
//     this.#value += str;
//   };

//   padStart(str) {
//     this.#value = str + this.#value;
//   };

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   };
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// ========== T14 ========== Геттеры и сеттеры ==========
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// ========== T15 ========== Статические свойства ==========
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       return this.#price;
//     } else {
//       return this.#price = newPrice;
//     }
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ========== T16 ========== Статические методы ==========
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Внимание! Цена превышает допустимую.';
//     } else {
//       return 'Всё хорошо, цена в порядке.';
//     }
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// ========== T17 ========== Наследование классов ==========
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки

// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }

// ========== T18 ========== Конструктор дочернего класса ==========
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//   accessLevel;
    
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   };
  
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// ========== T19 ========== Методы дочернего класса ==========
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  
  blacklistedEmails = [];
  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  
  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;
    } else {
      return false;
    }
  }
  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 