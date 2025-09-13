// function findIncludes(str, i) {
//   for (let j = 0; j < str.length; j++) {
//     if (i === str[j]) {
//       console.log(true);
//       return;
//     }
//   }
//   console.log(false);
// }

// findIncludes("ello Worldh", "o");

// 1. **Stringin uzunluğunu tap**
// Məsələn: `"hello"` → `5`
const stringLength = (str) => str.length;
console.log(stringLength("hello"));
//////////////////////////////////////////////////
// 2. **Stringi böyük hərflərə çevir**
// Məsələn: `"hello"` → `"HELLO"`
const stringToUpperCase = (str) => str.toUpperCase();
console.log(stringToUpperCase("hello"));
//////////////////////////////////////////////////
// 3. **Stringi kiçik hərflərə çevir**
// Məsələn: `"HeLLo"` → `"hello"`
const stringToLowerCase = (str) => str.toLowerCase();
console.log(stringToLowerCase("hello"));
//////////////////////////////////////////////////
// 4. **İlk hərfi böyük yaz**
// Məsələn: `"python"` → `"Python"`
const strFirstCase = (str) => str.at(0).toUpperCase() + str.slice(1);
console.log(strFirstCase("python"));
//////////////////////////////////////////////////
// 5. **Stringin hərflərini alt-alta yaz**
// Məsələn: `"salam"` →

// ```
// s
// a
// l
// a
// m
// ```
const strWrite = function (str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
};
strWrite("salam");
//////////////////////////////////////////////////
// 6. **Hərf sözdə neçəci indexdədir?**
// Məsələn: `"banana"`, `"a"` → `1` (ilk tapılan index)
const strIndex = (str) => str.indexOf("a");
console.log(strIndex("banana"));
//////////////////////////////////////////////////
// 7. **Bütün boşluqları “-” ilə əvəzlə**
// Məsələn: `"hello world"` → `"hello-world"`
function strReplece(str) {
  return str.replaceAll(" ", "-");
}
console.log(strReplece("hello world"));
//////////////////////////////////////////////////
// 8. **Stringin ilk və son hərfini tap**
// Məsələn: `"javascript"` → `"j - t"`
function strAt(str) {
  return str.at(0) + "-" + str.at(-1);
}
console.log(strAt("javascript"));
//////////////////////////////////////////////////
// 9. **Stringin son 2 hərfini qaytar**
// Məsələn: `"hello"` → `"lo"`
function strSlice(str) {
  return str.slice(-2);
}
console.log(strSlice("hello"));
//////////////////////////////////////////////////
// 10. **Stringin “hello” ilə başlayıb-başlamadığını yoxla**
// Məsələn: `"hello world"` → `true`
function strStartWith(str) {
  return str.startsWith("hello");
}
console.log(strStartWith("hello world"));
//////////////////////////////////////////////////
// 11. **Stringdə “js” sözünün olub-olmadığını yoxla**
// Məsələn: `"i love js"` → `true`
function strInclude(str) {
  return str.includes("js");
}
console.log(strInclude("i love js"));
//////////////////////////////////////////////////
// 12. **Stringin ilk 4 hərfini götür**
// Məsələn: `"javascript"` → `"java"`
function strSubstring(str) {
  return str.substring(0, 4);
}
console.log(strSubstring("javascript"));
//////////////////////////////////////////////////
// 13. **İki stringi birləşdir**
// Məsələn: `"hello"`, `"world"` → `"hello world"`
function strConcat(str) {
  return str.concat(" world");
}
console.log(strConcat("hello", "world"));
//////////////////////////////////////////////////
// 14. **Stringi tərsinə yaz**
// Məsələn: `"salam"` → `"malas"`
function strReverse(str) {
  return str.split("").reverse().join("");
}
console.log(strReverse("salam"));
//////////////////////////////////////////////////
// 15. **Verilən hərf sözdə neçə dəfə təkrarlanıb**
// Məsələn: `"alma"`, `"a"` → `2`
const strRepate = function (str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count++;
    }
  }
  return count;
};
console.log(strRepate("alma"));
//////////////////////////////////////////////////
// Bonus - String palindrom olub-olmadığını yoxla -
// Bir söz tərsinə oxunanda da eyni qalırsa → palindromdur → nəticə true.
// Əgər tərsinə oxunanda dəyişirsə → palindrom deyil → nəticə false.

function strPalindrom(str) {
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(strPalindrom("level"));
