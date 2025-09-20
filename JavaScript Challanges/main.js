// // function findIncludes(str, i) {
// //   for (let j = 0; j < str.length; j++) {
// //     if (i === str[j]) {
// //       console.log(true);
// //       return;
// //     }
// //   }
// //   console.log(false);
// // }

// // findIncludes("ello Worldh", "o");

// // // 1. **Stringin uzunluğunu tap**
// // // Məsələn: `"hello"` → `5`
// // const stringLength = (str) => str.length;
// // console.log(stringLength("hello"));
// // //////////////////////////////////////////////////
// // // 2. **Stringi böyük hərflərə çevir**
// // // Məsələn: `"hello"` → `"HELLO"`
// // const stringToUpperCase = (str) => str.toUpperCase();
// // console.log(stringToUpperCase("hello"));
// // //////////////////////////////////////////////////
// // // 3. **Stringi kiçik hərflərə çevir**
// // // Məsələn: `"HeLLo"` → `"hello"`
// // const stringToLowerCase = (str) => str.toLowerCase();
// // console.log(stringToLowerCase("hello"));
// // //////////////////////////////////////////////////
// // // 4. **İlk hərfi böyük yaz**
// // // Məsələn: `"python"` → `"Python"`
// // const strFirstCase = (str) => str.at(0).toUpperCase() + str.slice(1);
// // console.log(strFirstCase("python"));
// // //////////////////////////////////////////////////
// // // 5. **Stringin hərflərini alt-alta yaz**
// // // Məsələn: `"salam"` →

// // // ```
// // // s
// // // a
// // // l
// // // a
// // // m
// // // ```
// // const strWrite = function (str) {
// //   for (let i = 0; i < str.length; i++) {
// //     console.log(str[i]);
// //   }
// // };
// // strWrite("salam");
// // //////////////////////////////////////////////////
// // // 6. **Hərf sözdə neçəci indexdədir?**
// // // Məsələn: `"banana"`, `"a"` → `1` (ilk tapılan index)
// // const strIndex = (str) => str.indexOf("a");
// // console.log(strIndex("banana"));
// // //////////////////////////////////////////////////
// // // 7. **Bütün boşluqları “-” ilə əvəzlə**
// // // Məsələn: `"hello world"` → `"hello-world"`
// // function strReplece(str) {
// //   return str.replaceAll(" ", "-");
// // }
// // console.log(strReplece("hello world"));
// // //////////////////////////////////////////////////
// // // 8. **Stringin ilk və son hərfini tap**
// // // Məsələn: `"javascript"` → `"j - t"`
// // function strAt(str) {
// //   return str.at(0) + "-" + str.at(-1);
// // }
// // console.log(strAt("javascript"));
// // //////////////////////////////////////////////////
// // // 9. **Stringin son 2 hərfini qaytar**
// // // Məsələn: `"hello"` → `"lo"`
// // function strSlice(str) {
// //   return str.slice(-2);
// // }
// // console.log(strSlice("hello"));
// // //////////////////////////////////////////////////
// // // 10. **Stringin “hello” ilə başlayıb-başlamadığını yoxla**
// // // Məsələn: `"hello world"` → `true`
// // function strStartWith(str) {
// //   return str.startsWith("hello");
// // }
// // console.log(strStartWith("hello world"));
// // //////////////////////////////////////////////////
// // // 11. **Stringdə “js” sözünün olub-olmadığını yoxla**
// // // Məsələn: `"i love js"` → `true`
// // function strInclude(str) {
// //   return str.includes("js");
// // }
// // console.log(strInclude("i love js"));
// // //////////////////////////////////////////////////
// // // 12. **Stringin ilk 4 hərfini götür**
// // // Məsələn: `"javascript"` → `"java"`
// // function strSubstring(str) {
// //   return str.substring(0, 4);
// // }
// // console.log(strSubstring("javascript"));
// // //////////////////////////////////////////////////
// // // 13. **İki stringi birləşdir**
// // // Məsələn: `"hello"`, `"world"` → `"hello world"`
// // function strConcat(str) {
// //   return str.concat(" world");
// // }
// // console.log(strConcat("hello", "world"));
// // //////////////////////////////////////////////////
// // // 14. **Stringi tərsinə yaz**
// // // Məsələn: `"salam"` → `"malas"`
// // function strReverse(str) {
// //   return str.split("").reverse().join("");
// // }
// // console.log(strReverse("salam"));
// // //////////////////////////////////////////////////
// // // 15. **Verilən hərf sözdə neçə dəfə təkrarlanıb**
// // // Məsələn: `"alma"`, `"a"` → `2`
// // const strRepate = function (str) {
// //   let count = 0;
// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i] === "a") {
// //       count++;
// //     }
// //   }
// //   return count;
// // };
// // console.log(strRepate("alma"));
// // //////////////////////////////////////////////////
// // // Bonus - String palindrom olub-olmadığını yoxla -
// // // Bir söz tərsinə oxunanda da eyni qalırsa → palindromdur → nəticə true.
// // // Əgər tərsinə oxunanda dəyişirsə → palindrom deyil → nəticə false.

