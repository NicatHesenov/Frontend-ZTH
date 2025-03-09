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
let bankAccount = {
  accountNamber: "12847895",
  name: "Murad",
  balance: 800,
  transactions: [
    { date: "2025-10-01", type: "Ödəniş", amount: 150, description: "Market" },
    {
      date: "2025-10-02",
      type: "Köçürmə",
      amount: 500,
      description: "Hesaba köçürmə",
    },
  ],

  get showBalance() {
    return `balance ${this.balance}`;
  },

  set deposit(amounts) {
    // try {
    //   if (amounts <= 0) {
    //     console.log("ERROR");
    //     throw new Error("TRY AGAIN");
    //   } else {
    //     console.log("Depozit...");
    //     this.balance += amounts;
    //   }
    // } catch (error) {
    //   alert("error", error.message);
    // } finally {
    //   alert("GOOD LUCK");
    // }
  },
};
console.log((bankAccount.deposit = 50));
console.log((bankAccount.deposit = -200));
console.log(bankAccount.balance);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ## 5. Şərtlər və Dövrlər

// ### Tapşırıq 5.1: Şərtli Operatorlar

// const numberr = +prompt("Enter number", 0);
// const bigNumber = +prompt("Enter number", 0);
// numberr = numberr % 2 === 0 ? alert("true") : alert("false");
// bigNumber = bigNumber > 3 ? alert("true") : alert("false");

// const getCurrSeason = function () {
//   const currDate = new Date();
//   const month = currDate.getMonth() + 1;

//   if (month >= 1 && month <= 3) {
//     console.log("winter");
//   } else if (month >= 3 && month <= 5) {
//     console.log("spring");
//   } else if (month >= 6 && month <= 9) {
//     console.log("summer");
//   } else if (month >= 9 && month <= 12) {
//     console.log("autumn");
//   }
// };
// getCurrSeason();

// let numOne = parseFloat(prompt("Enter one number", 0));
// let calcProm = prompt("Enter the number");
// let numTwo = parseFloat(prompt("Enter two number", 0));
// let result;

// switch (calcProm) {
//   case "+":
//     alert((result = numOne + numTwo));
//     break;
//   case "-":
//     alert((result = numOne - numTwo));
//     break;
//   case "/":
//     alert((result = numOne / numTwo));
//     break;
//   case "*":
//     alert((result = numOne * numTwo));
//     break;

//   default:
//     break;
// }
// 1. Rəqəmin tək və ya cüt olduğunu yoxlayan funksiya
// 2. Üç ədəddən ən böyüyünü tapan funksiya
// 3. İlin fəslini təyin edən funksiya (ay nömrəsinə görə)
// 4. Sadə kalkulyator (switch-case ilə)
/////////////////////////////////////////////////////
// ### Tapşırıq 5.2: Dövrlər

let limit = 10;

let oneNum = 0;
let twoNum = 1;
console.log(oneNum);
console.log(twoNum);

for (let i = 2; i < limit; i++) {
  let result = oneNum + twoNum;

  oneNum = twoNum;
  twoNum = result;
  console.log(result);
}

// 1. Fibonaççi ardıcıllığını çap edən proqram (for)

let arrayRev = [1, 2, 5, 6, 7];
let arrayEmp = [];
let i = arrayRev.length - 1;

while (i > 0) {
  arrayEmp.push(arrayRev[i]);
  i--;
}

console.log(arrayEmp);
// 2. Array elementlərini tərsinə çap edən proqram (while)
/*
Sadə ədəd nədir? 1 və özünə bölünən ədədlərə sadə ədəd deyilir - bu riyazi bir düşüncədi
Bəs bunu koda necə tətbiq edə bilərik? addım-addım gedək:
Ilk öncə müəyyən bir ədəd olmalıdır ki onların üzərində dövr edək, nəticədə göydən düşəsi deyil
Algoritma quracağımızı düşünsək hər şey addım-addım getməlidir. Yəni? Bunları saxlayacağımız bir boş array olamlıdır ki, ədədləri ona puş edək.
Indi isə arrayləri bir-bir yoxlayan bir funuksiya yazaq - bu for dövrüdür.
Ədədlərimiz hazır, rəgəmlərimiz hazır indi əməliyyatı icra edəcək funuksiyanı(algoritimi yazmalıyıq):


*/

