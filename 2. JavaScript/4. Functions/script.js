// 1. *Rəqəmləri Cəmləyən Funksiya*
//    - İstifadəçinin daxil etdiyi ədədin rəqəmlərinin cəmini hesablayan funksiya yazın.
//    - Nümunə: 234 üçün nəticə 2+3+4=9 olmalıdır.

const sumArrow = (a, b, c) => a + b + c;

console.log(sumArrow(2, 3, 4));

// 2. *Sözləri Tərsinə Çevirən Funksiya*
//    - Verilmiş mətni tərsinə çevirən funksiya yazın.
//    - Nümunə: "Salam Dünya" → "aynüD malaS"

const wordReverse = function (str) {
  return str.split("").reverse().join("");
};

const sentence = wordReverse("Salam Dünya");
console.log(sentence);

// 3. *Ədədin Sadə Olub-Olmadığını Yoxlayan Funksiya*
//    - Verilmiş ədədin sadə ədəd olub-olmadığını müəyyən edən funksiya yazın.
//    - Sadə ədəd yalnız özünə və 1-ə bölünən ədəddir.

function findSimplNum(num) {
  if (num < 2) return "Bu ədəd sadə deyil";
  if (num === 2) return "Bu ədəd sadədir";

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return "Ədəd sadə deyil";
  }

  return "Ədəd sadədir";
}

const simpleNum = findSimplNum(6);
console.log(simpleNum);

// 4. *Temperatur Çeviricisi*
//    - Selsi və Fahrenheit arasında temperatur çevirmələri edən funksiya yazın.
//    - Funksiya həm C→F, həm də F→C çevirmələrini edə bilməlidir.

function convertTemperature(value, scale) {
  let result;

  if (scale === "CtoF") {
    result = (value * 9) / 5 + 32; // c -> f
  } else if (scale === "FtoC") {
    result = ((value - 32) * 5) / 9; // f -> c
  } else {
    return "Invalid type";
  }

  return result;
}
console.log(convertTemperature(100, "CtoF")); // 212
console.log(convertTemperature(32, "FtoC")); // 0
console.log(convertTemperature(0, "CtoF")); // 32
console.log(convertTemperature(100, "FtoC")); // 37.78
console.log(convertTemperature(25, "CtoF")); // 77
console.log(convertTemperature(98.6, "FtoC")); // 37
console.log(convertTemperature(25, "Invalid")); // Invalid type

// 5. *Palindrom Yoxlayıcısı*
//    - Verilmiş sözün və ya cümlənin palindrom olub-olmadığını yoxlayan funksiya yazın.
//    - Palindrom soldan sağa və sağdan sola eyni oxunan mətndir (məs., "ana", "kələk").
function palindromFunc(str) {
  let reversedStr = str.split("").reverse().join("").trim().toLowerCase();

  if (str === reversedStr) {
    return "Palindromdur";
  } else {
    return "Palindrom deyil";
  }
}

console.log(palindromFunc("ana"));
console.log(palindromFunc("mother"));

// ## Orta Səviyyə Tapşırıqları

// 1. *Sayğac Fabrik Funksiyası*
//    - Hər çağırıldığında artırılan dəyəri qaytaran bir sayğac funksiyası yazın.
//    - Funksiya closure (qapanma) prinsipindən istifadə etməlidir.
const counterSum = function () {
  let counter = 1;

  return function innerFn() {
    return counter++;
  };
};
const myCounter = counterSum();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

// 2. *Massiv Filtrasiya Funksiyası*
//    - Array.filter() metodundan istifadə etmədən, massivi filtrləyən öz funksiyaızı yazın.
//    - Funksiya bir massiv və filtrasiya funksiyası qəbul etməli və şərtə uyğun elementlərdən ibarət yeni massiv qaytarmalıdır.

