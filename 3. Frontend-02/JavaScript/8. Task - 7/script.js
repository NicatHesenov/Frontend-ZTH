let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
let btnConfirm = document.querySelector(".btn-confirm");
let btnCancel = document.querySelector(".btn-cancel");
let input = document.querySelector("#fname");
let btnOpen = document.querySelector(".btn-open");
closeBtn.addEventListener("click", () => {
  modal.classList.add("hide");
  btnOpen.classList.remove("hide");
});
btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("hide");
  btnOpen.classList.remove("hide");
});
btnConfirm.addEventListener("click", (e) => {
  e.preventDefault();

  alert(`${input.value}`);
  modal.classList.add("hide");
  btnOpen.classList.remove("hide");
  input.value = "";
});

btnOpen.addEventListener("click", () => {
  modal.classList.remove("hide");
  btnOpen.classList.add("hide");
});