// 1 Ədədlərin array formasında təyin edilməsi

// let numbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // 2 boş array
// let simpleNums = [];

// // 3 for of
// for (let item of Math.sqrt(numbers)) {
//   if (item % 2 === 0) {
//     simpleNums.push(item);
//   }
// }
// console.log(simpleNums);
// 3. Sadə ədədləri tapan proqram
// 4. Pattern çap edən proqram (ulduzlarla üçbucaq)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TASK 6
// returun uniq numbers
// let nums = [1, 2, 3, 3, 4, 5, 5, 4, 45, 65, 76];

// const uniqNumber = function (item = []) {
//   let newArr = item.filter((i) => item.indexOf(i) === item.lastIndexOf(i));
//   console.log(newArr);
// };

// console.log(uniqNumber(nums));
let nums = [1, 2, 3, 3, 4, 5, 5, 4, 45, 65, 76];

const uniqNum = function (num = []) {
  let newArr = num.filter((i) => num.indexOf(i) === num.lastIndexOf(i));
  console.log(newArr);
};

// uniqNum(nums);
// TASK 7
// Hər bir simvolun sayını hesabla
let str = "Salam Azərbaycan";

// Tapşırıq 1
// let users = 10;

// if (users > 0) {
//   console.log("Müsbət ədəd");
// } else if (users < 0) {
//   console.log("Mənfi ədəd");
// } else {
//   console.log("Sıfır");
// }

// Tapşırıq 2
// let users2 = +prompt("Enter the number", 0);

// if (users2 >= 90) {
//   console.log("A");
// } else if (users2 >= 80 && users2 <= 89) {
//   console.log("B");
// } else if (users2 >= 70 && users2 <= 79) {
//   console.log("C");
// } else if (users2 >= 60 && users2 <= 69) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// Tapşırıq 3
// let year = 2024;

// if (year % 4 === 0 || year % 100 !== 0 || year % 400 === 0) {
//   console.log("Uzun il");
// } else {
//   console.log("adi il");
// }

// JavaScriptə Truthy/Falsy Values
// Tapşırıq 1.

// let truthyFalsy = prompt("Enter any value");
// if (truthyFalsy) {
//   alert("truthy");
// } else {
//   alert("falsy");
// }

// Tapşırıq 2
// let values = [
//   true,
//   45,
//   -46,
//   "true",
//   [],
//   {},
//   function () {},
//   false,
//   0,
//   -0,
//   "",
//   null,
//   undefined,
//   NaN,
// ];

// console.log("Truthy dəyərlər:");
// values.forEach((value) => {
//   if (value) {
//     console.log(value);
//   }
// });

// Tapşırıq 3

// function truthyFalsyFunc(value1, value2) {
//   if (value1 && value2) {
//     alert("there is truthy");
//   } else if (value1 || value2) {
//     alert("only one truethy");
//   } else {
//     alert("There is not truthy");
//   }
// }

// truthyFalsyFunc(45, 45);
// truthyFalsyFunc(45, 0);
// truthyFalsyFunc(false, null);

// // Comparing Objects/Arrays

// // Tapşırıq 1

// let obj1 = { name: "Nijat", age: 26 };
// let obj2 = { name: "Nijat", age: 26 };
// let obj3 = obj2;
// console.log(obj1 === obj2); //false
// console.log(obj2 === obj3); //true
// console.log(obj1.name === obj2.name); //true

// Ternary Operator
// let ternaryOperator = +prompt("Enter a number");

// ternaryOperator % 2 === 0 ? console.log("Cüt ədəd") : console.log("Tək ədəd");
// ternaryOperator > 2 ? console.log("Böyük Rəqəm") : console.log("Kiçik Rəqəm");
////////////////////////////////////
// Switch Case

// Tapşırıq 1

// let weekDay = 6;

// switch (weekDay) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Tursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;

//   default:
//     console.log("That is not week");
// }

// // let numberOne = +prompt();