const filterFunc = function (arr, call) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (call(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterArr = filterFunc(numbers, function (num) {
  return num % 2 === 0;
});
console.log(filterArr);

// 3. *Debounce Funksiyası*
//    - Verilmiş funksiyanı davamlı çağırışlardan qoruyan bir debounce funksiyası yazın.
//    - Funksiya yalnız son çağırışdan sonra müəyyən vaxt keçdikdə icra olunmalıdır.

// function debounce(fn, delay) {
//   // Kodunuzu buraya yazın
// }

// 4. *Dərin Klonlama Funksiyası*
//    - Obyekti və ya massivi dərin klonlayan funksiya yazın.
//    - JSON.stringify və JSON.parse istifadə etmədən yazın.

// 5. *Valyuta Formatı Funksiyası*
//    - Ədədi valyuta formatına çevirən funksiya yazın.
//    - Nümunə: 1234.56 → "1,234.56 ₼"
//    - Müxtəlif valyutalar və formatlar üçün parametrlər əlavə edin.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pure Function
// 1.
function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); // 8
console.log(add(10, -2)); // 8

// 2.
function sumArray(numbers) {
  return numbers.length ? numbers.reduce((a, b) => a + b, 0) : 0;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([10, 20, 30])); // 60
// 3.
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
////////////////////////////////////////////////
// First-Class Functions
// 1.  Be stored in a variable
// Burada function expression istifadə edərək add funksiyasını yaz
const add1 = function (a, b) {
  return a + b;
};

console.log(add1(5, 7)); // 12
console.log(add1(10, -2)); // 8
// 2. Be passed as arguments to functions
function getLength(name) {
  return name.length;
  // Burada adı alıb uzunluğunu qaytaran funksiya yaz
}

function processString(func, name) {
  return func(name);
}

console.log(processString(getLength, "Elvin")); // 5
console.log(processString(getLength, "Leyla")); // 5
// 3.  Be returned by functions
function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
  // Burada funksiya qaytaran bir funksiya yaz
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12
// 4. Be stored in some data structure
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,

  // Burada obyektin daxilində toplama, çıxma, vurma və bölmə metodları yaz
};

console.log(calculator.add(10, 5)); // 15
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(10, 5)); // 50
console.log(calculator.divide(10, 5)); // 2
// 5. Hold their own properties and methods
function greetUser(name) {
  return `Salam ${name}`;
  // Burada istifadəçiyə salam verən funksiya yaz
}

// Funksiyaya dil property-si əlavə et
greetUser.language = "Azərbaijan";
console.log(greetUser("Elvin")); // Salam, Elvin!
console.log(greetUser.language); // Azerbaijani
//////////////////////////////////////////////////////////
// Higher-Order Functions | Currying

// Higher-Order Functions
//1) Bir Higher-Order Function yaz ki, array-in elementlərinə bir əməliyyat tətbiq etsin. Əməliyyat funksiyasını parametr kimi qəbul etsin.

function modifyArray(arr, operation) {
  return arr.map(operation);
}

console.log(modifyArray([1, 2, 3], (num) => num * 2)); // [2, 4, 6]
console.log(modifyArray([10, 20, 30], (num) => num - 5)); // [5, 15, 25]
// 2) Bir Higher-Order Function yaz ki, iki ədəd arasındakı əməliyyatı qəbul etsin və həmin əməliyyatı icra edən funksiya qaytarsın.

function createOperation(operation) {
  return function (a, b) {
    return operation(a, b);
  };
  // Burada kodu yaz
}

const add2 = createOperation((a, b) => a + b);
const multiply = createOperation((a, b) => a * b);

console.log(add2(5, 10)); // 15
console.log(multiply(3, 4)); // 12
//3. Bir Higher-Order Function yaz ki, funksiyanı yalnız bir dəfə çağırmağa icazə versin (Yəni, ilk çağırışda işləsin, sonra işləməsin).
function once(func) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      return func();
    }
  };
  // Burada kodu yaz
}

const sayHello = once(() => console.log("Salam, dünya!"));

sayHello(); // Salam, dünya!
sayHello(); // İşləməməlidir!
sayHello(); // İşləməməlidir!
/////////////////
//Currying
// 📝 Task 1:
// Bir Curried Function yaz ki, üç parametr qəbul etsin və onların cəmini qaytarsın.
const sum = (a) => (b) => (c) => a + b + c;

