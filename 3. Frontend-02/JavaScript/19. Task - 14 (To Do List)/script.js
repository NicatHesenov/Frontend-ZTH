const form = document.querySelector("form");
const input = document.querySelector(".todo__input--group-input");
const todoList = document.querySelector(".todo__list");
const clearBtn = document.querySelector(".clearBtn");
let listItems = JSON.parse(localStorage.getItem("todoList")) || [];
const renderTo = () => {
  todoList.innerHTML = "";

  listItems.forEach((item, index) => {
    // li element
    const li = document.createElement("li");
    li.textContent = item;

    // delete button
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "x";

    deleteBtn.addEventListener("click", () => {
      listItems.splice(index, 1);
      renderTo();
      localStorage.setItem("todoList", JSON.stringify(listItems));
    });

    todoList.appendChild(li);
    li.appendChild(deleteBtn);
  });
};

renderTo();
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = input.value.trim();
  if (inputValue === "") return;
  listItems.push(inputValue);
  localStorage.setItem("todoList", JSON.stringify(listItems));
  renderTo();

  form.reset();
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("todoList");
  listItems = [];
  renderTo();
});
