let hamburgerBtn = document.querySelector(".hamburger-btn");
let navList = document.querySelector(".nav__list");
let closeBtn = document.querySelector(".close-btn");
let imgDiv = document.querySelector(".img");
imgDiv.setAttribute("src", "./hiking.jpg");

hamburgerBtn.addEventListener("click", () => {
  navList.classList.remove("hide");
  navList.classList.add("show");
  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navList.classList.remove("show");
  navList.classList.add("hide");
  closeBtn.style.display = "none";
  hamburgerBtn.style.display = "block";
});
