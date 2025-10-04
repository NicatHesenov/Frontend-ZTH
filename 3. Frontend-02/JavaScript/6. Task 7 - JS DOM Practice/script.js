// 🔹HTML-də bir kvadrat qutu (div) düzəlt – ölçüsü məsələn 200x200 px olsun. Əvvəlcə rəngi ağ olsun.
// 3 dənə button əlavə et: Qırmızı, Yaşıl, Mavi.
// JavaScript-də:
// Hər bir button-a klik olanda həmin rəng qutunun fonuna (backgroundColor) yazılsın.
// Eyni zamanda qutunun içində həmin rəngin adı mətndə görünsün (məs: “Qırmızı”).
// İstifadəçi hansı rəngə klik edirsə, qutu həm rəngini dəyişəcək, həm də içində həmin rəngin adı yazılacaq.

let btnFirst = document.querySelector(".btn-first");
let btnSecond = document.querySelector(".btn-second");
let btnThird = document.querySelector(".btn-third");
let box = document.querySelector(".box");

btnFirst.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
  box.style.color = "white";
  box.textContent = "MAVI";
});
btnSecond.addEventListener("click", () => {
  box.style.backgroundColor = "red";
  box.style.color = "white";
  box.textContent = "QIRMIZI";
});
btnThird.addEventListener("click", () => {
  box.style.backgroundColor = "green";
  box.style.color = "white";
  box.textContent = "YAŞIL";
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 🔹HTML-də bir paragraf (p) olsun, məsələn: “Salam, mən görünürəm!”
// Bir button olsun: “Gizlət/Göstər” yazılı.
// JavaScript-də:
// İstifadəçi button-a klik edəndə:
// əgər paragraf görünürsə → gizlənsin
// əgər paragraf gizlidirsə → yenidən görünsün
// Düyməyə hər dəfə basanda mətn bir dəfə gizlənəcək, bir dəfə görünəcək.
let text = document.querySelector(".text");
let btnText = document.querySelector(".btn-text");

btnText.addEventListener("click", () => {
  if (text.style.display === "inline-block") {
    text.style.display = "none";
  } else {
    text.style.display = "inline-block";
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🔹HTML-də bir div olsun: “🎈” emojisi ilə balon təsviri.

// Bir button əlavə et: “Şişir”.
// JavaScript-də:
// Düyməyə klik edəndə div-in ölçüləri (style.width və style.height) bir az artsın.
// Div-in içindəki emoji (innerText) mərkəzdə qalsın.
// İstifadəçi button-a hər klik etdikcə qırmızı balon böyüyəcək, vizual olaraq balon şişmiş kimi görünəcək.

let ball = document.querySelector(".ball");
let ballBtn = document.querySelector(".button-ball");
let fontSize = 20; // 20
ballBtn.addEventListener("click", () => {
  fontSize += 5; // fontSize = fontSize +5 // 25,30,35...

  ball.style.fontSize = fontSize + "px"; // 25px, 30px...
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🔹Bir <span> və iki button (“+1”, “-1”).
// Button-lara klik ediləndə span içindəki sayı artır və ya azalır (innerText).
// İstifadəçi kliklərlə sayğacı idarə edir.
let btnOne = document.querySelector(".first-btn");
let num = document.querySelector(".num");
let btnTwo = document.querySelector(".second-bt");
btnOne.addEventListener("click", () => {
  num.textContent = +num.textContent + 1;
});
btnTwo.addEventListener("click", () => {
  num.textContent = +num.textContent - 1;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🔹Div və iki button (“Sağa”, “Sola”).
// Button-lar klik edildikdə div marginLeft və ya marginRight dəyişir.
// Qutu kliklə sağa və sola hərəkət edir.

let boxSecond = document.querySelector(".box-second");
let buttonLeft = document.querySelector(".margin-left");
let buttonRight = document.querySelector(".margin-right");

buttonLeft.addEventListener("click", () => {
  boxSecond.classList.add("box-left");
  boxSecond.classList.remove("box-right");
});
buttonRight.addEventListener("click", () => {
  boxSecond.classList.add("box-right");
  boxSecond.classList.remove("box-left");
});
