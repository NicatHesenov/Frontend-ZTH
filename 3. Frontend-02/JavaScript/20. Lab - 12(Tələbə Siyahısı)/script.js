const toggleModeBtn = document.querySelector(".toggle-mode");
const body = document.querySelector("body");
const currentMode = localStorage.getItem("mode");

toggleModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const mode = body.classList.contains("dark-mode")
    ? "dark-mode"
    : "light-mode";

  localStorage.setItem("mode", mode);

  toggleModeBtn.textContent = mode === "dark-mode" ? "🌙" : "🌞";
});

if (currentMode) {
  body.classList.add(currentMode);
  if (currentMode === "dark-mode") {
    toggleModeBtn.textContent = "🌙";
  } else {
    toggleModeBtn.textContent = "🌞";
  }
}

// input form
const nameİnput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const groupInput = document.querySelector("#group");
const form = document.querySelector(".container__form");
const listİtems = document.querySelector(".container__form--list");
const searchInput = document.querySelector("#list-input");
const sortSelect = document.querySelector("#sort");

const listLocalstorage = JSON.parse(localStorage.getItem("input")) || [];

const deletElement = (index) => {
  listLocalstorage.splice(index, 1);
  localStorage.setItem("input", JSON.stringify(listLocalstorage));
  renderList();
};

const renderList = () => {
  listİtems.innerHTML = "";

  let displayedItems = [...listLocalstorage];

  const searchTerm = searchInput.value.toLowerCase().trim();
  if (searchTerm) {
    displayedItems = displayedItems.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.surname.toLowerCase().includes(searchTerm) ||
        item.group.toLowerCase().includes(searchTerm)
      );
    });
  }

  const sortValue = sortSelect.value;
  if (sortValue !== "none") {
    displayedItems.sort((a, b) => {
      const [key, order] = sortValue.split("-");

      const valA = a[key] || "";
      const valB = b[key] || "";

      if (order === "asc") {
        return valA.localeCompare(valB);
      } else {
        return valB.localeCompare(valA);
      }
    });
  }

  displayedItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "container__form--list-item";
    li.textContent = `${item.name} ${item.surname} (${item.group})`;

    const delet = document.createElement("span");
    delet.textContent = "X";
    li.appendChild(delet);
    listİtems.appendChild(li);

    delet.addEventListener("click", () => {
      const originalIndex = listLocalstorage.findIndex(
        (originalItem) => originalItem === item
      );
      deletElement(originalIndex);
    });
  });
};

const addItem = () => {
  const name = nameİnput.value.trim();
  const surname = surnameInput.value.trim();
  const group = groupInput.value.toUpperCase().trim();

  if (!name || !surname || !group) {
    alert("Zəhmət olmasa məlumatları daxil edin");
    return;
  }
  const newItem = { name, surname, group };
  listLocalstorage.push(newItem);
  localStorage.setItem("input", JSON.stringify(listLocalstorage));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addItem();
  renderList();
  form.reset();
});

searchInput.addEventListener("input", renderList);

sortSelect.addEventListener("change", renderList);

renderList();
