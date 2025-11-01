const sectionCharacters = document.querySelector(".section__characters");
const sectionSearchInput = document.querySelector(".section__search-input");
const btn = document.querySelector(".btn");

let allData = [];
let currentPageNumber = 1;

function renderCharacters(characters) {
  sectionCharacters.innerHTML = characters
    .map(
      (item) => `
      <div class="section__characters-card">
        <img class="section__characters-card__img" src="${item.image}" alt="${item.name}" />
        <h3 class="section__characters-card__title">${item.name}</h3>
        <p class="section__characters-card__gender">${item.gender}</p>
      </div>
    `
    )
    .join("");
}

const loadCharacters = async (page = 1, name = "") => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`
    );
    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      sectionCharacters.innerHTML = `<p class="not-found">Not Found</p>`;
      btn.style.display = "none";
      return;
    }

    if (page === 1) {
      allData = data.results;
    } else {
      allData = [...allData, ...data.results];
    }

    renderCharacters(allData);

    if (!data.info.next) {
      btn.style.display = "none";
    } else {
      btn.style.display = "block";
    }
  } catch (err) {
    console.log("xəta:", err);
    sectionCharacters.innerHTML = `<p class="not-found">Nəticə tapılmadı ❌</p>`;
  }
};

function searching() {
  sectionSearchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim().toLowerCase();

    btn.style.display = value ? "none" : "block";

    if (value.length < 3) return;

    loadCharacters(1, value);
  });
}

btn.addEventListener("click", () => {
  currentPageNumber++;
  loadCharacters(currentPageNumber);
});

loadCharacters();
searching();