console.log(sum(1)(2)(3)); // 6
console.log(sum(5)(10)(15)); // 30
///
// 📝 Task 2:
// Bir Curried Function yaz ki, istifadəçiyə fərqli dillərdə salam versin.
function greet(language) {
  return function (name) {
    const greetSecond = {
      az: "Salam",
      en: "Hello",
      es: "Hola",
    };
    const greeting = greetSecond[language] || "Hello";
    return `${greeting}, ${name}`;
  };
  // Burada kodu yaz
}

console.log(greet("az")("Elvin")); // "Salam, Elvin!"
console.log(greet("en")("Leyla")); // "Hello, Leyla!"
console.log(greet("es")("Mehmet")); // "Hola, Mehmet!"
////
//3. Bir Curried Function yaz ki, istifadəçidən giriş məlumatı alsın və giriş məlumatını təsdiqləmək üçün bir funksiya qaytarsın.

function authenticate(role) {
  return function (isAuthenticated) {
    if (role === "admin") {
      return isAuthenticated
        ? "Admin icazəsi təsdiqləndi!"
        : "Admin icazəsi rədd edildi!";
    } else if (role === "user") {
      return isAuthenticated
        ? "User icazəsi təsdiqləndi!"
        : "User icazəsi rədd edildi!";
    } else {
      return "Bilinməyən rol!";
    }
  };
}

const adminAuth = authenticate("admin");
console.log(adminAuth(true)); // "Admin icazəsi təsdiqləndi!"
console.log(adminAuth(false)); // "Admin icazəsi rədd edildi!"

const userAuth = authenticate("user");
console.log(userAuth(true)); // "User icazəsi təsdiqləndi!"
console.log(userAuth(false)); // "User icazəsi rədd edildi!"

console.log(userAuth(true)); // "User icazəsi təsdiqləndi!"
console.log(userAuth(false)); // "User icazəsi rədd edildi!"
//////////////////////////////////////////////////////////////////////
// Generator Function | Lazy Evaluation | State Machine
// Generator Function
// ✅ Tapşırıq: Bir generator funksiyası yaz ki, hər çağırışda növbəti Fibonacci ədədini qaytarsın.

function* fibonacciGenerator() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b]; // Fibonacci hesablaması
  }
}

const fib = fibonacciGenerator();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5

/////////////////////////////////
// Lazy Evaluation
// ✅ Tapşırıq: Bir funksiyanı "lazy" şəkildə icra edən bir generator funksiyası yaz. Bu funksiya yalnız lazım olduqda yeni dəyərlər yaratmalıdır.

function* lazyRange(num) {
  let calc = 0;

  while (calc < num) {
    yield calc++;
  }
}

const lazyNums = lazyRange(5);
console.log(lazyNums.next().value); // 0
console.log(lazyNums.next().value); // 1
console.log(lazyNums.next().value); // 2
console.log(lazyNums.next().value); // 3
console.log(lazyNums.next().value); // 4
//////////////////////////////////
// State Machine
// ✅ Tapşırıq: Bir state machine generatoru yaz ki, bir lampanın ON 🔆 və OFF 💡 vəziyyətlərini idarə etsin.

function* lampStateMachine() {
  while (true) {
    yield "Lamp is OFF";
    yield "Lamp is ON";
  }
}
const lamp = lampStateMachine();

console.log(lamp.next().value); // "Lamp is OFF"
console.log(lamp.next().value); // "Lamp is ON"
console.log(lamp.next().value); // "Lamp is OFF"
console.log(lamp.next().value); // "Lamp is ON"

//////////////////////////////////
// Recursive Functions
/*
✅ Task: Faktorial hesablayan rekursiv funksiya yazın

Tələblər:

Bir funksiya yazın ki, parametr olaraq bir tam ədəd alsın.

Funksiya bu ədədin faktorialını hesablasın.

Faktorialın tərifi:

n! = n * (n-1) * (n-2) * ... * 1

0! = 1 (base case)
*/

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));

// Buna aid bir neçə task yaz
////////////////////////////////////////////////////////////
// İİFE(İmmediately İnvoked Function Expressions) Functions

(function () {
  const userName = "John";
  const age = 26;
  console.log(`Hi, my name is ${userName} and i am ${age} years old`);
})();
