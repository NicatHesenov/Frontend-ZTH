const timer = document.querySelector(".time_box-time");
const timerStartBtn = document.querySelector(".start");
const timerResetBtn = document.querySelector(".reset");
let count = 10;
let timeInterval;

function timeStart() {
  timer.style.color = "black";
  timer.textContent = `0:${count}`;
  timeInterval = setInterval(() => {
    count--;
    timer.textContent = `0:${count < 10 ? "0" + count : count}`;
    if (count <= 3) {
      timer.style.color = "red";
    }

    if (count <= 0) {
      clearInterval(timeInterval);
      timer.textContent = "Time's up!";
      timer.style.color = "red";
      timerStartBtn.style.display = "none";
    }
  }, 1000);
}

function stopInterval() {
  clearInterval(timeInterval);
  count = 10;
  timer.style.color = "black";
  timer.textContent = `0:${count}`;
  timerStartBtn.style.display = "inline-block";
  timerResetBtn.style.display = "inline-block";
}
timerStartBtn.addEventListener("click", () => timeStart());
timerResetBtn.addEventListener("click", () => stopInterval());
