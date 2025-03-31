/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task: Verilən arraydə aşağıda qeyd olunan taspşırıqları həll etmək lazımdır.

const persons = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// **MAP**

// 1. Get the array of all names
const mapName = persons.map((item) => item.name);
console.log(mapName);
// 2. Get the array of all heights
const mapHeigt = persons.map((item) => item.height);
console.log(mapHeigt);

// 3. Get the array of objects with just name and height properties
const mapNameHeight = persons.map((item) => {
  return {
    name: item.name,
    height: item.height,
  };
});
console.log(mapNameHeight);

// 4. Get the array of all first names
const mapFirstName = persons.map((item) => item.name.split(" ")[0]);
console.log(mapFirstName);

// **FILTER**

// 1. Get characters with a mass greater than 100
const filterMass = persons.filter((item) => Number(item.mass) > 100);
console.log(filterMass);

// 2. Get characters with a height of less than 200
const filterHeight = persons.filter((item) => Number(item.height) > 200);
console.log(filterHeight);
// 3. Get all male characters
const filterGenderMale = persons.filter((item) => item.gender === "male");
console.log(filterGenderMale);
// 4. Get all female characters
const filterGenderFemale = persons.filter((item) => item.gender === "female");
console.log(filterGenderFemale);

// **SORT**

// 1. Sort by mass
const sortMass = persons.sort((a, b) => Number(a.mass) - Number(b.mass));
console.log(sortMass);

// 2. Sort by height
const sortHeight = persons.sort((a, b) => Number(a.height) - Number(b.height));
console.log(sortHeight);

// 3. Sort by name
const sortName = persons.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortName);

// 4. Sort by gender
const sortGender = persons.sort((a, b) => a.gender.localeCompare(b.gender));
console.log(sortGender);

// **EVERY**

// 1. Does every character have blue eyes?
const everyEyeColor = persons.every((item) => item.eye_color === "blue");
console.log(everyEyeColor);

// 2. Does every character have a mass of more than 40?
const everyMass = persons.every((item) => Number(item.mass) > 40);
console.log(everyMass);

// 3. Is every character shorter than 200?
const everyHeight = persons.every((item) => Number(item.height) < 200);
console.log(everyHeight);

// 4. Is every character male?
const everyGender = persons.every((item) => item.gender === "male");

// **SOME**

// 1. Is there at least one male character?
const someGender = persons.some((item) => item.gender === "male");
console.log(someGender);

// 2. Is there at least one character with blue eyes?
const someEyeColor = persons.some((item) => item.eye_color === "blue");
console.log(someEyeColor);
// 3. Is there at least one character taller than 210?
const someHeight = persons.some((item) => item.height > 210);
console.log(someHeight);
// 4. Is there at least one character that has a mass of less than 50?
const someMass = persons.some((item) => item.mass < 50);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
const styles = ["Jazz", "Blues"];
console.log(styles);

// Append “Rock-n-Roll” to the end.
styles.push("Rock-n-Roll");
console.log(styles);

// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
styles[1] = "Classic";
console.log(styles);

// Strip off the first value of the array and show it.
styles.shift("Jazz");
console.log(styles);

// Prepend Rap and Reggae to the array.
styles.unshift("Rap", "Reggae");
console.log(styles);

// Sum input numbers

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zer

// function sumInput() {
//   let numbers = [];
//   console.log(numbers);

//   while (true) {
//     let numPromt = +prompt("Enter the number", 0);

//     if (numPromt === "" || numPromt === null || isNaN(numPromt)) {
//       break;
//     }
//     numbers.push(numPromt);
//   }
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }

//   return sum;
// }
// console.log(sumInput());

///////////////////////////////////////////////////
// A maximal subarray

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

let arrInput = [1, -2, 3, 4, -9, 6];

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let currentSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];
//     if (currentSum > maxSum) {
//       maxSum = currentSum;
//     } else if (currentSum < 0) {
//       currentSum = 0;
//     }
//   }

//   return maxSum;
// }

