const productSelect = document.getElementById("product");
const quantityinput = document.getElementById("quantity");
const orderSummary = document.getElementById("orderSummary");
const orderFrom = document.getElementById("orderForm");
const totalPriceDisplay = document.getElementById("totalPrice");
//
const button = document.querySelector(".newBtn");
const newClass = document.querySelector(".newClass");
const newImage = document.querySelector(".newImage");
const imageBtn = document.querySelector(".btnImage");
const newBtn = document.querySelector(".addBtn");
const hideBtn = document.querySelector(".hideBtn");
const body = document.querySelector("body");
const fromBtn = document.querySelector(".fromBtn");
const handleChange = (e) => {
  const price = parseFloat(productSelect.value || 0);
  const quantity = parseInt(quantityinput.value || 0);

  const result = price * quantity;
  totalPriceDisplay.innerText = `$${result}`;
  console.log({ price, quantity, result });
};
productSelect.addEventListener("change", handleChange);
quantityinput.addEventListener("change", handleChange);

orderFrom.addEventListener("submit", (event) => {
  event.preventDefault();

  orderSummary.innerHTML = `
    <h2>Order Summary</h2>
    <p>Product: ${productSelect.value}</p>
    <p>Quantity: ${quantityinput.value}</p>
    <p>Total Price: ${totalPriceDisplay.innerText}</p>
    `;
});

// 1. *Element seçimi və dəyişdirmə*: Səhifədəki bütün başlıqları (h1, h2) tapın və onların mətnini qırmızı rəngə çevirin.
const headings = document.querySelectorAll("h1, h2");
headings.forEach((headings) => {
  headings.style.color = "red";
});
// 2. *Düymə kliki ilə mətn dəyişdirmə*: Bir düymə yaradın və ona klik ediləndə "Salam Dünya" mətni göstərən bir paragraf əlavə edin.

button.addEventListener("click", (e) => {
  e.preventDefault();
  newClass.innerHTML = `<p>Salam Dünya</p>`;
});
// 3. *Şəkil dəyişdirmə*: Səhifədə bir şəkil yerləşdirin və düymə kliki ilə başqa bir şəklə dəyişdirin.
imageBtn.addEventListener("click", (e) => {
  e.preventDefault();

  newImage.src = "./assets/img-2.jpg";
});
// 4. *Siyahı elementləri əlavə etmə*: İstifadəçinin daxil etdiyi mətni götürüb bir siyahıya element kimi əlavə edən funksiya yazın.
newBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#userInput").value;

  const li = document.createElement("li");
  li.textContent = input;

  document.getElementById("list").appendChild(li);

  input.value = "";
});
// 5. *Elementləri gizlətmə/göstərmə*: Bir düymə ilə səhifədəki müəyyən bir elementi gizlədib/göstərən funksiyalar yazın.

hideBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (newImage.style.display === "none") {
    newImage.style.display = "block";
    console.log("show");
  } else {
    newImage.style.display = "none";
    console.log("hide");
  }
});

// 1. *Dinamik cədvəl yaratma*: İstifadəçidən alınan məlumatlarla dinamik olaraq cədvəl sətirləri əlavə edən bir proqram yazın.
fromBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameIn = document.querySelector(".nameIn").value;
  const ageIn = document.querySelector(".ageIn").value;
  const tableBody = document.querySelector(".tableBody");
  if (nameIn === "" || ageIn === "") {
    alert("It is empty");
  }

  const newTr = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = nameIn;
  const ageCell = document.createElement("td");
  ageCell.textContent = ageIn;

  newTr.appendChild(nameCell);
  newTr.appendChild(ageCell);

  tableBody.appendChild(newTr);

  document.querySelector(".nameIn").value = "";
  document.querySelector(".ageIn").value = "";
});
// 2. *Form validasiyası*: Ad, e-poçt və şifrədən ibarət bir forma yaradın və JavaScript ilə bu sahələri validasiya edin (boş olmama, e-poçt formatı, şifrə gücü).

const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#fname").value;
  const emalInput = document.querySelector("#eml").value;
  const pwdInput = document.querySelector("#pwd").value;
  const errorText = document.createElement("p");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

  if (nameInput === "") {
    errorText.textContent = "Ad boş ola bilməz!";
    return;
  }

  if (!emailRegex.test(emalInput)) {
    errorText.textContent = "E-poçt formatı düzgün deyil!";
    return;
  }

  if (!strongPasswordRegex.test(pwdInput)) {
    errorText.textContent = "şifrə güclü deyil!";
    return;
  }

  errorText.style.color = "green";

  console.log([nameInput, emalInput, pwdInput]);

  document.querySelector("#myForm").appendChild(errorText);
});
// 3. *Drag-and-drop funksionallığı*: Səhifədə elementləri sürükləyib buraxmağa imkan verən bir funksionallıq yazın.

// 4. *Tab sistemi*: Klikləmə ilə müxtəlif məzmunları göstərən sadə bir tab sistemi yaradın.

// 5. *Lokalda məlumat saxlama*: İstifadəçinin daxil etdiyi məlumatları localStorage-də saxlayan və səhifə yenilənəndə göstərən bir sistem yaradın.
