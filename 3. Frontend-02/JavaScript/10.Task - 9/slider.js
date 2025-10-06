const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn-prev");
const btnRight = document.querySelector(".btn-next");

let currentSlide = 0;

const showSlide = (i) => {
  slides.forEach((item) => {
    item.classList.remove("active");
  });

  slides[i].classList.add("active");
};

btnRight.addEventListener("click", () => {
  currentSlide++;

  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
});

btnLeft.addEventListener("click", () => {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
});
