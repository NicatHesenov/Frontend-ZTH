// --- DOM elementlərini seçirik ---
const btnAllPrducts = document.querySelector(
  ".section__container--buttons-all"
);
const btnElectronics = document.querySelector(
  ".section__container-buttons--electronics"
);
const btnJewelry = document.querySelector(
  ".section__container-buttons--Jewelry"
);
const btnMen = document.querySelector(".section__container-buttons--men");
const btnWoman = document.querySelector(".section__container-buttons-woman");
const products = document.querySelector(".section__products");
const inputSearc = document.querySelector(".section__search-input");
///////////////////////////////////////////////////////////////////////////
// API-dən gələn bütün məhsulları saxlayacağımız global dəyişən
let data = [];

//////////////////////////////////////////////////////////////////////////
// Məhsulları HTML-də göstərən funksiya
function showProducts(data) {
  // Əvvəlcə məhsullar bölməsini təmizləyirik (əvvəlki məlumatları silirik)
  products.innerHTML = "";
  // Əgər data mövcuddursa və boş deyilsə
  if (data && data.length > 0) {
    // Hər bir məhsulu data massivindən alırıq
    data.map((item) => {
      // Hər məhsul üçün HTML kodu əlavə edirik
      products.innerHTML += `
       <div class="section__products-card">
            <img
              class="section__products-card__img"
              src="${item.image}"
              alt="Product image"
            />
            <h3 class="section__products-card__title">
             ${item.title}
            </h3>
            <p class="section__products-card__price">$${item.price}</p>
          </div>
      `;
    });
  }
}

//////////////////////////////////////////////////////////////////////////
// API-dən məlumatı gətirən asinxron funksiya
const getData = async (product = "") => {
  // Əgər parametr (product) verilibsə — yəni müəyyən kateqoriya seçilibsə
  if (product) {
    // Həmin kateqoriyanın məhsullarını API-dən alırıq
    const resForCategory = await fetch(
      ` https://fakestoreapi.com/products/category/${product}`
    );
    // Cavabı JSON-a çeviririk və data massivinə yazırıq
    data = await resForCategory.json();
  } else {
    // Əgər parametr verilməyibsə — bütün məhsulları alırıq
    const res = await fetch("https://fakestoreapi.com/products");
    data = await res.json();
  }
  // Gətirilən məhsulları ekrana çıxarırıq
  showProducts(data);
  // Axtarış funksiyasını aktiv edirik (input-da yazdıqca işləsin deyə)
  searching();
};
//////////////////////////////////////////////////////////////////////////

// Real-time axtarış funksiyası (input-da yazdıqca işləyir)
function searching() {
  // input-da hər dəyişiklik olduqda bu funksiya işləyəcək
  inputSearc.addEventListener("input", (e) => {
    // Yazılan dəyəri götürürük, boşluqları silirik və kiçik hərfə çeviririk
    const value = e.target.value.trim().toLowerCase();
    // Əgər 3-dən az hərf yazılıbsa, axtarış etmirik
    if (value.length < 3) return;

    // Yazılan sözə uyğun məhsulları data massivindən süzürük
    const filtered = data.filter((product) => {
      // Məhsulun başlığında (title) axtarış sözünün olub-olmamasını yoxlayırıq
      return product.title.toLowerCase().includes(value);
    });
    // Köhnə məhsulları ekrandan silirik
    products.innerHTML = "";

    // Tapılmış məhsulları ekrana əlavə edirik
    filtered.forEach((item) => {
      products.innerHTML += `
    <div class="section__products-card">
    <img
    class="section__products-card__img"
    src="${item.image}"
    alt="Product image"
    />
    <h3 class="section__products-card__title">
    ${item.title}
    </h3>
        <p class="section__products-card__price">$${item.price}</p>
        </div>
        `;
    });
  });
}
//////////////////////////////////////////////////////////////////////////
// Butonlara klik zamanı uyğun kateqoriyadakı məhsulları gətiririk
btnAllPrducts.addEventListener("click", () => getData(""));
btnElectronics.addEventListener("click", () => getData("electronics"));
btnJewelry.addEventListener("click", () => getData("jewelery"));
btnMen.addEventListener("click", () => getData("men's clothing"));
btnWoman.addEventListener("click", () => getData("women's clothing"));

// Səhifə ilk açıldıqda avtomatik bütün məhsulları göstər
getData();
