// TASK: 6
// ## 1. Dəyişənlər və Tip Çevirmələri

// ### Tapşırıq 1.1: Tip Çevirmələri

// // Verilmiş dəyişənləri müvafiq tiplərə çevirin və nəticəni yoxlayın
let numString = Number("42");
console.log(numString);

let boolString = !!"true";
console.log(boolString);

let mixedArray = ["123", "456", "789"];

let numArr = mixedArray.map((item) => Number(item));
console.log(numArr);

let nullValue = null;
let nullBoolean = Boolean(nullValue);
console.log(nullBoolean);

// // Tələb olunan çevirmələr:
// // 1. numString -> number
// // 2. boolString -> boolean
// // 3. mixedArray elementlərini number tipinə çevirin
// // 4. nullValue-nu boolean-a çevirin və nəticəni izah edin
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ### Tapşırıq 1.2: Tip Yoxlaması
// // Verilmiş dəyişənlərin tiplərini müəyyən edin
let sample1 = NaN;
console.log(typeof sample1);

let sample2 = [1, 2, 3];
console.log(sample2 instanceof Array);

let sample3 = "";
console.log(typeof sample3);

let sample4 = 0;
console.log(typeof sample4);

let sample5 = { name: "John" };
console.log(sample5 instanceof Object);

let sample6 = [1, 2, 3];
console.log(Array.isArray(sample6));

// // Hər bir dəyişən üçün:
// // 1. typeof operatorundan istifadə edin
// // 2. instanceof ilə yoxlayın (array və obyektlər üçün)
// // 3. Array.isArray() metodundan istifadə edin (array-lər üçün)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ## 2. String Metodları

// ### Tapşırıq 2.1: Mətn Manipulyasiyası
let text = "   JavaScript is awesome   ";
let stringText = text
  .trim()
  .replaceAll("is", "was")
  .toLocaleUpperCase()
  .split(" ");

console.log(stringText);
console.log(stringText.length);

// // Tələb olunan əməliyyatlar:
// // 1. Mətndəki boşluqları silin
// // 2. Mətni böyük hərflərə çevirin
// // 3. "is" sözünü "was" ilə əvəz edin
// // 4. Mətni sözlərə ayırın və array kimi saxlayın
// // 5. Mətnin uzunluğunu tapın
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ### Tapşırıq 2.2: Şablon Yaratma
// // Verilmiş məlumatlardan istifadə edərək şablon yaradın
let user = {
  firstName: "Ali",
  lastName: "Məmmədov",
  age: 25,
  email: "ali@example.com",
};
console.log(
  `Hörmətli${user.firstName} ${user.lastName}, sizin ${
    user.age
  } yaşınız var  ${user.email.split("@")}`
);

// // Template literal-dan istifadə edərək:
// // 1. "Hörmətli {tam_ad}, sizin {yaş} yaşınız var." formatında mətn yaradın
// // 2. İstifadəçi haqqında məlumatları cədvəl formasında göstərin
// // 3. Email ünvanını @ simvoluna görə ayırın
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ## 3. Array Metodları

// ### Tapşırıq 3.1: Array Əməliyyatları
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = numbers
  .filter((item) => item % 2 === 0)
  .map((item) => item ** 3)
  .reduce((a, b) => a + b, 0);
console.log(num);

let fruits = ["alma", "armud", "banan", "gilas", "üzüm"];
let fruit = fruits.sort();
let addFruit = fruits.push("zoğal");
let addFruitFirst = fruits.unshift("ananas");
console.log(addFruitFirst);
let removeFruitFirst = fruits.shift();
console.log(removeFruitFirst);

let removeFruit = fruits.pop();
console.log(fruit);
console.log(addFruit);
console.log(removeFruit);

// // Tələb olunan əməliyyatlar:
// // 1. Cüt ədədləri filter() ilə tapın
// // 2. Hər ədədin kubunu map() ilə hesablayın
// // 3. Ədədlərin cəmini reduce() ilə tapın
// // 4. Meyvələri əlifba sırası ilə düzün
// // 5. Array-ə yeni elementlər əlavə edin və silin (push, pop, shift, unshift)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // ### Tapşırıq 3.2: Array-lərlə Mürəkkəb Əməliyyatlar
let students = [
  { id: 1, name: "Aygün", grades: [85, 90, 92] },
  { id: 2, name: "Elçin", grades: [75, 85, 88] },
  { id: 3, name: "Nigar", grades: [95, 88, 91] },
  { id: 4, name: "Orxan", grades: [70, 65, 72] },
];

const funcStdudentİnfo = (arr) => {
  let studentsWithAvg = arr
    .map((item) => {
      let avg = item.grades.reduce((a, b) => a + b, 0) / item.grades.length;
      return { ...item, avg };
    })
    .filter((item) => item.avg > 50)
    .sort((a, b) => b.avg - a.avg)
    .reduce((a, b) => a + b.avg, 0);

  return studentsWithAvg;
};

console.log(funcStdudentİnfo(students));