// switch (numberOne) {
//   case 1:
//     alert("zero");
//     break;
//   case 2:
//     alert("two");
//     break;
//   case 3:
//     alert("three");
//     break;

//   case 8:
//     alert("Eight");
//     break;

//   default:
//     console.log("There is no number");
// }

// // Logical Operators (&&,||,!!)
// // Tapşırıq 1 &&
// let user1 = +prompt("Enter the number");
// let user2 = +prompt("Enter the number");

// if (user1 > 0 && user2 > 0) {
//   alert("Hər iki ədəd müsbətdir");
// } else {
//   alert("Hər iki ədəd müsbət deyil");
// }

// // Tapşırıq 2 ||
// let numberss = +prompt("Enter the number");

// if (numberss > 10 || numberss < 5) {
//   alert("Ədəd uyğundur");
// } else {
//   alert("Ədəd uyğun deyil");
// }

// // Tapşırıq 3!!
// let value = prompt("Dəyər daxil edin:");

// if (!!values) {
//   console.log("It is true");
// } else {
//   console.log("It is false");
// }
/////////////////////////////////////////////////
// FUNCTION

function sum(num1, num2) {
  let calc = {
    toplama: num1 + num2,
    çıxma: num1 - num2,
    vurma: num1 * num2,
    bölmə: num2 !== 0 ? num1 / num2 : "cannot divide by zero",
  };

  return calc;
}

const n = sum(5, 2);

console.log(n);

// Arrow function

const calculatePower = (base, exponent = 2) => base ** exponent;

console.log(calculatePower(2));

// Rest operator

const sum1 = function (a, b, ...c) {
  console.log("First number:", a);
  console.log("Second number:", b);
  console.log("rest of number:", c);
};

console.log(sum1(12, 11, 15, 26, 28, 4, 5));
////////////////////////////////////////////////////

// Loops
// for
// let forNums = +prompt();

// for (let i = 1; i <= forNums; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// For-of | For-in
const arr = [10, 20, 30, 40, 50];

for (let item of arr) {
  console.log(item);
}
const obj = { name: "Ali", age: 25, city: "Baku" };

for (let item in obj) {
  console.log(`${item}: ${obj[item]}`);
}

// While | Do-While
let y = 1;
while (y <= 10) {
  console.log(y);
  y++;
}
let z = 1;
let num = 5;
do {
  console.log(z);
  z++;
} while (z <= num);

// Break | Countine
for (let i = 0; i < 20; i++) {
  console.log(i);

  if (i === 15) {
    console.log("Dövr 15-də dayandırıldı");
    break;
  }
}
for (let i = 0; i < 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// Arrays

// Multiple ways to create an Array
// 1.
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
// 2.
let arr2 = Array.of(6, 7, 8);
console.log(arr2);
// 3.
let arr3 = Array.from("HELLO");
console.log(arr3);
// 4.
let arr4 = Array(4);
console.log(arr4);

// 5.

let arr5 = ["A", "B", "C", "D", "E"];
console.log(arr5[2]);
arr5[1] = "JavaScript";
console.log(arr5);
arr5[arr5.length - 1] = "Array";
console.log(arr5);

// Array methods

// Push
let arr6 = ["A", "B", "C"];
arr6.push("D");
console.log(arr6);
// Pop
let arr7 = ["A", "B", "C"];
let removeElement = arr7.pop();
console.log(removeElement);
console.log(arr7);
// Shift
let arr8 = ["A", "B", "C"];
let removeElement2 = arr8.shift();
console.log(removeElement2);
console.log(arr8);
// Unshift
let arr9 = ["A", "B", "C"];
arr9.unshift("Z");
console.log(arr9);

// Splice
let arr10 = ["A", "B", "C", "D", "E"];

arr10.splice(2, 1, "x", "y");
arr10.splice(0, 1, "B", "Z");
console.log(arr10);

// Splice

let arr11 = ["A", "B", "C", "D", "E"];
console.log(arr11.slice(1, 4));
console.log(arr11.slice(2));
console.log(arr11.slice(-2));

// Concat | IndexOf | LastIndexOf
// Concat
let arr12 = [1, 2, 3];
let arr13 = [4, 5, 6];
let arr14 = arr12.concat(arr13);
console.log(arr14);
// IndexOf
let arr15 = ["apple", "banana", "cherry", "apple", "date"];
console.log(arr15.indexOf("apple"));
// LastIndexOf
console.log(arr15.lastIndexOf("apple"));

// Find || FindIndex
let arr16 = [5, 12, 8, 130, 44];

console.log(arr16.find((item) => item > 10));
console.log(arr16.findIndex((item) => item > 10));

let users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Veli" },
  { id: 3, name: "Ayşe" },
];

