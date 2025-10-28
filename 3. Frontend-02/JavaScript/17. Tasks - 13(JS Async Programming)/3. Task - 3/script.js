// Bütün classları götürürük
const boxes = document.querySelectorAll(".traffic-light__container-boxes");
const durations = { red: 3000, yellow: 1000, green: 3000 };
// 1) Bütün lampaları söndürən funksiya
function resetLights() {
  boxes.forEach((box) => box.classList.remove("active"));
}

// 2) Qırmızı (3 saniyə), bitəndə sarını çağırır
function redLight() {
  boxes[0].classList.add("active"); // dərhal qırmızı yansın
  setTimeout(() => {
    boxes[0].classList.remove("active"); // 3s sonra qırmızı sönsün
    yellowLight(); // və sarını başlat
  }, durations.red);
}

// 3) Sarı (1 saniyə), bitəndə yaşılı çağırır
function yellowLight() {
  boxes[1].classList.add("active");
  setTimeout(() => {
    boxes[1].classList.remove("active");
    greenLight();
  }, durations.yellow);
}

// 4) Yaşıl (3 saniyə), bitəndə dövrü yenidən başlat
function greenLight() {
  boxes[2].classList.add("active");
  setTimeout(() => {
    boxes[2].classList.remove("active");
    printHello(); // yenidən başlanğıc
  }, durations.green);
}

// 5) Dövrü başlatan funksiya
function printHello() {
  resetLights();
  redLight();
}

// start
printHello();
