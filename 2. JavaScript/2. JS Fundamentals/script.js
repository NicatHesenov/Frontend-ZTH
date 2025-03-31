/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// JS Fundamentals
// Variables
// 1. İki dəyişənin dəyərlərini dəyişin (Swap)
// İki dəyişənin dəyərlərini başqa bir dəyişən istifadə etmədən dəyişən bir funksiya yazın.

let a = 5,
  b = 10;

[a, b] = [b, a];
console.log(a, b);
///////////////////////////////////////////////////
// 2. Dəyişənlərin dəyərlərini təyin etmədən console.log-da çap edin
// Aşağıdakı kodun nəticəsini tapın və səhvi düzəldin:

console.log(nameVar);
var nameVar = "John"; //undefined (Hosting səbəbindən)
///////////////////////////////////////////////////////
// 3. Sabit dəyişənə (const) yeni dəyər verməyə çalışın
// javascript
// const age = 25;
// age = 30;
// console.log(age);

// TypeError: Assignment to constant variable.
////////////////////////////////////////////////////////
// 4. İstifadəçi adını daxil etsin və salam mesajı görsənsin
// İstifadəçidən prompt() vasitəsilə bir ad alıb, ekrana "Salam, [ad]!" yazdırın.
// 📥 Daxil edilən ad: "Elvin"
// 📤 Çıxış: "Salam, Elvin!"

// let userName = prompt("Adınızı daxil edin", "").trim();
// if (!userName) {
//   console.log("Ad daxil edilməyib!");
// } else {
//   console.log(`Salam, ${userName}`);
// }

///////////////////////////////////////////////////
// 5. Dairənin sahəsini hesablayan proqram yazın
// İstifadəçidən dairənin radiusunu soruşub, dairənin sahəsini hesablayın.

// const PI = 3.14159;
// // let r = +prompt("Dairənin radiusunu daxil edin");
// let area = PI * r * r;
// console.log(`Dairənin sahəsi:${area}`);
//////////////////////////////////////////////////////
// 6. Template literals (${}) istifadə edərək mesaj yazın
// Aşağıdakı kodu + işarəsi ilə deyil, template literals ilə (${}) yazın:

let namVar = "Aysel";
let age = 22;
console.log(`Mənim adım  ${namVar} və mənim yaşım ${age}-dir.`);
//////////////////////////////////////////////////////////////////
// 7. Dəyişənlərin tipi dəyişən proqram yazın
// javascript
let numberVar = Number("10");
console.log(typeof numberVar);
////////////////////////////////////
// 8. İstifadəçinin daxil etdiyi iki ədədin hasilini hesablayın
// İstifadəçidən iki ədəd alıb, onların hasilini (*) ekrana çıxarın.

// let num1 = +prompt("Birinci ədədi daxil edin");
// let num2 = +prompt("Birinci ədədi daxil edin");
// if (isNaN(num1) || isNaN(num2)) {
//   console.log("Xahiş olunur, yalnız ədədlər daxil edin!");
// } else {
//   console.log(`Hasil: ${num1 * num2}`);
// }

//////////////////////////////////////////////////
// 9. Verilmiş ədədi string formatına çevirin
let numVar = String(123);
console.log(typeof numVar);
////////////////////////////////////////////////////
// 10. var, let, const fərqlərini başa düşmək üçün test edin

console.log(x);
var x = 5; // hosted olunur amma undefined olaraq qalır.
// 📌 Bu kod niyə undefined qaytarır? Bəs let ilə yazsaq nə baş verər? - Hosted olduğu üçün, let ilə yazdıqda giriş yoxdur deyir.
// 💡 Səbəb: var dəyişəni hoisting zamanı undefined olur, amma let və const Temporal Dead Zone-da qalır və istifadəyə hazır olmur.
//////////////////////////////////////////////
// 1. Dəyişənləri çevirmək (let, const, var araşdırması)
// Tapşırıq:
// Aşağıdakı kod parçası işləyirmi? Əgər yoxdursa, onu düzəldin və izah edin.

// console.log(myVar);
// let myVar = 10; // ReferenceError Bu kodda ReferenceError baş verəcək, çünki let və const dəyişənləri temporal dead zone (TDZ) adlanan bir sahədə olur və təyin edilməmişdən əvvəl onlara müraciət etmək mümkün deyil.

// const myConst;
// myConst = 20; // Burada SyntaxError baş verəcək, çünki const dəyişənləri mütləq dərhal təyin edilməlidir.

var myVar2 = 5;
var myVar2 = 15;
// Səhv qaytarmayacaq amma oxunaqlığı azaldır
console.log(myVar2);
// 📌 Nə baş verir və necə düzəldə bilərik?
////////////////////////////////////////////////////
// 1. Variables (Dəyişənlər)
let nameVarr = "Nijat";
let ageVar = 26;
let isStudent = false;

