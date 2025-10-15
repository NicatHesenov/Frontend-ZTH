// products obyektindən(id, name, img) ibarət array
const products = [
  { id: 1, name: "procuct 1", img: "./img/product1.jpeg" },
  { id: 2, name: "procuct 2", img: "./img/product2.jpeg" },
  { id: 3, name: "procuct 3", img: "./img/product3.jpeg" },
  { id: 4, name: "procuct 1", img: "./img/product1.jpeg" },
  { id: 5, name: "procuct 2", img: "./img/product2.jpeg" },
  { id: 6, name: "procuct 3", img: "./img/product3.jpeg" },
];
// Favorilər siyahısını saxlamaq üçün boş array
let favoritArr = [];

// htmldəki section
const mainSection = document.querySelector(".main__section");

// Bütün obyektlərdən ibarət arraylər üzərində dövr edirik
products.forEach((product) => {
  //sectiona əlavə etmək üçün div yaradırıq
  const pro = document.createElement("div");
  // divə class əlavə edirik
  pro.classList.add("product");
  // HTML də olduğu kimi data-id atributu əlavə edirik(id ləri saxlamaq üçün)
  pro.setAttribute("data-id", product.id);

  // JS vasitəsi ilə html əlavə edirik
  pro.innerHTML = `
  <img src="${product.img}" alt="${product.name}"/>

    <h2 class="title"> ${product.name} <span class="plus"><i class="fa-solid fa-heart"></i></i></span>
    </h2>

  `;
  // product adlı divi HTML dəki section əlavə edirik
  mainSection.appendChild(pro);

  // Hər product div-in öz daxilindəki .plus ikonunu tapmaq üçün (qlobal yox, lokal axtarış)
  const plus = pro.querySelector(".plus");

  // plus classına click eventi əlavə edirik
  plus.addEventListener("click", (e) => {
    e.preventDefault();

    // klik etdikdə ilk id tapır
    let found = favoritArr.find((item) => item.id === product.id);

    // əgər trudursa, yəni favoritArr içərisindədirsə
    if (found) {
      // filter elə çıxar
      favoritArr = favoritArr.filter((item) => item.id !== product.id);
      // rəng vermə, default olaraq qalsın
      plus.style.color = "";
    } else {
      // əgər yoxdursa favoritArr arryinə əlavə et
      favoritArr.push(product);
      // color rəngi qırmızı olsun
      plus.style.color = "red";
    }
    // favoritArr arrayini yoxla
    console.log(favoritArr);
  });
});
