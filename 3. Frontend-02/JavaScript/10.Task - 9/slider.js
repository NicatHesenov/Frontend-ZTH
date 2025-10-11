const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn-prev");
const btnRight = document.querySelector(".btn-next");

let currentSlide = 0; // 0 cı index(ilk slide(yəni şəkil)) // btnRight klikləndikdə 1 artırılacaq
// btnLeft klikləndikdə 1 azaldılacaq
// currentSlide dəyişəni ilə hazırda hansı slaydın göstərildiyini bilirik
// slides.length - 1 // sonuncu indexi tapmaq üçün istifadə edirik
// slides.length // 4 ədədi qaytarır
// slides.length - 1 // 3 cü indexi qaytarır
// slides[3] // 4 cü slayd(yəni şəkil) qaytarır
const showSlide = (i) => {
  slides.forEach((item) => {
    item.classList.remove("active");
  }); // querySelectorAll classları array kimi saxladığı üçün foreach ilə gəzib bütün classlardan active classını silir
  // sonra isə
  // slides[i] // i parametr olaraq ötürülən indexdir
  // məsələn 1 ci indexi ötürsək
  // slides[1] // 2 ci slayd(yəni şəkil) qaytarır
  // sonra isə
  // slides[1].classList.add("active") // 2 ci slaydın classına active classını əlavə edir
  // nəticədə yalnız 2 ci slayd görünəcək
  // məsələn 3 cü indexi ötürsək
  // slides[3] // 4 cü slayd(yəni şəkil) qaytarır
  // sonra isə
  // slides[3].classList.add("active") // 4 cü slaydın classına active classını əlavə edir
  // nəticədə yalnız 4 cü slayd görünəcək
  slides[i].classList.add("active"); // 1 ci yəni ikinci indexinə active əlavə olunur
};

btnRight.addEventListener("click", () => {
  currentSlide++; // 1 artır(2,3..)

  if (currentSlide > slides.length - 1) {
    // 4 > 3 olduqda if blokuna daxil olur
    // slides.length - 1 // sonuncu indexi tapmaq üçün istifadə edirik
    // slides.length // 4 ədədi qaytarır
    // 1 ci index > sonuncu yəni 3 cü index( sonuncu indexdən bir çıxr 4 -1 = 3)
    currentSlide = 0; // 4 > 3 olduqda if blokuna daxil olur currentSlide sıfırlanır(1 ci şəkilə qayıdır)
  }

  showSlide(currentSlide); // funuksiyayaya parametr olaraq ötürür
  // məsələn 1 ci indexi ötürür
  // showSlide(1) // 2 ci slayd(yəni şəkil) göstərilir
  // məsələn 2 ci indexi ötürür
  // showSlide(2) // 3 cü slayd(yəni şəkil) göstərilir
  // məsələn 3 cü indexi ötürür
  // showSlide(3) // 4 cü slayd(yəni şəkil) göstərilir
});

btnLeft.addEventListener("click", () => {
  currentSlide--; // 4,3,2,1,0,-1,-2...
  // 1 azald(3,2,1,0,-1,-2..)
  // currentSlide dəyişəni ilə hazırda hansı slaydın göstərildiyini bilirik
  // slides.length - 1 // sonuncu indexi tapmaq üçün istifadə edirik
  // slides.length // 4 ədədi qaytarır
  // slides.length - 1 // 3 cü indexi qaytarır
  // slides[3] // 4 cü slayd(yəni şəkil) qaytarır
  if (currentSlide < 0) {
    // mənfi olduqda sıfırdan kiçik olur // 4,3 və ya 2,1 olduqda if blokuna daxil olmur
    currentSlide = slides.length - 1; // düşür bura yəni 4-1 = 3 cü index, yəni sonuncu şəkili qaytarır
  }

  showSlide(currentSlide); // məsələn 3 cü indexi parametr kimi ötürür
  // showSlide(3) // 4 cü slayd(yəni şəkil) göstərilir
  // məsələn 2 ci indexi parametr kimi ötürür
  // showSlide(2) // 3 cü slayd(yəni şəkil) göstərilir
  // məsələn 1 ci indexi parametr kimi ötürür
  // showSlide(1) // 2 ci slayd(yəni şəkil) göstərilir
  // məsələn 0 cı indexi parametr kimi ötürür
  // showSlide(0) // 1 ci slayd(yəni şəkil) göstərilir
});

// Proseslər bu formada dövr edir
// 0 -> 1 -> 2 -> 3 -> 0 -> 1 -> 2 -> 3 ...
// 0 <- 1 <- 2 <- 3 <- 0 <- 1 <- 2 <- 3 ...
//
