const form = document.querySelector("form");
const inputName = document.querySelector(".input-name");
const inputAuthor = document.querySelector(".input-author");
const boxContainer = document.querySelector(".box-container");
const inputRead = document.querySelector(".input-read");
function Book(bookName, author, position) {
  this.bookName = bookName;
  this.author = author;
  this.position = position;
}

let books = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const readStatus = inputRead.checked ? "Oxunub" : "Oxunmayıb";

  const book1 = new Book(inputName.value, inputAuthor.value, readStatus);
  books.push(book1);

  console.log(books);

  boxContainer.innerHTML += `
    <div class="box-card">
      <h1 class="box-title">${book1.bookName}</h1>
      <p class="box-author">Müəllif: ${book1.author}</p>
      <p class="box-status">Status: ${book1.position}</p>
    </div>
  `;

  form.reset();
});
