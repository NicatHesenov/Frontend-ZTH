let accordionBtn = document.querySelectorAll(".accordion__btn");
let accordionContent = document.querySelectorAll(".accordion__content");

accordionBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    accordionContent[i].classList.toggle("active");
  });
});