// // function strPalindrom(str) {
// //   if (str === str.split("").reverse().join("")) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }
// // console.log(strPalindrom("level"));

// ///////////////////////////////////////////////////////////

// // 1. Loops (while / for)

// // 1-dən 10-a qədər ədədləri for ilə ekrana yaz.
// function funcFor(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// }
// funcFor(10);

// // 1-dən 20-yə qədər cüt ədədləri while ilə yaz.
// function funcWhile(num) {
//   while (num <= 20) {
//     if (num % 2 === 0) {
//       console.log(num);
//     }
//     num++;
//   }
// }
// funcWhile(1);

// ////////////////////////////////////////////////////
// //2. Functions

// // İstifadəçidən bir ədəd al və həmin ədədin kvadratını qaytaran funksiya yaz.
// function funcSquare(num) {
//   return num ** 2;
// }
// console.log(funcSquare(2));

// // İki ədəd alıb onların cəmini qaytaran funksiya yaz.
// const funcSum = (a, b) => a + b;
// console.log(funcSum(2, 3));

// ///////////////////////////////////////////////////////
// //3. Type Conversions

// // let a = "123"; → a-nı rəqəmə çevir və 10 əlavə et.
// function funcConvert(str) {
//   return Number(str) + 10;
// }

// console.log(funcConvert("123"));

// // true-u stringə çevir.
// function funcBooleanToString(bool) {
//   return String(bool);
// }
// console.log(funcBooleanToString(true));

// ///////////////////////////////////////////////////////
// //4. Strings

// // "JavaScript" sözündə neçə hərf olduğunu tap.
// function funcStrLength(str) {
//   return str.length;
// }
// console.log(funcStrLength("JavaScript"));

// // "Hello World" sözündə "World" başlayır neçəci index-dən?

// function funcIndexOf(str) {
//   return str.indexOf("World");
// }

// console.log(funcIndexOf("Hello World"));

// ///////////////////////////////////////////////////////
// //5. Methods of primitives

// // "Salam" sözünü böyük hərflərlə yaz (toUpperCase).
// const strToUpperCase = function (str) {
//   return str.toUpperCase();
// };

// console.log(strToUpperCase("Salam"));

// // " JS " sözündə boşluqları sil.

// const strTrim = function (str) {
//   return str.trim();
// };

// console.log(strTrim(" JS "));

// ///////////////////////////////////////////////////////
// //6. Arrow functions

// // İki ədədin fərqini qaytaran arrow function yaz.
// const funcDiff = (a, b) => a - b;
// console.log(funcDiff(5, 3));

// // n ədədinin cüt olub-olmadığını yoxlayan arrow function yaz.
// const funcEven = (n) => n % 2 === 0;
// console.log(funcEven(4));

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Midle
// //1. Loops + Strings

// // "JavaScript" sözündəki hərfləri bir-bir ekrana for dövrü ilə yaz.

// function writeLetters(str) {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
// }

// writeLetters("JavaScript");

// /////////////////////////////////////////////////////////////////////

// //2. Functions + Type Conversions

// // Funksiya yaz ki, string tipində gələn “25” dəyərini rəqəmə çevirib 5 əlavə etsin.

// function convertAndAdd(str) {
//   return Number(str) + 5;
// }

// console.log(convertAndAdd("25"));

// /////////////////////////////////////////////////////////////////////
// //3. Function expressions

// // Bir function expression yaz: rəqəmin müsbət, mənfi və ya sıfır olduğunu qaytarsın.
// const checkNum = function (num) {
//   if (num > 0) {
//     return "Müsbət";
//   } else if (num < 0) {
//     return "Mənfi";
//   } else {
//     return "Sıfır";
//   }
// };
// console.log(checkNum(-5));
// console.log(checkNum(5));
// console.log(checkNum(0));

