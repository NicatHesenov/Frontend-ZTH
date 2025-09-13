// Prototypin içərisində iki şey var: constructor və __proto__ biz nə vaxt animalın yeni obyektini yaratsaq(new Animal()) animalın prototypenin içərisindəki( function Animal(){ }), constructor işə düşür{ constructor: f Animal(), __proto__: Object.prototype}, və yeni bir obyekt yaranır(const dog), daha sonra avtomatik olaraq dogun içərisinə { constructor: f Animal(), __proto__: Object.prototype} bu __proto__ propertisi əlavə olunur ona görə nə vaxt dog.__proto__ consola versək animalın (function Animal) prototypeni verəcək. 2:26

// ✅ 1. __proto__ Üçün 3 Task
// 1️⃣ Sadə Obyekt Zənciri Qur

// İki obyekt yarat və birinin `__proto__`-sunu digərinə bağla
// Daha sonra bir property-yə bu zəncirdən istifadə edərək çıxış et

const Animal = {
  name: "dog",
};

const dog = Object.create(Animal);
console.log(dog.__proto__.name);

// 2️⃣ Zəncirdə Property Override Et

// Parent obyektində bir property təyin et
// Child obyektində həmin property-ni dəyiş və nəticəni müşahidə et

Animal.legs = 4;
dog.legs = 3;
console.log(dog.legs);

console.log(dog.__proto__.legs);

///////////
// 3️⃣ Dərin Zəncir Yarat

// Üç səviyyəli `__proto__` zənciri yarat (grandparent → parent → child)
// Child vasitəsilə grandparent property-nə çıxış et

const grandparent = Object.create(dog);

console.log(grandparent.__proto__.__proto__.name);
///////////////////////////////////////////////
// ✅ 2. prototype Üçün 2 Task
// 1️⃣ Constructor Funksiya Yarat və prototype İlə Metod Əlavə Et

// Bir constructor function yaz (məsələn, Car)
// `Car.prototype` üzərindən `drive` adlı metod əlavə et və obyektlərdə test et
function Car() {}
Car.prototype.drive = function () {
  console.log("Nijat");
};

const newCar = new Car();

console.log(newCar.drive());

// 2️⃣ Array və String Tipinin prototype-nə Öz Metodunu Əlavə Et

// Məsələn, `Array.prototype.myPush` və ya `String.prototype.reverse` metodu yarat
// Bu metodu test et və nəticəyə bax

Array.prototype.myPush = function (item) {
  this.item = item;
};

const arr = [1, 2, 3];
arr.myPush(4);
console.log(arr);
///////////////////////////////////////////
// ✅ 3. new Üçün 3 Task
// 1️⃣ Constructor Function ilə Obyekt Yarat

// `function Person(name)` şəklində bir funksiya yaz və `new Person("Ali")` ilə obyekt yarat
// İçində `this.name` təyin et və konsola çıxar

function Person(name) {
  this.name = name;
  console.log(this.name);
}

const ali = new Person("Ali");

console.log(ali.name);

// 2️⃣ new Olmadan Çağır, Fərqi Gör

// Constructor funksiyanı həm `new` ilə, həm `new`-siz çağır
// Fərqli nəticəni müşahidə et və səbəbini anla

function Person(name) {
  this.name = name;
  console.log(this.name);
}

const p1 = new Person("Ali");
Person("Mehdi");
///////////////////////////////////////////////
// .setPrototypeOf() və .getPrototypeOf()
// ✅ 1. Object.setPrototypeOf() üçün Task
// 🎯 Tapşırıq:
// Aşağıdakıları et:

// İki obyekt yarat: animal və dog.

// dog obyektinə animal obyektini prototype olaraq təyin et.

// dog obyektindən animal-a aid olan property-ə çıxış et.

const Animals = { id: 10 };

const dogs = {};
Object.setPrototypeOf(dogs, Animals);
console.log(dogs.id);

// ✅ 2. Object.getPrototypeOf() üçün Task
// 🎯 Tapşırıq:
// Bir obyekt yarat: car.

// Obyektin prototype-nin nə olduğunu Object.getPrototypeOf() ilə yoxla.

// Əgər car başqa bir obyektin prototipinə bağlıdırsa, onu konsola çıxar.

////////////////////////////////
const Cars = { brand: "BMW" };
const blackCar = Object.create(Cars);
console.log(Object.getPrototypeOf(blackCar));

function pangramFn(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerStr = str.toLowerCase();

  for (let letter of alphabet) {
    if (!lowerStr.includes(letter)) {
      return false;
    }

    return true;
  }
}

console.log(pangramFn("The quick brown fox jumps over the lazy dog."));