console.log(
  `My name is ${nameVarr}, my age is ${ageVar} i am student ${isStudent}`
);
//////////////////////////////////////////////////
// 2. Data types (Məlumat tipləri)
let aVar = +"5";
let bVar = 10;

let totalVar = aVar + bVar;
console.log(typeof totalVar);
/////////////////////////////////////////////////
// 3. Interaction: alert, prompt, confirm
// let askName = prompt("Enter your name", "");
// alert(`Salam ${askName}`);
// console.log(confirm(askName));
///////////////////////////////////////////////////
// 4. Type Conversions (Tip çevirmələri)
// let enterNum = +prompt("Enter the number");
// if (Number.isNaN(enterNum)) {
//   console.log("This isn't number");
// } else {
//   console.log(typeof enterNum);
// }
/////////////////////////////////////////////////////////
//5. Basic operators, maths (Əsas operatorlar və riyaziyyat)
// let enterOneNum = +prompt("Enter one number", 0);
// let calcNum = prompt("Enter the calcNum", 0);
// let enterTwoNum = +prompt("Enter two number", 0);
// if (calcNum === "+") {
//   console.log(enterOneNum + enterTwoNum);
// } else if (calcNum === "-") {
//   console.log(enterOneNum - enterTwoNum);
// } else if (calcNum === "*") {
//   console.log(enterOneNum * enterTwoNum);
// } else {
//   console.log(enterOneNum / enterTwoNum);
// }
///////////////////////////////////////////////
// 6. Comparisons (Müqayisələr)
// let enterOneNum = +prompt("The one number", 0);
// let enterComp = prompt("The comp number", "");
// let enterTwoNum = +prompt("The one number", 0);
// if (enterComp === "<") {
//   console.log(enterOneNum < enterTwoNum);
// } else if (enterComp === ">") {
//   console.log(enterOneNum > enterTwoNum);
// } else if (enterComp === "<=") {
//   console.log(enterOneNum <= enterTwoNum);
// } else if (enterComp === ">=") {
//   console.log(enterOneNum >= enterTwoNum);
// } else if (enterComp === "==") {
//   console.log(enterOneNum == enterTwoNum);
// } else if (enterComp === "===") {
//   console.log(enterOneNum === enterTwoNum);
// } else if (enterComp === "!=") {
//   console.log(enterOneNum != enterTwoNum);
// } else if (enterComp === "!==") {
//   console.log(enterOneNum !== enterTwoNum);
// }
/////////////////////////////////////////////
//7. Conditional branching: if, '?' (Şərti operatorlar)
// let askAge = +prompt("Enter your age");

// askAge >= 18
//   ? console.log("Xoş gəldiniz!")
//   : console.log("Siz yetkin deyilsiniz.");
//////////////////////////////////////////////////////////////
// 8. Logical operators (Məntiqi operatorlar)
let hasMoney = true;
let isSunny = false;
console.log(hasMoney && isSunny);
console.log(hasMoney || isSunny);
console.log(!hasMoney, !isSunny);
if (hasMoney && isSunny) {
  console.log("Gəlin gəzintiyə çıxaq!");
} else if (hasMoney || isSunny) {
  console.log("Bəlkə də bir şeylər edə bilərik.");
} else {
  console.log("Evimizdə qalırıq!");
}

/////////////////////////////////////////////////////////////
// 9. Nullish coalescing operator '??'
// let userName = null;
// let defaultName = "Qonaq";
// let finalName = userName ?? defaultName;
// console.log(finalName);
////////////////////////////////////////////////////////////
// 10. Loops: while və for (Dövr operatorları)
// while
let whileLoop = 0;

while (whileLoop <= 10) {
  console.log(whileLoop);
  whileLoop++;
}
// for
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
/////////////////////////////////////////////////
// 11. The "switch" statement (Switch operatoru)

// let promSw = prompt("Enter the prompt", "").toLowerCase();
// switch (promSw) {
//   case "Monday":
//     console.log("Bazar ertəsi");
//     break;
//   case "Thuesday":
//     console.log("Çərşənbə axşamı");
//     break;
//   case "Wednesday":
//     console.log("Çərşənbə");
//     break;
//   case "Thursday":
//     console.log("Cümə axşamı");
//     break;
//   case "Friday":
//     console.log("Cümə");
//     break;
//   case "Saturday":
//     console.log("Şənbə");
//     break;
//   case "Sunday":
//     console.log("Bazar");
//     break;

