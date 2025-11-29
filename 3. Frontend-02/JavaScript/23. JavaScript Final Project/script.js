const lightBtn = document.querySelector(".mood__light");
const nightBtn = document.querySelector(".mood__night");
const body = document.querySelector("body");
const currentMode = localStorage.getItem("theme") || "light";

const setMode = (mode) => {
  if (mode === "dark") {
    body.classList.add("active");
    lightBtn.classList.add("hide");
    nightBtn.classList.add("active");
  } else {
    body.classList.remove("active");
    lightBtn.classList.remove("hide");
    nightBtn.classList.remove("active");
  }
};

setMode(currentMode);

function toggleTheme() {
  const isDark = body.classList.toggle("active");
  lightBtn.classList.toggle("hide");
  nightBtn.classList.toggle("active");

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

lightBtn.addEventListener("click", toggleTheme);
nightBtn.addEventListener("click", toggleTheme);
//////////////////////////////////////////////////////////////
// =============================
// ELEMENTLƏR
// =============================
const addInput = document.querySelector(".addInput__container--input");
const addBtn = document.querySelector(".addInput__container--btn");
const prioritySelect = document.querySelector("#search-select");
const containerContent = document.querySelector(".container__content");

const totalCard = document.querySelector(".card--gray .num ");
const activeCard = document.querySelector(".card--blue .num");
const completedCard = document.querySelector(".card--green .num");

const allBtn = document.querySelector(".searchInput__container--allBtn");
const activeBtn = document.querySelector(".searchInput__container--activeBtn");
const completedBtn = document.querySelector(
  ".searchInput__container--completedBtn"
);
const emptyMessageBox = document.querySelector(".boxes");

const searchInput = document.querySelector(".searchInput__container--input");
const downloadBtn = document.querySelector(
  ".searchInput__container--dowlandBtn"
);

let editMode = false;
let editId = null;
let currentFilter = "all"; // Başlanğıc filtr vəziyyəti

// =============================
// LOCALSTORAGE-DƏN OXUMA
// =============================
function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// =============================
// LOCALSTORAGE-YƏ YAZMA
// =============================
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// =============================
// COUNTER FUNKSIYASI
// =============================
function updateCounters() {
  const tasks = getTasks();
  totalCard.textContent = tasks.length;
  activeCard.textContent = tasks.filter((t) => !t.completed).length;
  completedCard.textContent = tasks.filter((t) => t.completed).length;
}

// =============================
// TASKLARI JSON OLARAQ YÜKLƏMƏ (EXPORT)
// =============================
function exportTasks() {
  const tasks = getTasks();
  const jsonString = JSON.stringify(tasks, null, 2); // 2 boşluq ilə formatlanmış JSON
  console.log(jsonString);

  // 1. Blob obyekti yaratmaq
  const blob = new Blob([jsonString], { type: "application/json" });

  // 2. Yükləmə linki yaratmaq
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "tasks.json"; // Fayl adı

  // 3. Yükləməni başlatmaq və linki silmək
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showMessage("Export edildi", "Tapşırıqlar fayla yükləndi");
}

// =============================
// TASK OBJECT YARATMA
// =============================
function createTask(title, priority) {
  return {
    id: Date.now(),
    title,
    priority,
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

// =============================
// TASK ƏLAVƏ ET
// =============================
function addTask(title, priority) {
  const tasks = getTasks();
  const newTask = createTask(title, priority);
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
}

// =============================
// UI-YƏ TASK ÇƏKMƏ
// =============================
function renderTask(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const taskContainer = document.createElement("div");
  taskContainer.className = "task__container";

  const contents = document.createElement("div");
  contents.className = "task__container--contents";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  const span = document.createElement("span");
  span.textContent = task.title; // Completed style

  if (task.completed) {
    span.style.textDecoration = "line-through";
    span.style.opacity = "0.5";
  }

  checkbox.addEventListener("change", () =>
    toggleComplete(task.id, checkbox, span)
  );

  contents.appendChild(checkbox);
  contents.appendChild(span);

  const details = document.createElement("div");
  details.className = "task__container--details";

  const priority = document.createElement("span");
  priority.className = "degr";
  priority.textContent = task.priority;

  if (task.priority === "Aşağı") {
    priority.style.backgroundColor = "#e5fff3";
    priority.style.color = "black";
  } else if (task.priority === "Orta") {
    priority.style.backgroundColor = "#fff9e5";
    priority.style.color = "#c58900";
  } else {
    priority.style.backgroundColor = "#ffe5e5";
    priority.style.color = "#d70000";
  }

  const edit = document.createElement("span");
  edit.className = "pen";
  edit.textContent = "🖋️";
  edit.addEventListener("click", () => {
    editMode = true;
    editId = task.id;

    addInput.value = task.title;
    prioritySelect.value = task.priority;

    addBtn.innerHTML = "<span>✏</span> Yenilə";
  });

  const delet = document.createElement("span");
  delet.className = "delet";
  delet.textContent = "🗑";

  delet.addEventListener("click", () => deleteTask(task.id, taskDiv));

  details.appendChild(priority);
  details.appendChild(edit);
  details.appendChild(delet);

  taskContainer.appendChild(contents);
  taskContainer.appendChild(details);
  taskDiv.appendChild(taskContainer); // Taskları "boxes" elementindən əvvəl əlavə etmək üçün

  const boxesElement = document.querySelector(".boxes"); // Əgər "boxes" mövcuddursa, ondan əvvəl əlavə edin, yoxsa sadəcə konteynerə
  if (boxesElement) {
    boxesElement.insertAdjacentElement("beforebegin", taskDiv);
  } else {
    containerContent.appendChild(taskDiv);
  }
}

// =============================
// TASK TAMAMLANMA (CHECKBOX)
// =============================
function toggleComplete(id, checkbox, span) {
  const tasks = getTasks();

  const updated = tasks.map((t) => {
    if (t.id === id) {
      t.completed = checkbox.checked;
    }
    return t;
  });

  saveTasks(updated); // UI dəyişiklik

  if (checkbox.checked) {
    span.style.textDecoration = "line-through";
    span.style.opacity = "0.5";
  } else {
    span.style.textDecoration = "none";
    span.style.opacity = "1";
  } // Cari filtr aktivdirsə, tapşırıq tamamlandıqda siyahıdan yox olmalıdır

  if (currentFilter !== "all") {
    renderAllTasks();
  } else {
    updateCounters();
  }
}

// =============================
// TASK SİLMƏ
// =============================
function deleteTask(id, element) {
  let tasks = getTasks();
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks(tasks); // element.remove(); // Silinir

  updateCounters();
  renderAllTasks(); // Sildikdən sonra cari filtrlənmiş siyahını yenilə və boş mesajı yoxla

  showMessage("Silindi", "Tapşırıq silindi");
}

// =============================
// INPUTDAN TASK ƏLAVƏ ET
// =============================
function inputTask() {
  const title = addInput.value.trim();
  if (!title) return;

  const priorityValue = prioritySelect.value; // EDIT MODE

  if (editMode) {
    let tasks = getTasks();

    tasks = tasks.map((t) => {
      if (t.id === editId) {
        t.title = title;
        t.priority = priorityValue;
      }
      return t;
    });

    saveTasks(tasks);

    renderAllTasks(); // Yenilənmədən sonra siyahını yenidən çək

    showMessage("Yeniləndi", "Tapşırıq uğurla yeniləndi"); // reset

    editMode = false;
    editId = null;
    addBtn.innerHTML = "<span>✏</span> Yenilə";
    addInput.value = "";

    return;
  } // ADD MODE

  const newTask = addTask(title, priorityValue); // Əlavə etdikdən sonra siyahını yeniləyirik, çünki filtr "active" ola bilər.

  renderAllTasks();

  showMessage("Əlavə olundu", "Yeni tapşırıq əlavə edildi");

  addInput.value = "";
}

// Button event
addBtn.addEventListener("click", inputTask);

// =============================
// TOAST MESAJ FUNKSIYASI
// =============================
function showMessage(title, text) {
  const toast = document.querySelector(".toast");
  toast.innerHTML = `
    <h4>${title}</h4>
    <p>${text}</p>
  `;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// =============================
// FİLTR DÜYMƏLƏRİ ÜÇÜN AKTİV STİL
// =============================
function setActiveButton(filter) {
  allBtn.classList.remove("active");
  activeBtn.classList.remove("active");
  completedBtn.classList.remove("active");

  if (filter === "all") {
    allBtn.classList.add("active");
  } else if (filter === "active") {
    activeBtn.classList.add("active");
  } else if (filter === "completed") {
    completedBtn.classList.add("active");
  }
}

// =============================
// SƏHİFƏ YENİ AÇILANDA/FİLTR DƏYİŞDİKDƏ TASKLARI EKREANA ÇƏK
// =============================
function renderAllTasks() {
  const tasks = getTasks();
  const searchQuery = searchInput.value.toLowerCase().trim(); // Axtarış sorğusunu al // Təkcə tapşırıq elementlərini silirik

  document.querySelectorAll(".task").forEach((task) => task.remove());

  setActiveButton(currentFilter); // Aktiv düymə stilini təyin edin // 1. Filtrləmə

  let filteredTasks = tasks;
  if (currentFilter === "active") {
    filteredTasks = tasks.filter((t) => !t.completed);
  } else if (currentFilter === "completed") {
    filteredTasks = tasks.filter((t) => t.completed);
  } // 2. Axtarış (Həm filtr, həm də axtarış tətbiq olunur)

  if (searchQuery) {
    filteredTasks = filteredTasks.filter((t) =>
      t.title.toLowerCase().includes(searchQuery)
    );
  } // Boş Siyahı Mesajını İdarə Et

  if (filteredTasks.length === 0) {
    emptyMessageBox.style.display = "flex"; // Məlumat mesajını dəyişdirin (istəyə bağlı)
    document.querySelector(".boxes__textİnfo").textContent = searchQuery
      ? `"${searchQuery}" sorğusuna uyğun tapşırıq tapılmadı`
      : "Heç bir tapşırıq tapılmadı";
    document.querySelector(".boxes__textWarn").textContent = searchQuery
      ? "Başqa bir açar sözlə axtarış edin və ya filtrlərinizi yoxlayın."
      : "Yeni tapşırıq əlavə etməklə başlayın.";
  } else {
    emptyMessageBox.style.display = "none";
    filteredTasks.forEach(renderTask);
  }

  updateCounters();
}

// =============================
// FİLTR İDARƏÇİLİYİ
// =============================
allBtn.addEventListener("click", () => {
  currentFilter = "all";
  searchInput.value = ""; // Filtr dəyişəndə axtarış sahəsini təmizlə
  renderAllTasks();
});

activeBtn.addEventListener("click", () => {
  currentFilter = "active";
  searchInput.value = ""; // Filtr dəyişəndə axtarış sahəsini təmizlə
  renderAllTasks();
});

completedBtn.addEventListener("click", () => {
  currentFilter = "completed";
  searchInput.value = ""; // Filtr dəyişəndə axtarış sahəsini təmizlə
  renderAllTasks();
});

// =============================
// AXTARIŞ İDARƏÇİLİYİ
// =============================
searchInput.addEventListener("input", () => {
  renderAllTasks();
});

// =============================
// YÜKLƏMƏ (EXPORT) İDARƏÇİLİYİ
// =============================
downloadBtn.addEventListener("click", exportTasks);

// İlk render
renderAllTasks();