// // // Tələb olunan əməliyyatlar:
// // // 1. Hər tələbənin orta qiymətini hesablayın
// // // 2. 85-dən yuxarı orta qiyməti olan tələbələri tapın
// // // 3. Tələbələri orta qiymətə görə çoxdan aza düzün
// // // 4. Bütün tələbələrin ümumi orta qiymətini tapın
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ## 4. Funksiyalar

// ### Tapşırıq 4.1: Funksiya Növləri
// // Aşağıdakı funksiyaları yazın:
// // 1. Adi funksiya - faktorial hesablayan
function calculateFactorial(n) {
  if (n < 0) {
    return "It is not factorial";
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(calculateFactorial(5));
console.log(calculateFactorial(0));
console.log(calculateFactorial(-5));

// // 2. Arrow function - ədədin kvadratını qaytaran
const square = (num) => {
  let square = num * num;
  return square;
};
console.log(square(2));
console.log(square(6));

// // 3. Higher-order function - array-i filter edən funksiya qəbul edən və tətbiq edən
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function filterArray(arr, filterFn) {
  let result = [];

  for (let element of arr) {
    if (filterFn(element)) {
      result.push(element);
    }
  }

  return result;
}

let newHighOrderFunction = filterArray(nums, (item) => item % 2 === 0);
console.log(newHighOrderFunction);

// ## 4. Obyektlər
// ### Tapşırıq 4.1: Obyekt Yaratma və Metodlar

// // Bank hesabı obyekti yaradın
let bankAccount = {
  "account number": 123456789,
  "account name": "Nijat Hasanov",
  balance: 987456321,
  operations: [],
  // Properties:
  // - hesab nömrəsi
  // - sahibinin adı
  // - balans
  // - əməliyyatlar array-i

  addMoney: (item) => item.push(),
  removeMoney: function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.operations.push({ amount });
    }
  },
  checkBalance: function () {
    return this.balance;
  },
  historyOfOperation: function () {
    return this.operations;
  },
  // Metodlar:
  // - pul əlavə etmə
  // - pul çıxarma
  // - balans yoxlama
  // - əməliyyat tarixçəsi
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ## 5. Şərtlər və Dövrlər

// ### Tapşırıq 5.1: Şərtli Operatorlar
// // 1. Rəqəmin tək və ya cüt olduğunu yoxlayan funksiya
// // 2. Üç ədəddən ən böyüyünü tapan funksiya
// // 3. İlin fəslini təyin edən funksiya (ay nömrəsinə görə)
// // 4. Sadə kalkulyator (switch-case ilə)
const funcCalc = (nums) => {
  let result = [];
  for (let item of nums) {
    if (item % 2 === 0) {
      result.push(item);
    }
  }

  return result;
};
const funcBigNum = (nums) => {
  return nums.reduce((a, b) => (a > b ? a : b), nums[0]);
};

console.log(funcBigNum([5, 10, 15]));

function seasonOfYear(date) {
  let month = date.getMonth() + 1;

  if (month >= 3 && num <= 5) {
    return "Yaz";
  } else if (month >= 6 && month <= 8) {
    return "Yay";
  } else if (month >= 9 || month <= 11) {
    return "Payız";
  } else {
    return "Qış";
  }
}
console.log(seasonOfYear(new Date()));

const funCalcSwitch = (num1, calc, num2) => {
  let result = 0;
  switch (calc) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error";
      } else {
        result = num1 / num2;
      }
      break;

    default:
      break;
  }

  return result;
};

let number1 = 2;
let number2 = 2;
let operation = "+";
let result = funCalcSwitch(number1, operation, number2);
console.log(`${number1} ${operation} ${number2} = ${result}`);

// console.log(funCalcSwitch(2, "+", 2));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ### Tapşırıq 5.2: Dövrlər

const fibonacciSeries = (num) => {
  let series = [0, 1];
  for (let i = 2; i < num; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
};

console.log(fibonacciSeries(10));
// // 2. Array elementlərini tərsinə çap edən proqram (while)

const arrayReverse = (arr) => {
  let i = arr.length - 1;

  while (i >= 0) {
    console.log(arr[i]);
    i--;
  }
};

arrayReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// console.log(arrayReverse[(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)]);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 3. Sadə ədədləri tapan proqram
// Bir funuksiya yaz ki yalnız, özünə və birə bölünsün - bir sözlə sadə ədəd qaytarsın.

const funSimpleNum = (num) => {
  let simpleNum = num.filter((item) => {
    if (item < 2) return false;
    if (item === 2) return true;
    for (let i = 2; i <= Math.sqrt(item); i++) {
      if (item % i === 0) return false;
    }
    return true;
  });

  return simpleNum;
};

console.log(funSimpleNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 4. Pattern çap edən proqram (ulduzlarla üçbucaq)

const funcPattern = (lines) => {
  let result = "";
  for (let i = 1; i <= lines; i++) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    result += "\n";
  }

  return result;
};

console.log(funcPattern(5));
