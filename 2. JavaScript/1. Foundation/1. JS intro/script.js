// "use strict";
// let yönetici;
// let isim = "Ahmet";
// yönetici = isim;
// alert(yönetici);

// let worldName = prompt("name", "");
// alert(worldName);
// confirm(worldName);
// console.log(worldName);

// let name = "Nijat";
// let surName = "Hasanov";

// let fullName = `Hello
//  ${name}
//  ${surName}`;
// console.log(fullName);

// let myName = 'My name is "Nijat"';

// let namee = Number("12");
// console.log(typeof namee);
// console.log(true + false);
// alert(Boolean(0)); //False
// alert(Boolean("")); //False
// alert(Boolean(null)); //False
// alert(Boolean(undefined)); //False
// alert(Boolean(NaN)); //False
// alert(Boolean("value")); //True
// alert(Boolean(12)); //True
// alert(Boolean(" ")); //True

// Basic operators, maths

/*
Bu mətn proqramlaşdırmada istifadə olunan "unary" (unar), "binary" (binar) və "operand" (operand) terminlərini izah edir. 

- **Operand**: Operatorların tətbiq olunduğu dəyərlərə deyilir. Məsələn, `5 * 2` ifadəsində `5` və `2` operandlardır. Bəzən bunlara "arqumentlər" də deyilir.
  
- **Unar operator**: Tək operandla işləyən operatorlardır. Məsələn, mənfi ədəd yaradan `-` operatoru unar operatordur:  
  ```javascript
  let x = 1;
  x = -x; // x indi -1-dir.
  ```

- **Binar operator**: İki operandla işləyən operatorlardır. Məsələn, çıxma əməliyyatı `-` binar operatordur:  
  ```javascript
  let x = 1, y = 3;
  alert(y - x); // 2, binar çıxma əməliyyatı.
  ```

Eyni simvol (məsələn, `-`) həm unar, həm də binar operator kimi istifadə oluna bilər. Unar operator ədədin işarəsini dəyişir, binar operator isə iki ədədi bir-birindən çıxarır. Bu terminlər proqramlaşdırmada operatorların necə işlədiyini anlamaq üçün vacibdir.

Qalıq (%): Bu operator bir ədədin digərinə bölünməsindən qalan qalığı tapır. Məsələn, 10 % 3 ifadəsi 1 nəticəsini verir, çünki 10-un 3-ə bölünməsindən qalan 1-dir.

Qüvvətə yüksəltmə (**): Bu operator bir ədədi digərinin qüvvətinə yüksəldir. Məsələn, 2 ** 3 ifadəsi 8 nəticəsini verir, çünki 2-nin 3-cü qüvvəti 8-dir.


Bu mətn JavaScript-də qalıq operatoru olan `%`-i izah edir. Qeyd edək ki, bu operator faizlə (`%` işarəsi ilə) heç bir əlaqəsi yoxdur. 

**Qalıq operatoru (`%`)** iki ədədin tam bölünməsindən qalan qalığı tapır. Məsələn:

- `5 % 2` ifadəsi `1` nəticəsini verir, çünki 5-in 2-yə bölünməsindən qalan `1`-dir.
- `8 % 3` ifadəsi `2` nəticəsini verir, çünki 8-in 3-ə bölünməsindən qalan `2`-dir.
- `8 % 4` ifadəsi `0` nəticəsini verir, çünki 8-in 4-ə bölünməsindən qalan `0`-dır.

Bu operator, xüsusilə ədədlərin cüt və ya tək olmasını yoxlamaq və ya müəyyən bir dövrü təkrarlamaq üçün istifadə olunur.

10 / 2 ifadəsinin nəticəsi 5-dir, lakin bu bölmə nəticəsidir. Qalıq operatoru (%) isə qalanı hesablayır. 10 % 2 ifadəsi 0 qaytarır, çünki 10 tam olaraq 2-yə bölünür və qalıq qalmır.

let number = 10;

if (number % 2 === 0) {
  console.log(number + " cüt ədəddir.");
} else {
  console.log(number + " tək ədəddir.");
}

cüt ədəddir


Bu mətn JavaScript-də **qüvvətə yüksəltmə operatoru** olan `**`-i izah edir. Bu operator, bir ədədi digərinin qüvvətinə yüksəldir. Məktəb riyaziyyatından tanış olduğumuz üsul ilə eynidir, məsələn, `a^b` kimi.

---

### Əsas məqamlar:
1. **Qüvvətə yüksəltmə (`**`)**:
   - `a ** b` ifadəsi `a`-nı `b`-nin qüvvətinə yüksəldir.
   - Məsələn:
     ```javascript
     alert(2 ** 2); // 4 (2²)
     alert(2 ** 3); // 8 (2³)
     alert(2 ** 4); // 16 (2⁴)
     ```

2. **Köklərin hesablanması**:
   - Qüvvətə yüksəltmə operatoru tam ədədlərlə yanaşı, kəsr ədədlər üçün də işləyir.
   - Məsələn, kvadrat kök (`√`) və kub kök (`∛`) hesablamaq üçün istifadə edilə bilər:
     ```javascript
     alert(4 ** (1/2)); // 2 (4-ün kvadrat kökü)
     alert(8 ** (1/3)); // 2 (8-in kub kökü)
     ```

---

### Nəticə:
`**` operatoru riyaziyyatda istifadə etdiyimiz qüvvətə yüksəltmə əməliyyatını JavaScript-də tətbiq etmək üçün istifadə olunur. Bu operator, həm tam, həm də kəsr ədədlər üçün işləyir və köklərin hesablanması kimi mürəkkəb riyazi əməliyyatları asanlaşdırır. 😊


Bu mətn JavaScript-də `+` operatorunun xüsusi bir xüsusiyyətini izah edir: **stringləri birləşdirmək** (concatenation). Adətən `+` operatoru ədədləri toplamaq üçün istifadə olunur, lakin əgər operandlardan biri **string** olarsa, o zaman `+` operatoru stringləri birləşdirir.

---

### Əsas məqamlar:
1. **String birləşdirmə**:
   - Əgər `+` operatorunun ən azı bir operandı stringdirsə, digər operand da avtomatik olaraq stringə çevrilir və birləşdirilir.
   - Məsələn:
     ```javascript
     alert('1' + 2); // "12"
     alert(2 + '1'); // "21"
     ```

2. **Ardıcıl əməliyyatlar**:
   - Əgər bir neçə `+` operatoru ardıcıl olaraq işlədilirsə, əməliyyatlar soldan sağa yerinə yetirilir.
   - Məsələn:
     ```javascript
     alert(2 + 2 + '1'); // "41" (2 + 2 = 4, sonra 4 + '1' = "41")
     alert('1' + 2 + 2); // "122" ('1' + 2 = "12", sonra "12" + 2 = "122")
     ```

3. **Digər arifmetik operatorlar**:
   - Digər arifmetik operatorlar (`-`, `*`, `/` və s.) yalnız ədədlərlə işləyir. Onlar operandları həmişə ədədə çevirir.
   - Məsələn:
     ```javascript
     alert(6 - '2'); // 4 ('2' ədədə çevrilir)
     alert('6' / '2'); // 3 (hər iki string ədədə çevrilir)
     ```

---

### Nəticə:
JavaScript-də `+` operatoru həm ədədləri toplamaq, həm də stringləri birləşdirmək üçün istifadə olunur. Əgər operandlardan biri stringdirsə, digər operand avtomatik olaraq stringə çevrilir. Digər arifmetik operatorlar isə yalnız ədədlərlə işləyir və operandları ədədə çevirir. Bu xüsusiyyət JavaScript-in dinamik tip sistemindən qaynaqlanır. 😊

Bu mətn JavaScript-də **unar `+` operatoru**nun istifadəsini izah edir. Unar `+` operatoru bir dəyəri ədədə çevirmək üçün istifadə olunur. Bu, xüsusilə stringləri və ya digər tipləri ədədə çevirmək üçün faydalıdır.

---

### Əsas məqamlar:
1. **Unar `+` operatoru**:
   - Unar `+` operatoru tək operandla işləyir və ədədlərə təsir etmir. Lakin əgər operand ədəd deyilsə (məsələn, string, boolean), onu ədədə çevirir.
   - Məsələn:
     ```javascript
     alert(+true); // 1 (boolean true ədədə çevrildi)
     alert(+"");   // 0 (boş string ədədə çevrildi)
     ```

2. **`Number(...)` ilə müqayisə**:
   - Unar `+` operatoru `Number(...)` funksiyası ilə eyni işi görür, lakin daha qısadır.
   - Məsələn:
     ```javascript
     alert(+"123"); // 123 (string ədədə çevrildi)
     alert(Number("123")); // 123 (eyni nəticə)
     ```

3. **Stringləri ədədə çevirmək**:
   - HTML formlarından gələn dəyərlər adətən string olur. Əgər bu dəyərləri toplamaq istəyiriksə, unar `+` operatoru ilə əvvəlcə onları ədədə çevirmək lazımdır.
   - Məsələn:
     ```javascript
     let apples = "2";
     let oranges = "3";

     alert(apples + oranges); // "23" (string kimi birləşdirildi)
     alert(+apples + +oranges); // 5 (ədədə çevrilib toplandı)
     ```

4. **Unar `+` operatorunun üstünlüyü**:
   - Unar `+` operatoru, binar `+` operatorundan daha yüksək prioritetə malikdir. Buna görə də əvvəlcə unar `+` işləyir və dəyərləri ədədə çevirir, sonra binar `+` toplama əməliyyatını yerinə yetirir.

---

### Nümunələr:
- **Stringləri ədədə çevirmək**:
  ```javascript
  let a = "5";
  let b = "10";
  alert(+a + +b); // 15
  ```

- **Boolean dəyərləri ədədə çevirmək**:
  ```javascript
  alert(+true);  // 1
  alert(+false); // 0
  ```

- **Boş string və ya boşluq**:
  ```javascript
  alert(+"");    // 0
  alert(+" ");   // 0
  ```

---

### Nəticə:
Unar `+` operatoru JavaScript-də dəyərləri ədədə çevirmək üçün sadə və effektiv bir üsuldur. Bu, xüsusilə stringləri ədəd kimi istifadə etmək lazım olduqda faydalıdır. Digər arifmetik operatorlardan fərqli olaraq, unar `+` operatoru yalnız bir operandla işləyir və onu ədədə çevirir. 😊

Bu mətn JavaScript-də **operatorların prioriteti** (precedence) haqqında məlumat verir. Operatorların prioriteti, bir ifadədə birdən çox operator olduqda, hansı operatorun əvvəlcə icra olunacağını müəyyən edir.

---

### Əsas məqamlar:
1. **Prioritet nədir?**
   - Prioritet, operatorların hesablanma ardıcıllığını təyin edir. Məsələn, məktəb riyaziyyatından bilirik ki, vurma (`*`) toplamadan (`+`) daha yüksək prioritetə malikdir. Buna görə də `1 + 2 * 2` ifadəsində əvvəlcə vurma, sonra toplama icra olunur.
   - Mötərizələr (`()`) prioriteti ləğv edir. Məsələn, `(1 + 2) * 2` ifadəsində əvvəlcə mötərizədəki toplama icra olunur.

2. **Prioritet cədvəli**:
   - Hər bir operatorun müəyyən bir prioritet nömrəsi var. Daha yüksək prioritetli operatorlar əvvəlcə icra olunur.
   - Məsələn:
     - Unar `+` (unar plus): 14
     - Unar `-` (unar mənfi): 14
     - Qüvvətə yüksəltmə (`**`): 13
     - Vurma (`*`) və bölmə (`/`): 12
     - Toplama (`+`) və çıxma (`-`): 11
     - Təyin etmə (`=`): 2

3. **Unar operatorların üstünlüyü**:
   - Unar operatorlar (məsələn, unar `+` və unar `-`) binar operatorlardan (məsələn, toplama `+` və çıxma `-`) daha yüksək prioritetə malikdir. Buna görə də `+apples + +oranges` ifadəsində əvvəlcə unar `+` operatoru işləyir və stringləri ədədə çevirir, sonra toplama icra olunur.

4. **Eyni prioritetdə olan operatorlar**:
   - Əgər iki operatorun prioriteti eynidirsə, onda onlar **soldan sağa** icra olunur. Məsələn, `10 - 5 - 2` ifadəsində əvvəlcə `10 - 5`, sonra `5 - 2` hesablanır.

---

### Nümunələr:
1. **Vurma və toplama**:
   ```javascript
   alert(1 + 2 * 2); // 5 (2 * 2 = 4, sonra 1 + 4 = 5)
   alert((1 + 2) * 2); // 6 (1 + 2 = 3, sonra 3 * 2 = 6)
   ```

2. **Unar operatorların üstünlüyü**:
   ```javascript
   let apples = "2";
   let oranges = "3";
   alert(+apples + +oranges); // 5 (unar + əvvəlcə stringləri ədədə çevirir)
   ```

3. **Eyni prioritetli operatorlar**:
   ```javascript
   alert(10 - 5 - 2); // 3 (soldan sağa: 10 - 5 = 5, 5 - 2 = 3)
   ```

---

### Nəticə:
JavaScript-də operatorların prioriteti ifadələrin hesablanma ardıcıllığını müəyyən edir. Unar operatorlar (məsələn, unar `+`) binar operatorlardan daha yüksək prioritetə malikdir. Mötərizələr istifadə edərək prioriteti dəyişmək olar. Bu qaydalar kodun düzgün icrası üçün vacibdir. 😊

Yerində dəyişdirmə operatorları (+=, -=, *=, /=, %= və s.) dəyişənləri qısa və effektiv şəkildə dəyişdirmək üçün istifadə olunur. Bu operatorlar kodun daha yığcam və oxunaqlı olmasını təmin edir. 😊

Bu mətn JavaScript-də **artırma (`++`)** və **azaltma (`--`)** operatorları haqqında məlumat verir. Bu operatorlar dəyişənin dəyərini **1 vahid** artırır və ya azaldır. Onların iki forması var: **prefix** (operator dəyişəndən əvvəl) və **postfix** (operator dəyişəndən sonra).

---

### Əsas məqamlar:
1. **Artırma (`++`) və azaltma (`--`)**:
   - `++` operatoru dəyişənin dəyərini 1 vahid artırır.
   - `--` operatoru dəyişənin dəyərini 1 vahid azaldır.
   - Məsələn:
     ```javascript
     let counter = 2;
     counter++; // counter = 3
     counter--; // counter = 2
     ```

2. **Prefix və postfix fərqi**:
   - **Prefix forması** (`++counter`):
     - Dəyişənin dəyərini dərhal artırır və **yeni dəyəri** qaytarır.
     - Məsələn:
       ```javascript
       let counter = 1;
       let a = ++counter; // counter = 2, a = 2
       alert(a); // 2
       ```

   - **Postfix forması** (`counter++`):
     - Dəyişənin dəyərini artırır, lakin **köhnə dəyəri** qaytarır.
     - Məsələn:
       ```javascript
       let counter = 1;
       let a = counter++; // counter = 2, a = 1
       alert(a); // 1
       ```

3. **İstifadə qaydaları**:
   - Əgər artırma/azaltma nəticəsindən istifadə etmirsinizsə, prefix və postfix forması arasında fərq yoxdur:
     ```javascript
     let counter = 0;
     counter++; // counter = 1
     ++counter; // counter = 2
     alert(counter); // 2
     ```

   - Əgər artırma/azaltma nəticəsini dərhal istifadə etmək lazımdırsa, **prefix forması** istifadə olunur:
     ```javascript
     let counter = 0;
     alert(++counter); // 1
     ```

   - Əgər artırma/azaltma nəticəsindən əvvəlki dəyəri istifadə etmək lazımdırsa, **postfix forması** istifadə olunur:
     ```javascript
     let counter = 0;
     alert(counter++); // 0
     ```

4. **Digər operatorlarla birlikdə istifadə**:
   - `++` və `--` operatorları digər riyazi operatorlardan daha yüksək prioritetə malikdir. Ona görə də ifadələrdə əvvəlcə onlar icra olunur.
   - Məsələn:
     ```javascript
     let counter = 1;
     alert(2 * ++counter); // 4 (counter = 2, 2 * 2 = 4)
     alert(2 * counter++); // 2 (counter = 2, 2 * 1 = 2)
     ```

5. **Oxunaqlılıq məsələsi**:
   - Artırma/azaltma operatorlarını ifadələr içində istifadə etmək kodun oxunaqlılığını azalda bilər. Ona görə də **"bir sətir – bir əməliyyat"** prinsipinə riayət etmək tövsiyə olunur:
     ```javascript
     let counter = 1;
     alert(2 * counter); // 2
     counter++; // counter = 2
     ```

---

### Nəticə:
Artırma (`++`) və azaltma (`--`) operatorları dəyişənlərin dəyərini 1 vahid artırır və ya azaldır. Prefix və postfix formaları arasındakı fərq, qaytarılan dəyərdən asılıdır. Kodun oxunaqlılığını qorumaq üçün bu operatorları aydın və sadə şəkildə istifadə etmək vacibdir. 😊

// TASKLAR
*/ ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TASK1
// let askPromt = prompt('What is the "official" name of JavaScript?', "");

