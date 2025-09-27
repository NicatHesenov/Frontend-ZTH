// TASK 5: JS Practice
// 1. Bir funksiya yazirsiz o sizde array ve index qebul edir. Siz cavab olaraq arraydaki hemin indexde olan elementi geri qaytarin
// Example: myFunction([1,2,3,4,5],3) ------------------ cavab 4 qayidacaq

const returnIndex = (arr, i) => arr[i];

console.log(returnIndex([1, 2, 3, 4, 5], 3));
/////////////////////////////////////////////////////////////
// 2. Bir funksiya yazirsiz sizde array qebul edir ve hemin arraydaki ilk 3 elementi silib geri qaytarirsiz.
// Example: myFunction([1,2,3,4,5,6]) ------------------ cavab qayidacaq [4,5,6]
const funcSlice = (arr) => arr.slice(-3);
console.log(funcSlice([1, 2, 3, 4, 5, 6]));
////////////////////////////////////////////////////////////
// 3. Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array.
// Return the filtered array.
// myFunction([1,2,3], 2) ------> [1,3]
const funcFilter = (a, b) => a.filter((item) => item !== b);
console.log(funcFilter([1, 2, 3], 2));
/////////////////////////////////////////////////////////////
// 4. Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
// myFunction([1,-2,2,-4]) -----------------> [-2,-4]

const funcFilterSecond = (arr) => arr.filter((item) => item < 0);
console.log(funcFilterSecond([1, -2, 2, -4]));
/////////////////////////////////////////////////////////////
// 5. Write a function that takes an array of numbers as argument. It should return the average of the numbers.
// myFunction([10,100,40]) -----------------> 50
const func = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(func([10, 100, 40]));