console.log(users.find((item) => item.id === 2));
console.log(users.findIndex((item) => item.id === 3));

// Includes

let fruits1 = ["apple", "banana", "cherry", "date"];

console.log(fruits1.includes("banana"));
console.log(fruits1.includes("grape"));
console.log(fruits1.includes("cherry", 2));
console.log(fruits1.includes("apple", 1));

let numbers1 = [10, 20, 30, 40, 50];
console.log(numbers1.includes(30));
console.log(numbers1.includes(60));

// Map | Filter | ForEach

let numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.map((item) => item * 2));
console.log(numbers2.filter((item) => item % 2 === 0));
let fruits2 = ["apple", "banana", "cherry", "date"];

fruits2.forEach((item) => {
  console.log(item.toUpperCase());
});

// Sort | Reverse

let fruits3 = ["banana", "apple", "cherry", "date"];

console.log(fruits3.sort());

let numbers3 = [30, 10, 20, 50, 40];
console.log(numbers3.sort((a, b) => a - b));
console.log(numbers3.sort((a, b) => b - a));
console.log(fruits3.reverse());
console.log(numbers3.reverse());

// Split | Join

let sentence = "JavaScript is fun and powerful";
let newArr = sentence.split(" ");
let newArr2 = newArr.join(",");
console.log(newArr);
console.log(newArr2);

let data = "apple,banana,cherry,date";

let newArr3 = data.split(",").join(",").toUpperCase();
console.log(newArr3);

// Reduce

const numbers4 = [10, 20, 30, 40, 50];

const sumCalc = numbers4.reduce((curr, next) => curr + next, 0);
const sumCalc1 = numbers4.reduce((curr, next) => curr * next, 1);
const sumCalc2 = numbers4.reduce((curr, next) => (curr > next ? curr : next));

console.log(`Cəm: ${sumCalc}`);
console.log(`Hasil: ${sumCalc1}`);
console.log(`Ən böyük ədəd: ${sumCalc2}`);

// SET METHODS

const numbersSet = [10, 20, 30, 10, 40, 20, 50];
console.log("İlkin massiv:", numbersSet);

const arrSet = new Set(numbersSet);
console.log("Unikal massiv (Set):", [...arrSet]);

arrSet.add(60);
console.log("Set-ə 60 əlavə edildikdən sonra:", [...arrSet]);

arrSet.delete(30);
console.log("Set-dən 30 silindikdən sonra:", [...arrSet]);

// MAP METHODS

const usersMap = new Map();
usersMap.set(1, { name: "Nijat", age: 26 });
usersMap.set(2, { name: "Aygun", age: 30 });
usersMap.set(3, { name: "Kamran", age: 22 });
usersMap.set(4, { name: "Sevinc", age: 28 });

usersMap.delete(3);
console.log(usersMap);

for (let [id, user] of usersMap) {
  user.age += 5;
}

console.log(usersMap);

////////////// MATH METODS /////////////

// Math.Pİ
const pi = Math.PI * 5;
console.log(pi);

// Math.round(), Math.floor(), Math.abs()
const round = Math.round(pi);
console.log(round);
const floor = Math.floor(pi);
console.log(floor);
const abs = Math.abs(-155);
console.log(abs);

// Math.sqrt(), Math.cbrt()
const sqrt = Math.sqrt(4);
console.log(sqrt); //kvadrat
const cbrt = Math.cbrt(8);
console.log(cbrt); //kub

// Math.pow()
const pow = Math.pow(5, 3);
console.log(pow);