//   default:
//     console.log("Bu həftə deyil");
//     break;
// }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// 1. Variables (Dəyişənlər)
// let nameProm = prompt("Enter the name", "");
// let ageProm = +prompt("Enter the age");
// let fovColorProm = prompt("Enter the color", "");
// let arrProm = [nameProm, ageProm, fovColorProm];
// console.log(arrProm);
////////////////////////////////////////////////////
// 2. Data types (Məlumat tipləri)
let q = "25";
let p = 5;
let l = true;
console.log(typeof (q * p));
console.log(typeof (q + p));
console.log(typeof (q - l));
console.log(typeof (p - l));
//////////////////////////////////////////////////////////////
// /3. Interaction: alert, prompt, confirm
// let calculateAgain = true;

// while (calculateAgain) {
//   let numOne = +prompt("Enter first number");
//   let numCalc = prompt("Enter calc number");
//   let numTwo = +prompt("Enter second number");

//   switch (numCalc) {
//     case "+":
//       alert(numOne + numTwo);
//       break;
//     case "-":
//       alert(numOne - numTwo);
//       break;
//     case "*":
//       alert(numOne * numTwo);
//       break;
//     case "/":
//       alert(numOne / numTwo);
//       break;
//     default:
//       alert("Yanlış əməliyyat!");
//   }

//   confirm("Yenidən hesablamaq istəyirsiniz?");
// }

//////////////////////////////////////////
// 4. Type Conversions (Tip çevirmələri)

// let inpVal = prompt("Enter a value");
// console.log(Number(inpVal), typeof Number(inpVal));
// console.log(Boolean(inpVal), typeof Boolean(inpVal));
//////////////////////////////////////////////
// 5. Basic operators, maths (Əsas operatorlar və riyaziyyat)

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 !== 0) {
//     console.log(i);
//   }
// }

// let currenYear = +prompt("Enter the current year");
// let numCalc = prompt("Enter clac");
// let birthOne = +prompt("Enter birthyear");
// numCalc === "-"
//   ? alert(currenYear - birthOne)
//   : console.log("Yanlış əməliyyat!");

/////////////////////////////////////////////////////////////
console.log(Math.max(5, 10));
console.log(10 > 5);
//////////////////////////////////////////////////
// 7. Conditional branching: if, '?' (Şərti operatorlar)
// let numTern = +prompt("Enter the Number");
// // if (numTern < 0) {
// //   console.log("mənfi");
// // } else if (numTern > 0) {
// //   console.log("müsbət");
// // } else {
// //   console.log("0");
// // }
// numTern < 0
//   ? console.log("mənfi")
//   : numTern > 0
//   ? console.log("müsbət")
//   : console.log("0");
/////////////////////////////////////////////////////////
//8. Logical operators (Məntiqi operatorlar)
let isLogged = true;
let hasPremium = false;
let hasDiscount = true;

if (hasPremium) {
  console.log("Xoş gəldiniz, Premium istifadəçi!");
} else if (hasDiscount && isLogged) {
  console.log("Sizə xüsusi endirim var!");
} else if (isLogged) {
  console.log("Xoş gəldiniz!");
} else if (hasDiscount) {
  console.log("Zəhmət olmasa, giriş edin!");
}
///////////////////////////////////////////////////
// 9. Nullish coalescing operator '??'
let userLanguage = null;
let defaultLanguage = "English";
let finalLanguage = userLanguage ?? defaultLanguage;
let finalLanguage1 = userLanguage || defaultLanguage;
console.log(finalLanguage);
console.log(finalLanguage1);
console.log(null ?? "Default"); // Default
console.log(0 ?? "Default"); // 0
console.log("" || "Default"); // Default
console.log(0 || "Default"); // Default

// ?? - null və undefiend ilə yalnız müqayisə aparır, xəta olmasın deyə. və || ilk tapdığı truenı qaytarır.
/////////////////////////////////////////////////////////////
// 10. Loops: while və for (Dövr operatorları)

// for (let i = 0; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i * (i - 1) * (i - 2) * 1);
// }

// let guTheNum = Math.floor(Math.random() * 10) + 1;

// console.log("Random ədəd:", guTheNum);

// let guess;
// while (guess !== guTheNum) {
//   guess = +prompt("Bir rəqəm təxmin et (1-10)");
//   if (guess === guTheNum) {
//     console.log("Düz tapdın!");
//     break;
//   } else {
//     console.log("Yanlış! Yenidən cəhd et.");
//   }
// }

//////////////////////////////////////////////////////////
// let season = prompt("Enter the season");

// switch (season) {
//   case "sunny":
//     console.log("Bugün hava çox gözəldir!");
//     break;
//   case "rainy":
//     console.log("Çətirinizi götürməyi unutmayın!");
//     break;
//   case "snowy":
//     console.log("Sıx geyinin, hava çox soyuqdur!");
//     break;
//   case "cloudy":
//     console.log("Bugün hava bir az tutqundur!");
//     break;
//   default:
//     console.log("Naməlum hava vəziyyəti!");
//     break;
// }
