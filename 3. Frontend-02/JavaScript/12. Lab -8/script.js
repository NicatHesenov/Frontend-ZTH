const plus = document.querySelector(".plus");
const input = document.querySelector("#input");
const box = document.querySelector(".box");

plus.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (text === "") alert("it is empty");

  const textTask = document.createComment("span");
  textTask.textContent = text;
  // task
  const task = document.createElement("div");
  task.classList.add("task");

  const button = document.createElement("button");
  button.classList.add("button");

  // del
  const del = document.createElement("span");
  del.classList.add("delete");
  del.textContent = "x";

  // delete task
  del.addEventListener("click", () => {
    task.remove();
  });

  // edit
  const edit = document.createElement("span");
  edit.classList.add("edit");
  edit.textContent = "🖋️";

  box.appendChild(task);
  button.appendChild(del);
  button.appendChild(edit);
  task.appendChild(textTask);

  console.log(del);
  console.log(box);
  console.log(task);
  console.log(edit);

  input.value = "";
});

// Demək mən burada nə etməliyəm? İnputa yazı daxil etdikdə aşağıya əlavə olunmalıdır
