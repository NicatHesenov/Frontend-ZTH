// --- DOM elementlərini seçirik ---
const form = document.querySelector(".form");
const nameSurnameInput = document.querySelector(".name-surname");
const ageInput = document.querySelector(".age");
const positionInput = document.querySelector(".position");
const formTable = document.querySelector(".form__table");
////////////////////////////////////////////////////////////////////////
// İşçi məlumatlarını obyekt şəklində saxlamaq üçün konstruktor funksiyası
function Worker(nameSurname, age, position) {
  // "this" burada yaradılan obyektin içindəki property-ləri təyin edir
  this.nameSurname = nameSurname;
  this.age = age;
  this.position = position;
}
////////////////////////////////////////////////////////////////////////
// Bütün yaradılmış işçiləri saxlamaq üçün boş massiv
let workerList = [];
////////////////////////////////////////////////////////////////////////
// Cədvəldə işçilərin sıra nömrəsini göstərmək üçün sayğac
let court = 1;

////////////////////////////////////////////////////////////////////////
// Form göndərildikdə (submit) işləyən event listener
form.addEventListener("submit", (e) => {
  // Formun səhifəni yeniləməsinin (reload) qarşısını alırıq
  e.preventDefault();

  // Yeni bir işçi (Worker) obyekti yaradılır, input dəyərləri ilə birlikdə
  const worker1 = new Worker(
    nameSurnameInput.value,
    ageInput.value,
    positionInput.value
  );
  // Yeni yaradılan işçini "workerList" massivinə əlavə edirik
  workerList.push(worker1);

  // Konsolda işçi obyektini və ümumi siyahını yoxlamaq üçün yazdırırıq
  console.log(worker1);
  console.log(workerList);

  // Yeni işçinin məlumatlarını HTML cədvəlinə (table) əlavə edirik
  formTable.innerHTML += `
            <tbody>
              <tr>
                <td>${court++}</td>
                <td>${worker1.nameSurname}</td>
                <td>${worker1.age}</td>
                <td>${worker1.position}</td>
                <td class="tdBtn">
                  <button class="correct-btn">Düzəliş</button>
                  <button class="delet-btn">Sil</button>
                </td>
              </tr>
            </tbody>
  `;

  // Formu sıfırlayırıq (input sahələrini boşaldırıq)
  form.reset();
});
