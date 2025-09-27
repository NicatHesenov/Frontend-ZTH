// LAB:6 TASK
// 20 ədəd algoritm verilib. Hər biri algoritmi həll edərkən funksiyadan istifadə etməliyik.
// 1.
// Array-dakı bütün ədədləri 2-yə vur və yeni array qaytar.
// [1, 2, 3, 4] → [2, 4, 6, 8]

function funcMap(arr) {
  let arrMap = arr.map((item) => item * 2);

  return arrMap;
}

console.log(funcMap([1, 2, 3, 4]));
/////////////////////////////////////////////////////////////////////////
// 2.
// Array-dan yalnız cüt ədədləri seç.
// [1, 2, 3, 4, 5, 6] → [2, 4, 6]

const funFilter = function (arr) {
  let arrFilter = arr.filter((item) => item % 2 === 0);

  return arrFilter;
};
console.log(funFilter([1, 2, 3, 4, 5, 6]));
//////////////////////////////////////////////////////////////////////////////////
// 3.
// Array-da mənfi ədəd olub-olmadığını yoxla.
// [1, 3, -2, 5] → true

const funcSome = (arr) => arr.some((item) => item < 0);
console.log(funcSome([1, 3, -2, 5]));

//////////////////////////////////////////////////////////////////////////////////
// 4.
// Bütün ədədlərin müsbət olub-olmadığını yoxla.
// [2, 4, 6] → true
const funcEvery = (arr) => arr.every((item) => item > 0);
console.log(funcEvery([1, 3, -2, 5]));

//////////////////////////////////////////////////////////////////////////////////
// 5.
// Array-dakı ilk 10-dan böyük ədədi tap.
// [3, 7, 15, 20] → 15
const funcFind = (arr) => arr.find((item) => item > 10);
console.log(funcFind([3, 7, 15, 20]));

//////////////////////////////////////////////////////////////////////////////////
// 6.
// Array-da verilmiş sözü axtar.
// ["js", "html", "css"], "html" → true
const funcIncludes = (arr) => arr.includes("html");
console.log(funcIncludes(["js", "html", "css"]));
//////////////////////////////////////////////////////////////////////////////////
// 7.
// Array-ı tərsinə çevir.
// [1, 2, 3, 4] → [4, 3, 2, 1]
const funcReverse = (arr) => arr.reverse();
console.log(funcReverse([1, 2, 3, 4]));
//////////////////////////////////////////////////////////////////////////////////
// 8.
// Ədədləri artan sıraya düz.
// [5, 1, 8, 3] → [1, 3, 5, 8]
const funcSort = (arr) => arr.sort((a, b) => a - b);
console.log(funcSort([5, 1, 8, 3]));

//////////////////////////////////////////////////////////////////////////////////
// 9.
// Array-dakı bütün sözləri böyük hərflərə çevir.
// ["js", "html"] → ["JS", "HTML"]
const funcToUpperCase = function (arr) {
  let newArr = arr.map((item) => item.toUpperCase());

  return newArr;
};
console.log(funcToUpperCase(["js", "html"]));
//////////////////////////////////////////////////////////////////////////////////
// 10.
// Array-dakı yalnız 5 hərfdən uzun sözləri seç.
// ["apple", "banana", "js"] → ["banana"]

const funcFilter = (arr) => arr.filter((item) => item.length > 5);
console.log(funcFilter(["apple", "banana", "js"]));

//////////////////////////////////////////////////////////////////////////////////
// 11.
// Array-da “JavaScript” sözünün olub-olmadığını yoxla.
// ["Python", "JavaScript", "C++"] → true
const funcİnc = (arr) => arr.includes("JavaScript");

console.log(funcİnc(["Python", "JavaScript", "C++"]));

//////////////////////////////////////////////////////////////////////////////////
// 12.
// Array-dakı bütün sözlərin yalnız hərflərdən ibarət olub-olmadığını yoxla.
// ["hello", "world"] → true
const funcEvry = (arr) => arr.every((item) => /^[A-Za-z]+$/.test(item));