Math.max(), Math.min();
const numsArr = [10, -5, 20, 0, 15];
const min = Math.min(...numsArr);
console.log(min);
const max = Math.max(...numsArr);
console.log(max);

// Math.random()
const random = Math.random();
console.log(random);
const randomBig = Math.random() * 10 + 1;
console.log(randomBig);

const fruitsArr = ["Apple", "Banana", "Cherry", "Orange"];

const randomIndx = Math.floor(Math.random() * fruitsArr.length);
const randomArr = fruitsArr[randomIndx];
console.log(randomArr);

// Spread operator

const spread1 = [1, 2, 3];
const spread2 = [4, 5, 6];
const totalSpread = [...spread1, ...spread2];
console.log(totalSpread);

const spreadObject = {
  name: "Nijat",
  age: 26,
};
const totalObject = { ...spreadObject, city: "Baku" };
console.log(totalObject);

const spreadFunc = function (...sum) {
  return sum.reduce((curr, next) => curr + next, 0);
};
console.log(spreadFunc(1, 2, 3));
console.log(spreadFunc(11, 22, 33));

// Numbers

// toFixed
const fixedNums = 123.4567;
console.log(fixedNums.toFixed(1)); //Burda niyə 123.4 almaq yerinə, 123.5 alınır?
// toPrecision
const precisionNums = 123.4567;
console.log(precisionNums.toPrecision(5));
// parseFloat and  parseİnt
console.log(parseFloat("123.45abc")); // 123.45
console.log(parseInt("123.45abc"));
123;
// new Intl.NumberFloat
const intNums = 1234567.89;
const formatter = new Intl.NumberFormat("az-AZ", {
  style: "currency",
  currency: "AZN",
});
console.log(formatter.format(intNums));

// Explicit and Implicit Castings
let castings = "42";
console.log(typeof Number("42"));
console.log(typeof +castings);
console.log(typeof !!1);

const impNum = 42;
const impStr = "10";
console.log(impNum + impStr);

//////////// STRİNG METHODS /////////////
// replace() and replaceAll()
const textRep = "JavaScript is fun. JavaScript is powerful.";
console.log(textRep.replace("JavaScript", "JS"));
console.log(textRep.replaceAll("JavaScript", "JS"));

// startWith() and endWith()
const startArr = "Hello, world!";
console.log(startArr.startsWith("Hello"));
console.log(startArr.endsWith("world!"));

// includes()
const incArr = "The quick brown fox jumps over the lazy dog.";
console.log(incArr.includes("fox"));

// indexOf() and lastIndexOf()
const wordsIndex = "apple banana apple cherry";
console.log(wordsIndex.indexOf("apple"));
console.log(wordsIndex.lastIndexOf("apple"));

// trim(), trimStart() and trimEnd()
const messyString = "   Hello, world!   ";
console.log(messyString.trim());
console.log(messyString.trimStart());
console.log(messyString.trimEnd());

// toUpperCase() and toLowerCase()
const name = "john doe";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// padStart() and padEnd()
const numPad = "5";
console.log(numPad.padStart(3, "0"));
console.log(numPad.padEnd(3, "0"));

// repeat()
const word = "Hi!";
console.log(word.repeat(3));

// slice()
const sentenSl = "Hello, world!";
console.log(sentenSl.slice(-6));

// split()
const fruitsSp = "apple,banana,cherry";
console.log(fruitsSp.split(", "));

// concat()
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(", ", str2));

/////////////////////////// ASCII //////////////////////

console.log("A".charCodeAt());
console.log(String.fromCharCode(65));
const wordAsc = "Hello";
console.log([...wordAsc].map((char) => char.charCodeAt()));
const asciiCodes = [72, 101, 108, 108, 111];
console.log(String.fromCharCode(...asciiCodes));

///////////////////// String Encoding / Decoding /////////////////
// encodeURİ  and decodeURİ
const url = "https://example.com/search?name=John Doe&city=Baku";
console.log(encodeURI(url));
console.log(decodeURI(url));

// encodeURIComponent və decodeURIComponent
const param = "name=John Doe&city=Baku";
console.log(encodeURIComponent(param));
console.log(decodeURIComponent(param));

