const input = document.querySelector("#input");
const plus = document.querySelector(".plus");
const box = document.querySelector(".box");

plus.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  const task = document.createElement("div");
  task.classList.add("task");

  const taskText = document.createElement("span");
  taskText.textContent = text;

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const editBtn = document.createElement("span");
  editBtn.textContent = "✎";
  editBtn.classList.add("edit");

  const delBtn = document.createElement("span");
  delBtn.textContent = "×";
  delBtn.classList.add("delete");

  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your task:", taskText.textContent);
    taskText.textContent = newText.trim();
  });

  delBtn.addEventListener("click", () => {
    task.remove();
  });

  buttons.appendChild(editBtn);
  buttons.appendChild(delBtn);
  task.appendChild(taskText);
  task.appendChild(buttons);
  box.appendChild(task);

  input.value = "";
});
