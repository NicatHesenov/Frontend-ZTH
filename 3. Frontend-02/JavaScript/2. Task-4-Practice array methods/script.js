// TASK: 4 - Practice array methods
// Arrayin methodlarını praktika etmək üçün aşağıdakı algoritmləri yerinə yetirməliyik. Uğurlar !

// // 1. Ədədi array-in sonuna əlavə et (push)
// // // addToEnd([1,2,3], 4) → [1,2,3,4]
function addToEnd(arr) {
  arr.push(4);
  return arr;
}
console.log(addToEnd([1, 2, 3]));
// ////////////////////////////////////////////////////
// //  2. Ədədi array-in əvvəlinə əlavə et (unshift)
// // // addToStart([2,3], 1) → [1,2,3]
function addToStart(arr) {
  arr.unshift(1);
  return arr;
}
console.log(addToStart([2, 3]));
// ////////////////////////////////////////////////////
// //  3. Sonuncu elementi sil (pop)
// // // removeLastElement([1,2,3]) → [1,2]
function removeLastElement(arr) {
  arr.pop();
  return arr;
}
console.log(removeLastElement([1, 2, 3]));
// ////////////////////////////////////////////////////
// // 4. İlk elementi sil (shift)
// // // removeFirstElement([1,2,3]) → [2,3]
function removeFirstElement(arr) {
  arr.shift();
  return arr;
}
console.log(removeFirstElement([1, 2, 3]));
// ////////////////////////////////////////////////////
// //  5. Array-in müəyyən hissəsini kəs (slice)
// // // getMiddleElements([1,2,3,4,5], 1, 4) → [2,3,4]
function getMiddleElements(arr) {
  let newArr = arr.slice(1, 4);
  return newArr;
}
console.log(getMiddleElements([1, 2, 3, 4, 5]));
// ////////////////////////////////////////////////////
// //  6. Verilən ədəd array-də varmı? (includes)
// // // containsNumber([1,2,3], 2) → true
function containsNumber(arr) {
  return arr.includes(2);
}
console.log(containsNumber([1, 2, 3, 4, 5]));
// ////////////////////////////////////////////////////
// //  7. Verilmiş ədədin index-i nədir? (indexOf)
// // // findIndex([1,2,3], 3) → 2
function findIndex(arr) {
  return arr.indexOf(2);
}
console.log(findIndex([1, 2, 3, 4, 5]));
// ////////////////////////////////////////////////////
// //  8. Eyni elementdən neçə ədəd var?
// // countOccurrences([1,2,2,3,2], 2) → 3
function countOccurrences(arr, target) {
  let count = 0;
  for (let element of arr) {
    if (element === target) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences([1, 2, 2, 3, 2], 2));
// ////////////////////////////////////////////////////
// //  9. 2 array-i birləşdir (concat)
// // // mergeArrays([1,2], [3,4]) → [1,2,3,4]
function mergeArrays(arr) {
  return arr.concat([3, 4]);
}
console.log(mergeArrays([1, 2]));
// ////////////////////////////////////////////////////
// //  10. String-ləri birləşdir (join)
// // // joinWithDash(["a", "b", "c"]) → "a-b-c"
function joinWithDash(arr) {
  return arr.join("-");
}
console.log(joinWithDash(["a", "b", "c"]));
// ////////////////////////////////////////////////////
// // 11. Elementləri tərsinə çevir (reverse)
// // // reverseArray([1,2,3]) → [3,2,1]
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3]));
// ////////////////////////////////////////////////////
// // 12. Array-dəki ədədləri ikiqatla, sonda nəticə də array də qayıtmalıdır.
// // // doubleElements([1,2,3]) → [2,4,6]
function doubleElements(arr) {
  let newArr = [];
  for (let element of arr) {
    newArr.push(element * 2);
  }
  return newArr;
}
console.log(doubleElements([1, 2, 3]));
// ////////////////////////////////////////////////////
// // 13. Cüt ədədləri seç, sonda nəticə də array də qayıtmalıdır.
// //  getEvenNumbers([1,2,3,4]) → [2,4]
const getEvenNumbers = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    if (element % 2 === 0) newArr.push(element);
  });

  return newArr;
};
console.log(getEvenNumbers([1, 2, 3, 4]));
// ////////////////////////////////////////////////////
// // 14. Object-in property-sini dəyiş
// // // updateUserAge({name: "Ali", age: 20}, 25) → {name: "Ali", age: 25}
// 1-Cİ ÜSUL
function updateUserAge(name, age) {
  let obj1 = {
    name: name,
    age: age,
  };

  return obj1;
}

let newObj = updateUserAge("Ali", 20);
console.log(newObj);
newObj.age = 25;
console.log(newObj);
// 2-CI ÜSUL
// const updateUserAge = (obj, age) => {
//   obj.age = age;
//   return obj;
// };
// console.log(updateUserAge({ name: "Ali", age: 20 }, 25));

// ////////////////////////////////////////////////////
// // 15. Object-ə yeni property əlavə et
// // // addUserEmail({name: "Aysel"}, "aysel@mail.com") → {name: "Aysel", email: "aysel@mail.com"}

// 1-CI YOL
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
// 2-CI YOL
const addUserEmail = (obj, email) => {
  obj.email = email;
  return obj;
};

console.log(addUserEmail({ name: "Aysel" }, "aysel@mail.com"));