// encodeURI, və encodeURIComponent
const urlPart = "https://example.com/path with spaces";
console.log(encodeURI(urlPart));

const queryParam = "key=value with spaces";
console.log(encodeURIComponent(queryParam));

///////////////// Object //////////////////////////
// More About Objects

const userObj = {
  name: "Nijat",
  age: 26,
  city: "Baku",
  introduce: function () {
    return `My name is ${this.name} and I live in Baku.`;
  },
};
console.log(
  `My name is ${userObj.name} my age is ${userObj.age} and i live in ${userObj.city}`
);

userObj.country = "Azerbaijan";

console.log(userObj);

delete userObj.age;
console.log(userObj);

console.log(userObj.introduce());
console.log(userObj["city"]);

// Spread Operator | Deep Copy
const userSpr = {
  name: "Nijat",
  age: 26,
  address: {
    city: "Baku",
    country: "Azerbaijan",
  },
};

const userSpr2 = { ...userSpr };
console.log(userSpr2);

console.log((userSpr2.name = "Ali"));
console.log(userSpr);
console.log(userSpr2);
userSpr.address.city = "Ganja";
console.log(userSpr);
console.log(userSpr2);
// spread obyekti nested obyektləri(yəni non-primitiv dəyərləri) deep copy edə bilmir.
const deepCopy = JSON.parse(JSON.stringify(userSpr));
deepCopy.address.city = "Sumqayıt";
console.log(userSpr);
console.log(deepCopy);

///////////////// Object Destructuring //////////////////////////

// 1. Sadə Destructuring
const userDest = {
  names: "Nijat",
  age: 26,
  city: "Baku",
  country: "Azerbaijan",
};
const { names, city } = userDest;
console.log("Sadə destructuring:", names, city);

// 2. Dəyişdirilmiş Adlarla Destructuring
const { names: fullName, age: userAge } = userDest;
console.log("Dəyişdirilmiş adlar:", fullName, userAge);

// 3. Default Dəyərlər
const settings = {
  theme: "dark",
  notifications: true,
};
const { theme, language = "en" } = settings;
console.log("Default dəyərlər:", theme, language);

// 4. İç-içə Obyektlər üçün Destructuring
const company = {
  namee: "TechCorp",
  address: {
    cities: "Baku",
    country: "Azerbaijan",
  },
  employees: 500,
};
const {
  namee,
  address: { cities, country },
} = company;
console.log("İç-içə destructuring:", namee, cities, country);

// 5. Funksiyada Destructuring
function displayUser({ name, age }) {
  console.log(`Funksiyada destructuring: Name: ${name}, Age: ${age}`);
}
const userDes = { name: "Nijat", age: 26 };
displayUser(userDes);

///////////////////// Object.create() and Object.freeze() //////////////////////
// Object.create()
const personPrototype = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const person = Object.create(personPrototype);
person.name = "Nijat";
console.log(person.greet());
console.log(person);

// Object.freeze()
const userFree = {
  name: "Ali",
  age: 30,
  city: "Baku",
};

Object.freeze(userFree);
userFree.country = "Azerbaijan";
console.log((userFree.age = 35));
console.log(userFree);

//////////////////////// Object.defineProperty() | Object.getOwnPropertyDescription() ///////////////////
// Object.getOwnPropertyDescriptor()
const objectGet = {
  name: "Nijat",
  age: 26,
  city: "Baku",
};

const descripter = Object.getOwnPropertyDescriptor(objectGet, "name");
console.log(descripter);
// Object.defineProperty()
const descripter2 = Object.defineProperty(objectGet, "city", {
  writable: false,
  enumerable: false,
  configurable: false,
});
objectGet.city = "Ganja";
for (let key in objectGet) {
  console.log(key);
}
console.log(descripter2);
/////////////////// THİS KEYWORD //////////////////////////

//This in Object Methods):
const userThis = {
  name: "Nijat",
  age: 26,
  introduce: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  },
};

userThis.introduce(); // this burada metodun aid olduğu obyektdə isitnad edir

//This in Global Context):
console.log(this); // This burada qlobal obyekti(windows) götərir