// if (askPromt === "ECMAScript") {
//   alert("right");
// } else {
//   alert("You don’t know? ECMAScript!");
// }

// TASK 2

// const askNumber = prompt("Enter a number");
// if (askNumber > 0) {
//   alert(1);
// } else if (askNumber < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// TASK 3 TERNARY OPERATOR

// let result;

// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }
// let a = 1;
// let b = 5;
// let result = a + b < 4 ? alert("Below") : alert("over");

// TASK 4
/*

Rewrite if..else using multiple ternary operators '?'.
For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

// let message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "No login"
//     : " ";
////////////////////////////////////////////////////////////////////////////////////////////////////
// Logical operators

// TASK 1

// let age = 15;
// if (age >= 14 && age <= 90) {
//   alert("true");
// }

// Task 2

// let age = 15;
// if (age >= 14 || age <= 90) {
//   alert("true");
// }

// // Task 3

// let login = prompt();

// if (login === "TheMaster") {
//   alert("welcome");
// } else if (login === "admin") {
//   alert("wrong password");
// } else {
// }
// let i = 4;
// do {
//   alert(i);
//   i++;
// } while (i < 3);

// let a = 5;

// while (a < 3) {
//   alert(a);
//   a++;
// }

// let userInput;
// do {
//   userInput = prompt("Enter a number greater than 10:", "");
//   userInput++;
// } while (userInput <= 10);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Loops: while and for
// TASK 1
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     alert(i);
//   }
// }

// TASK 2
// let i = 0;
// while (i < 10) {
//   if (i % 2 === 0) {
//     alert(i);
//   }
//   i++;
// }

// // TASK 3
// let greaterNumber;
// do {
//   greaterNumber = prompt("Enter a number greater than 100", 0);
// } while (greaterNumber <= 100 && greaterNumber);

// TASK 1
// let arry = [1, 2, 3, 4, 5];
// const myFunction = function (arr, i) {
//   return arr.filter(item);
// };
////////////////////////////////////////////////////////////////////////////////
// ## 1. Dəyişənlər və Tip Çevirmələri

// ### Tapşırıq 1.1: Tip Çevirmələri

// // Verilmiş dəyişənləri müvafiq tiplərə çevirin və nəticəni yoxlayın

let numString = "42";
numString = Number(numString);
console.log(typeof numString); // number

let boolString = "true";
boolString = Boolean(boolString);
console.log(typeof boolString);

let mixedArray = +["123", "456", "789"];
console.log(typeof mixedArray);

let nullValue = null;
nullValue = Boolean(nullValue);
console.log(nullValue); // false

// Tələb olunan çevirmələr:
// 1. numString -> number
// 2. boolString -> boolean
// 3. mixedArray elementlərini number tipinə çevirin
// 4. nullValue-nu boolean-a çevirin və nəticəni izah edin

/////////////////////////////////
//  ### Tapşırıq 1.2: Tip Yoxlaması
// Verilmiş dəyişənlərin tiplərini müəyyən edin
let sample1 = NaN;
console.log(typeof sample1); // number

let sample2 = [1, 2, 3];
console.log(Array.isArray(sample2)); //true

let sample3 = "";
console.log(typeof sample3); //string

let sample4 = 0;
console.log(typeof sample4); // number

let sample5 = { name: "John" };
console.log(sample5 instanceof Object); // true

// Hər bir dəyişən üçün:
// 1. typeof operatorundan istifadə edin
// 2. instanceof ilə yoxlayın (array və obyektlər üçün)
// 3. Array.isArray() metodundan istifadə edin (array-lər üçün)

/////////////////////////////////////////////////////////////////////

// ## 2. String Metodları

// ### Tapşırıq 2.1: Mətn Manipulyasiyası
let text = "   JavaScript is awesome   ";
console.log(text.trim().toUpperCase().replace("IS", "WAS").split(" ").length);
// console.log(text.toUpperCase());

// Tələb olunan əməliyyatlar:
// 1. Mətndəki boşluqları silin
// 2. Mətni böyük hərflərə çevirin
// 3. "is" sözünü "was" ilə əvəz edin
// 4. Mətni sözlərə ayırın və array kimi saxlayın
// 5. Mətnin uzunluğunu tapın

// ### Tapşırıq 2.2: Şablon Yaratma
// Verilmiş məlumatlardan istifadə edərək şablon yaradın
let user = {
  firstName: "Ali",
  lastName: "Məmmədov",
  age: 25,
  email: "ali@example.com",
};

console.log(
  `Hörmətli ${user.firstName},
   ${user.lastName}, 
   sizin ${user.age} yaşınız var. 
   email ünvanınız ${user.email.split("@"[1])}` // Bu yazılış doğrudu?
);

// Template literal-dan istifadə edərək:
// 1. "Hörmətli {tam_ad}, sizin {yaş} yaşınız var." formatında mətn yaradın
// 2. İstifadəçi haqqında məlumatları cədvəl formasında göstərin
// 3. Email ünvanını @ simvoluna görə ayırın
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// ## 3. Array Metodları

// ### Tapşırıq 3.1: Array Əməliyyatları
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fruits = ["alma", "armud", "banan", "gilas", "üzüm"];

console.log(
  numbers
    .filter((num) => num % 2 === 0)
    .map((kub) => kub ** 3)
    .reduce((sum, curr) => sum + curr)
);
console.log(fruits.sort());
console.log(fruits.push("portağal", "mandarin"));
console.log(fruits.pop("portağal"));
console.log(fruits.unshift("portağal", "mandarin"));
console.log(fruits.shift("mandarin"));
console.log(fruits);

// Tələb olunan əməliyyatlar:
// 1. Cüt ədədləri filter() ilə tapın
// 2. Hər ədədin kubunu map() ilə hesablayın
// 3. Ədədlərin cəmini reduce() ilə tapın
// 4. Meyvələri əlifba sırası ilə düzün
// 5. Array-ə yeni elementlər əlavə edin və silin (push, pop, shift, unshift)

// ### Tapşırıq 3.2: Array-lərlə Mürəkkəb Əməliyyatlar
let students = [
  { id: 1, name: "Aygün", grades: [85, 90, 92] },
  { id: 2, name: "Elçin", grades: [75, 85, 88] },
  { id: 3, name: "Nigar", grades: [95, 88, 91] },
  { id: 4, name: "Orxan", grades: [70, 65, 72] },
];

let average = students
  .map(
    (students) =>
      students.grades.reduce((a, b) => a + b, 0) / students.grades.length
  )
  .sort((a, b) => a - b);

let averageAbobve = average.find((students) => students > 85);
let averageAll = average.reduce((sum, curr) => sum + curr, 0);

console.log(average);
console.log(averageAbobve);
console.log(averageAll);
// Tələb olunan əməliyyatlar:
// 1. Hər tələbənin orta qiymətini hesablayın
// 2. 85-dən yuxarı orta qiyməti olan tələbələri tapın
// 3. Tələbələri orta qiymətə görə çoxdan aza düzün
// 4. Bütün tələbələrin ümumi orta qiymətini tapın
// Sual 1: documentasiyanı oxumaq
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ### Tapşırıq 4.1: Funksiya Növləri
// Aşağıdakı funksiyaları yazın:
// 1. Adi funksiya - faktorial hesablayan
function factorial(n) {
  let counter = 1;

  for (let i = 2; i <= n; i++) {
    counter *= i;
  }
  return counter;
}

console.log(factorial(5)); // 120

// !5 =  5 *4 *3 *2 *1 = 120

// 2. Arrow function - ədədin kvadratını qaytaran
const square = (num) => (num *= num);

console.log(square(5));

// 3. Higher-order function - array-i filter edən funksiya qəbul edən və tətbiq edən
function filterArray(arr, filterFn) {
  return arr.filter(filterFn);
}
const number = [5, 12, 8, 3, 20];

const highOrderFunction = filterArray(number, (num) => num > 10);

console.log(highOrderFunction);

/////////////////////////////////////////////////////////////////////////////////////////////
// // ## 4. Obyektlər
// // ### Tapşırıq 4.1: Obyekt Yaratma və Metodlar

// // Bank hesabı obyekti yaradın
// let bankAccount = {
//   accountNamber: "12847895",
//   name: "Murad",
//   balance: 800,
//   transactions: [
//     { date: "2025-10-01", type: "Ödəniş", amount: 150, description: "Market" },
//     {
//       date: "2025-10-02",
//       type: "Köçürmə",
//       amount: 500,
//       description: "Hesaba köçürmə",
//     },
//   ],

//   // Properties:
//   // - hesab nömrəsi
//   // - sahibinin adı
//   // - balans
//   // - əməliyyatlar array-i
//   // Metodlar:
//   // - pul əlavə etmə
//   // - pul çıxarma
//   // - balans yoxlama
//   // - əməliyyat tarixçəsi
// };