console.log(funcEvry(["hello", "world"]));

//////////////////////////////////////////////////////////////////////////////////
// 13.
// Array-dakı ilk tək ədədi tap.
// [2, 4, 7, 8] → 7
const funcFnd = function (arr) {
  let newArr = arr.find((item) => item % 2 !== 0);
  return newArr;
};

console.log(funcFnd([2, 4, 7, 8]));

//////////////////////////////////////////////////////////////////////////////////
// 14.
// Array-dakı bütün ədədləri string-ə çevir.
// [1, 2, 3] → ["1", "2", "3"]
function convertString(arr) {
  let newArr = arr.map((item) => item.toString());

  return newArr;
}

console.log(convertString([1, 2, 3]));

//////////////////////////////////////////////////////////////////////////////////
// 15.
// Array-dan null və undefined dəyərləri sil.
// [1, null, 2, undefined, 3] → [1, 2, 3]
function funcRemove(arr) {
  let newArr = arr.filter((item) => item !== null && item !== undefined);

  return newArr;
}

console.log(funcRemove([1, null, 2, undefined, 3]));

//////////////////////////////////////////////////////////////////////////////////
// 16.
// [{name:"Amil",age:17},{name:"Ramil",age:20},{name:"Aysel",age:25}] → ["Ramil","Aysel"]
// ["Ramil", "Aysel"]

const funcString = (arr) =>
  arr.filter((item) => item.age > 18).map((item) => item.name);

console.log(
  funcString([
    { name: "Amil", age: 17 },
    { name: "Ramil", age: 20 },
    { name: "Aysel", age: 25 },
  ])
);

//////////////////////////////////////////////////////////////////////////////////
// 17.
// Array-dan ən böyük 3 ədədi tap.
// [10, 3, 45, 6, 22, 100] → [100, 45, 22]
const fncFindBigNum = (arr) => {
  let newArr = arr.sort((a, b) => b - a).slice(0, 3);

  return newArr;
};
console.log(fncFindBigNum([10, 3, 45, 6, 22, 100]));

//////////////////////////////////////////////////////////////////////////////////
// 18.
// Array-dakı bütün sözləri böyük hərfə çevir və yalnız 5 hərfdən uzun olanları saxla.
// ["apple","hi","banana"] → ["APPLE","BANANA"]

const funcConvert = function (arr) {
  let newArr = arr
    .map((item) => item.toUpperCase())
    .filter((item) => item.length >= 5);

  return newArr;
};

console.log(funcConvert(["apple", "hi", "banana"]));
//////////////////////////////////////////////////////////////////////////////////
// 19.
// Array-dakı ədədləri artan sıraya düz, yalnız cütləri saxla.
// [5,2,8,1,4] → [2,4,8]

const fncSort = function (arr) {
  let newArr = arr.sort((a, b) => a - b).filter((item) => item % 2 === 0);

  return newArr;
};

console.log(fncSort([5, 2, 8, 1, 4]));
//////////////////////////////////////////////////////////////////////////////////
// 20. Array-dakı obyektlərdən active:true olanları seç və adlarını çıxar.

// [{name:"A",active:true},{name:"B",active:false},{name:"C",active:true}] → ["A","C"]
// [{name:"A",active:true},{name:"B",active:false},{name:"C",active:true}] → ["A","C"]
const fncFilterAndMap = function (arr) {
  let newArr = arr
    .filter((item) => item.active !== false)
    .map((item) => item.name);

  return newArr;
};

console.log(
  fncFilterAndMap([
    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true },
  ])
);
/////////////////////////////////////////////////////////////////

const sumSalaries = (obj) => {
  let sum = 0;
  for (const salaries of Object.values(obj)) {
    sum += salaries;
  }

  return sum;
};

console.log(
  sumSalaries({
    John: 100,
    Pete: 300,
    Mary: 250,
  })
);