// /////////////////////////////////////////////////////////////////////
// //4. Arrow functions + Loops

// // Massivdəki ([1,2,3,4,5]) bütün ədədlərin kvadratını qaytaran arrow function yaz.
// const squareArr = (arr) => {
//   let newSum = [];
//   for (let i = 0; i < arr.length; i++) {
//     newSum.push(arr[i] ** 2);
//   }

//   return newSum;
// };

// console.log(squareArr([1, 2, 3, 4, 5]));

// /////////////////////////////////////////////////////////////////////
// //5. Strings + Methods

// // "JavaScript is fun" sözündə bütün " " (boşluqları) "-" ilə əvəz et.
// function replaceSpaces(str) {
//   return str.replaceAll(" ", "-");
// }
// console.log(replaceSpaces("JavaScript is fun"));

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Hard
// //1. Loops + Functions (qarışıq)

// // 1-dən 100-ə qədər ədədlərin cəmini tapan funksiya yaz (for istifadə et).

// function sumTo(num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumTo(100));

// /////////////////////////////////////////////////////////////////////

// //2. Strings + Loops

// // İstifadəçi "salam" daxil etsə, proqram malas (tərsinə) qaytarsın.

// const strReverse = function (str) {
//   return str.split("").reverse().join("");
// };

// console.log(strReverse("salam"));

// /////////////////////////////////////////////////////////////////////
// //3. Function expressions + Arrow functions

// // Bir function expression yaz ki, daxil edilən massivdəki ən böyük ədədi tapsın.
// const findMax = function (arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(findMax([1, 2, 3, 4, 5]));

// // Həmin funksiyanı arrow function formasında da yaz.
// const findMaxArrow = (arr) => {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// };

// console.log(findMaxArrow([1, 2, 3, 4, 10]));
// /////////////////////////////////////////////////////////////////////

// //4. Methods of primitives + Type conversions

// // İstifadəçi “123abc” yazsa, sadəcə rəqəmləri götür və number tipinə çevir.

// function extractNumbers(str) {
//   let onlyNums = str.replace(/\D/g, "");
//   return Number(onlyNums);
// }

// console.log(extractNumbers("123abc"));

// /////////////////////////////////////////////////////////////////////
// //5. Super task (hamısı qarışıq)

// // Funksiya yaz ki:

// // İstifadəçidən string qəbul etsin (məs: "Hello123World").

// // Oradakı yalnız rəqəmləri çıxartsın (123).

// // Bu rəqəmləri number tipinə çevirib 2-yə vursun.

// // Cavabı qaytarsın.

// function prossesString(str) {
//   let onlyNums = str.replace(/\D/g, "");
//   return Number(onlyNums) * 2;
// }
// console.log(prossesString("Hello123World"));
// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// function funcObject(name, surname, age, status) {
//   obj = {
//     name: name,
//     surname: surname,
//     age: age,
//     status: status === "employed" ? "işi var" : "işi yoxdur",
//   };

//   return obj;
// }

// console.log(funcObject("Əli", "Əliyev", 25, "employed"));
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Arrayin methodlarını praktika etmək üçün aşağıdakı algoritmləri yerinə yetirməliyik. Uğurlar !

// // 1. Ədədi array-in sonuna əlavə et (push)
// // // addToEnd([1,2,3], 4) → [1,2,3,4]

// function addToEnd(arr) {
//   arr.push(4);
//   return arr;
// }

// console.log(addToEnd([1, 2, 3]));
// ////////////////////////////////////////////////////
// //  2. Ədədi array-in əvvəlinə əlavə et (unshift)
// // // addToStart([2,3], 1) → [1,2,3]
// function addToStart(arr) {
//   arr.unshift(1);
//   return arr;
// }

// console.log(addToStart([2, 3]));
// ////////////////////////////////////////////////////
// //  3. Sonuncu elementi sil (pop)
// // // removeLastElement([1,2,3]) → [1,2]
// function removToEnd(arr) {
//   arr.pop();
//   return arr;
// }

// console.log(removToEnd([1, 2, 3]));
// ////////////////////////////////////////////////////
// // 4. İlk elementi sil (shift)
// // // removeFirstElement([1,2,3]) → [2,3]
// function removToStart(arr) {
//   arr.shift();
//   return arr;
// }