function getMaxSubSum(arr) {
  let maxSum = 0; //max ədədi tapmaq üçün
  let currentSum = 0; //cari ədədi saxlamaq üçün

  for (let i = 0; i < arr.length; i++) {
    // arr indexi ilə mövcud ədədi toplayırıq
    currentSum += arr[i];

    // Əgər cari ədəd max ədəddən böyükdirsə, currentSum maxSuma bərabər edirik və toplam cəmini tapırıq.
    if (currentSum > maxSum) {
      maxSum = currentSum;
      // əgər cari ədəd 0 dan kiçik, yəni mənfi ədəddirsə cari ədədi sıfırlayırıq
    } else if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));

// Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str) {
  return str
    .split("-") // ilk öncə - işarəyə görə bölürük("background", "color")
    .map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1))) // word - element, i - index, əgər index sıfırdısa olduğu kimi saxla, deyilsə birinci sözün ilk hərifini böyüt və digər sözləri əlavə et(C olor = Color)
    .join(""); // Və birləşdir backgroundColor
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// Filter range
// importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// function filterRange(arrFilter, a, b) {
//   // added brackets around the expression for better readability
//   return arrFilter.filter((item) => a <= item && item <= b);
// }

// let arrFilter = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered); // 3,1 (matching values)

// alert(arr); // 5,3,8,1 (not modified)
////////////////////////////////////////////////////////////////////////////////
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

function filterRangeInPlace(arr, a, b) {
  // for dövrü
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]; // indexi vala mənimsədirik

    // remove if outside of the interval
    if (val < a || val > b) {
      // əgər val a-dan kiçik və ya b-dən böyükdürsə
      arr.splice(i, 1); //indexdən başla 1 dənəsini sil
      i--; // indexi azalt
    }
  }
}

let arrFilter = [5, 3, 8, 1];

filterRangeInPlace(arrFilter, 1, 4); // removed the numbers except from 1 to 4

console.log(arrFilter); // [3, 1]

//////////////////////////////////////////////////////////////////////////////////////////////
// Sort in decreasing order
let arrSort = [5, 2, 1, -10, 8];

console.log(arrSort.sort((a, b) => b - a));

// ... your code to sort it in decreasing order

console.log(arrSort); // 8, 5, 2, 1, -10
/////////////////////////////////////////////////////////////////////
// Copy and sort array
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arrCopySort = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
  return arr.slice().sort();
}
let sorted = copySorted(arrCopySort);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arrCopySort); // HTML, JavaScript, CSS (no changes)
//////////////////////////////////////////////////////////////////////////////////
// Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let usersMapp = [john, pete, mary];

// let namesMapp = usersMapp.map((item) => item.name);
/* ... your code */

// console.log(namesMapp); // John, Pete, Mary
/////////////////////////////////////////////////////////////////
// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// function sortByAge(users) {
//   return users.sort((a, b) => a.age - b.age);
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arrSortt = [pete, john, mary];
// console.log(sortByAge(arrSortt));

// // now: [john, mary, pete]
// console.log(arrSortt[0].name); // John
// console.log(arrSortt[1].name); // Mary
// console.log(arrSortt[2].name); // Pete
/////////////////////////////////////////////////////////////////////////////

// Shuffle an array
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

let arrShuf = [1, 2, 3];
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffle(arrShuf));

// arr = [3, 2, 1]

console.log(shuffle(arrShuf));

// arr = [2, 1, 3]
console.log(shuffle(arrShuf));

// arr = [3, 1, 2]
// ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
/////////////////////////////////////////////////////////////////////////////////

// Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length; // Burdaki prev ilkin dəyərdir(0), user.age isə elementdir, users.length isə orta ədədi tapmaq üçündür(ümumi length bölürük)
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arrGet = [john, pete, mary];

// console.log(alert(getAverageAge(arrGet))); // (25 + 30 + 29) / 3 = 28

// let arr100 = [1, 2, 3, 4];
// arr100.length = 2;

// console.log(arr100.length);
///////////////////////////////////////////////////////////
// 1. Massivdəki ən böyük və ən kiçik ədədi tapın
// Verilən massivdəki ən böyük və ən kiçik ədədi tapın
let numbersFind = [5, 12, 8, 130, 44];

function findNumber(numbersFind) {
  let numMax = Math.max(...numbersFind);
  let numMin = Math.min(...numbersFind);
  return [numMax, numMin];
}
console.log(findNumber(numbersFind));
////////////////////////////////////////////////////////
// 2. Massivdəki ədədlərin cəmini tapın
// Verilən massivdəki bütün ədədlərin cəmini tapın.
let numbersReduce = [1, 2, 3, 4, 5];
function sumNumbers(numbers) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

