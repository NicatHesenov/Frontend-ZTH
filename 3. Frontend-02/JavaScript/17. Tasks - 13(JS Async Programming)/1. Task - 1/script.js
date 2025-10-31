const addToCartBtn = document.querySelector(".add-to-cart");

addToCartBtn.addEventListener("click", () => {
  addToCartBtn.textContent = " Adding to cart...";
  addToCartBtn.disabled = true;
  addToCartBtn.style.backgroundColor = "red";

  setTimeout(() => {
    addToCartBtn.textContent = "Added To Cart!";
    addToCartBtn.style.backgroundColor = "green";
    setTimeout(() => {
      addToCartBtn.textContent = "Add to Cart";

      addToCartBtn.style.backgroundColor = "#020024";
      addToCartBtn.disabled = false;
    }, 2000);
  }, 3000);
});