// console.log(removToStart([1, 2, 3]));
// ////////////////////////////////////////////////////
// //  5. Array-in müəyyən hissəsini kəs (slice)
// // // getMiddleElements([1,2,3,4,5], 1, 4) → [2,3,4]
// function funcSlice(arr) {
//   let newArr = arr.slice(1, 4);
//   return newArr;
// }

// console.log(funcSlice([1, 2, 3, 4, 5]));
// ////////////////////////////////////////////////////
// //  6. Verilən ədəd array-də varmı? (includes)
// // // containsNumber([1,2,3], 2) → true
// function funcIncludes(arr) {
//   return arr.includes(2);
// }

// console.log(funcIncludes([1, 2, 3, 4, 5]));
// ////////////////////////////////////////////////////
// //  7. Verilmiş ədədin index-i nədir? (indexOf)
// // // findIndex([1,2,3], 3) → 2
// function funcIndexOf(arr) {
//   return arr.indexOf(2);
// }

// console.log(funcIndexOf([1, 2, 3, 4, 5]));
// ////////////////////////////////////////////////////
// //  8. Eyni elementdən neçə ədəd var?
// // countOccurrences([1,2,2,3,2], 2) → 3
// function findSomeElements(arr, target) {
//   let count = 0;
//   for (let element of arr) {
//     if (element === target) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(findSomeElements([1, 2, 2, 3, 2], 2)); //
// ////////////////////////////////////////////////////
// //  9. 2 array-i birləşdir (concat)
// // // mergeArrays([1,2], [3,4]) → [1,2,3,4]
// function funcConcat(arr) {
//   return arr.concat([3, 4]);
// }

// console.log(funcConcat([1, 2]));
// ////////////////////////////////////////////////////
// //  10. String-ləri birləşdir (join)
// // // joinWithDash(["a", "b", "c"]) → "a-b-c"
// function funcJoin(arr) {
//   return arr.join("-");
// }

// console.log(funcJoin(["a", "b", "c"]));
// ////////////////////////////////////////////////////
// // 11. Elementləri tərsinə çevir (reverse)
// // // reverseArray([1,2,3]) → [3,2,1]
// function funcJoin(arr) {
//   return arr.reverse();
// }

// console.log(funcJoin([1, 2, 3]));
// ////////////////////////////////////////////////////
// // 12. Array-dəki ədədləri ikiqatla, sonda nəticə də array də qayıtmalıdır.
// // // doubleElements([1,2,3]) → [2,4,6]
// function funcDouble(arr) {
//   let newArr = [];
//   for (let element of arr) {
//     newArr.push(element * 2);
//   }
//   return newArr;
// }

// console.log(funcDouble([1, 2, 3]));
// ////////////////////////////////////////////////////
// // 13. Cüt ədədləri seç, sonda nəticə də array də qayıtmalıdır.
// //  getEvenNumbers([1,2,3,4]) → [2,4]
// function funcEvenNumbers(arr) {
//   let newArr = [];
//   for (let element of arr) {
//     if (element % 2 === 0) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// }

// console.log(funcEvenNumbers([1, 2, 3, 4]));
// ////////////////////////////////////////////////////
// // 14. Object-in property-sini dəyiş
// // // updateUserAge({name: "Ali", age: 20}, 25) → {name: "Ali", age: 25}

// function updateUserAge(name, age) {
//   let obj1 = {
//     name: name,
//     age: age,
//   };

//   return obj1;
// }

// let newObj = updateUserAge("Ali", 20);
// console.log(newObj);
// newObj.age = 25;
// console.log(newObj);

// ////////////////////////////////////////////////////
// // 15. Object-ə yeni property əlavə et
// // // addUserEmail({name: "Aysel"}, "aysel@mail.com") → {name: "Aysel", email: "aysel@mail.com"}
// function addUserEmail(name) {
//   let objEmail = {
//     name: name,
//   };

//   return objEmail;
// }

// let newObjAddEmail = addUserEmail("Aysel");
// console.log(newObjAddEmail);
// newObjAddEmail.email = "aysel@mail.com";
// console.log(newObjAddEmail);

///////////////////////////////////////////////////
// const arrSum = function (num) {
//   let sum = num
//     .filter((num) => typeof num === "number")
//     .reduce((a, b) => a + b, 0);

//   return sum;
// };

// console.log(arrSum([1, 2, "salam", 4, "salam"]));

// const funcFilter = (arr) => {
//   return arr.map((str) => str.split(" ").filter((word) => word === "test"));
// };

// console.log(funcFilter(["salam mən test almaq istəyirəm", "test çox bahadır"]));
