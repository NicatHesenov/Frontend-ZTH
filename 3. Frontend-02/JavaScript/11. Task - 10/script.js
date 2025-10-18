// Bütün accordion düymələrini seçirik
let accordionBtn = document.querySelectorAll(".accordion__btn");

// Bütün accordion məzmun hissələrini seçirik
let accordionContent = document.querySelectorAll(".accordion__content");

// forEach() — massivdəki (və ya NodeList-dəki) hər bir elementi dövrə salmaq üçün istifadə olunur
// Bu funksiya iki parametr qəbul edir:
// 1. btn  -> cari element (yəni hər bir .accordion__btn düyməsi)
// 2. i    -> həmin elementin indeks nömrəsi (0, 1, 2 və s.)
accordionBtn.forEach((btn, i) => {
  // Hər bir düyməyə klik hadisəsi əlavə edirik
  btn.addEventListener("click", () => {
    // İndekslər eyni olduğu üçün klik edilən düyməyə uyğun məzmunu tapırıq
    // toggle() -> əgər "active" class-ı yoxdursa əlavə edir, varsa silir
    accordionContent[i].classList.toggle("active");
  });
});