console.log(sumNumbers(numbersReduce));
////////////////////////////////////////////////////
// 3. Massivdəki elementlərin unikal olub-olmamasını yoxlayın
// Verilən massivdə təkrarlanan elementlər olub-olmamasını yoxlayın və əgər varsa, bu təkrarlanan elementləri çıxarın.
let numUniqs = [1, 2, 3, 3, 4, 4, 5];

function uniqNumbers(uniqNum) {
  return uniqNum.filter((item, index) => uniqNum.indexOf(item) === index);
}
console.log(uniqNumbers(numUniqs));

///////////////////////////////////////////////////////
// 4. İki massiv birləşdirmək
// İki massiv arasında birləşmə əməliyyatı aparın. Məsələn, verilmiş iki massiv birləşdirilsin:

let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];

function concatArr(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(concatArr(arrOne, arrTwo));
//////////////////////////////////
// 5. Massivdəki bir elementi tapın
// Verilən massivdə müəyyən bir elementi tapmaq üçün bir funksiya yazın. Məsələn:
// Əgər apple massivdə varsa, onu tapın və massivdə olduğu barədə məlumat verin.

let fruitsFinds = ["apple", "banana", "orange"];

let fruitFind = fruitsFinds.find((item) => item === "apple");
console.log(fruitFind);

////////////////////////////////
//  Massivin tərsini tapın
// Verilən massivdəki elementləri tərsinə çevirin və nəticəni geri qaytarın.

let numArr = [1, 2, 3, 4, 5];

let reverseArr = numArr.reverse();
console.log(reverseArr);
/////////////////////////////////////////////////////
// 7. Massivdəki müsbət ədədləri tapın
// Verilən massivdəki yalnız müsbət ədədləri tapın və yeni bir massiv qaytarın.

let numberArr = [-1, 2, -3, 4, -5];

let positivArr = numberArr.filter((item) => item > 0);

console.log(positivArr);
////////////////////////////////////////
// 1. Massivdə ən çox təkrarlanan elementi tapın
// Verilmiş massivdə ən çox neçə dəfə təkrarlanan elementi və onun neçə dəfə təkrarlandığını qaytaran funksiya yazın.

let numsArrr = [3, 7, 3, 2, 3, 8, 8, 8, 8, 2, 4, 4, 4, 4, 4, 4, 4, 4];

function findMostFrequent(arr) {
  let count = {}; // ədədlərin özünü və onların sayını saxlamaq üçün obyekt
  let maxCount = 0; // ən çox təkrarlanan ədədin sayını saxlamaq üçün
  let mostFrequentNum = null; // ən çox təkrarlanan ədədi saxlamaq üçün

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1; // Əgər yoxdursa, 1 et, varsa 1 artır, ədədlərin sayını tapmaq üçün
    if (count[num] > maxCount) {
      // əgər ədədin sayı ən çox təkrarlanan ədədin sayından böyükdürsə
      maxCount = count[num]; // ən çox təkrarlanan ədədin sayını saxla
      mostFrequentNum = num; // ən çox təkrarlanan ədədi saxla
    }
  }

  return { mostFrequentNum, maxCount }; // Ən çox təkrarlanan ədədi və onun sayını qaytar
}

console.log(findMostFrequent(numsArrr));
// { mostFrequentNum: 4, maxCount: 8 }
/////////////////////////////////////////////////
// 2. Massivdə yalnız tək ədədləri saxlayın və azalan sıraya düzün
// javascript

let numbersFilter = [10, 15, 7, 20, 3, 9, 2, 33, 12];

let oddNumbers = numbersFilter
  .filter((item) => item % 2 !== 0)
  .sort((a, b) => b - a);
console.log(oddNumbers);
///////////////////////////////////////////////////////
// 3. Massivin içindəki massivləri birləşdirin (flat)
// Daxili massivləri birləşdirən funksiya yazın.

let nestedArr = [1, [2, 3], [4, [5, 6]], 7];

let arrFlat = nestedArr.map((item) => item);
console.log(arrFlat);