//This in Arrow Functions):
// const person = {
//   name: "Ali",
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// }; //Arrow funksiyalarda this olmadığı üçün qlobal obyektə istinad edir.

//////////////////////// CALL | APPLY | BIND //////////////////////
/////////

const personCall = {
  name: "Nijat",
  age: 26,
};

function greet(message) {
  return console.log(
    `${message} My name is ${this.name} an my age is ${this.age}`
  );
}
console.log(greet.call(personCall, "Hello"));
console.log(greet.apply(personCall, ["Hi"]));
const greetBind = greet.bind(personCall);
console.log(greetBind("Hey"));

//////////////////// Getter | Setter //////////////////////

const getSet = {
  firstName: "Nijat",
  lastName: "Memmedov",
  get fullName() {
    return `My name is ${this.firstName} and my lastname is ${this.lastName}`;
  },

  set fullName(name) {
    const parts = name.split(" ");
    // this.firstName = parts[0];
    // this.lastName = parts[1];
    this.fullName = parts[0];
  },
};

console.log(getSet.fullName);
console.log(getSet.fullName);
////////////////////// Try Catch  Finally ////////////////////
const divideNumbers = function (numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error("Cann't divide by zero");
    }

    const result = numerator / denominator;
    console.log(result);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Finally block");
  }
};

console.log(divideNumbers(10, 0));
console.log(divideNumbers(10, 2));

/////////////// Dates Overview ////////////////////
// Date
const today = new Date();
const today2 = new Date(2023, 12, 25);
const todayOne = new Date(2023, 1, 1);
const todayTwo = new Date(2023, 12, 31);
console.log(today2);
// getFullYear()
console.log(today.getFullYear());
// getMonth()
console.log(today.getMonth() + 1);
// getDate()
console.log(today.getDate());
// getDay()
console.log(today.getDay());
console.log(today);
let bigDate = todayOne > todayTwo ? "Big date" : "Small Date";
console.log(bigDate);
const todayThree = new Date(2023, 12, 31);
console.log(todayThree.getDate() + 5);
console.log(todayThree.getDate() - 2);
/////////////////////////// Formatting Dates ////////////////////
const todayFor = new Date();
// toDateString()
console.log(todayFor.toDateString());
// toLocaleString()
console.log(todayFor.toLocaleString());
// console.log(todayFor.());
// manuel config
const config = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
};
console.log(todayFor.toLocaleString("en-us", config));
// toISOString()
console.log(todayFor.toISOString());
////////////////////////////// Time Stamp ////////////////////////
console.log(Date.now());
console.log(Math.floor(Date.now() / 1000));
console.log(new Date().getTime());
const date1 = new Date().getTime();
const date2 = new Date(date1);
console.log(date2);
const date3 = new Date("2023,11,25");
const date4 = new Date("2023,11,24");
const differenceInMilliSeconds = date3 - date4;
console.log(differenceInMilliSeconds);

const differenceInSeconds = differenceInMilliSeconds / 1000;
console.log(differenceInSeconds);
const differenceInMinutes = differenceInMilliSeconds / 60;
console.log(differenceInMinutes);
const differenceInHours = differenceInMilliSeconds / 60;
console.log(differenceInHours);
const differenceInDays = differenceInMilliSeconds / 24;
console.log(differenceInDays);

//1. ECMAScript tam olaraq nədir?
// 2. array və stringdə oxşar metodlar var, onlar bir-birləri ilə nədən fərqlənirlər.
// 3. Deep və shallow kopy haqqında
// 4. Truly və ya falsy true və false arasındaki fərq haqqında
// 5. setter və getter metodlarının obyekt daxilində birlikdə yazılmasının əhəmiyyəti
// 6. Arrayin orginal array üzərində dəyişiklik edən və etməyən metodları necə yadda saxlamaq olar?
// 7. toİsostring() apilərlə işləyərkən əhəmiyyəti time zone nədir
// 8. timeStamp niyə sırf 1970 dən başlayır, yəni sabit dəyəri var? Və tam olaraq niyə var? Date.now() ilə new Date().getTime() arasındaki fərq
