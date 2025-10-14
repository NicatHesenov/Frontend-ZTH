// HTML-dən elementləri seçirik
const input = document.querySelector("#input"); // İstifadəçinin yazdığı mətn(input)
const plus = document.querySelector(".plus"); // əlavə et (+) düyməsi
const box = document.querySelector(".box"); //Tapşırıqların göstərildiyi konteyner

// "+" düyməsinə click eventi əlavə edirik
plus.addEventListener("click", (e) => {
  e.preventDefault(); //refresh olunmasının qarşısını alırıq

  // inputun valuesını təmizləyirik, text dəyişəninə əlavə edirik
  const text = input.value.trim();
  if (text === "") {
    alert("it is empty"); //İnput boşdursa boşdur mesajını ver
    // və davam etmə
    return;
  }
  // yeni bir div yarat task dəyişənində saxla(bu div inputdan gələn valuları, buttonları saxlayan kontynerdi)
  const task = document.createElement("div");
  // task classını əlavə edirik
  task.classList.add("task");

  // inputdan gələn mətini saxlayacağımız span tagı
  const taskText = document.createElement("span");
  console.log(taskText);

  // inputdan gələn texi span tagına daxil edirik
  taskText.textContent = text;

  // düymələr üçün konteyner divi yaradırıq
  const buttons = document.createElement("div");
  // buttons classı veririk
  buttons.classList.add("buttons");

  // edit üçün span tagı yaradırıq
  const editBtn = document.createElement("span");
  editBtn.textContent = "✎"; // edit spanın içərisinə qələm əlavə edirik
  editBtn.classList.add("edit"); // edit classı veririk

  // delet üçün span tagı yaradırıq
  const delBtn = document.createElement("span");
  delBtn.textContent = "×"; // delet spanın içərisinə x əlavə edirik
  delBtn.classList.add("delete"); //delete classı veririk

  // edit classına click eventi əlavə edirik
  editBtn.addEventListener("click", () => {
    // prompt pəncərəsi açılır və içində mövcud tapşırığın mətni avtomatik göstərilir, yəni // köhnə mətn prompt-da görünür, yeni mətn dəyişəndə saxlanır
    const newText = prompt("Edit your task:", taskText.textContent);
    // istifadəçinin yazdığı yeni mətni (əgər varsa) ekranda köhnə mətnin yerinə yazırıq, yəni // tapşırıq mətnini yenilə
    taskText.textContent = newText.trim();
  });

  // delet btn klik etdikdə task divini sil
  delBtn.addEventListener("click", () => {
    task.remove();
  });
  // edit və delet buttonunu, button kontyner daxilinə göndər
  buttons.appendChild(editBtn);
  buttons.appendChild(delBtn);

  // inputdan gələn texti və button kontynerini task kontynerinə göndər
  task.appendChild(taskText);
  task.appendChild(buttons);

  // task konteynirini ümumi box daxilinə göndər
  box.appendChild(task);

  // input-u təmizlə
  input.value = "";
});
