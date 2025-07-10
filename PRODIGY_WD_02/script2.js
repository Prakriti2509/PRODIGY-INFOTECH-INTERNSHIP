 let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

startBtn.addEventListener("click", () => {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  timer = null;
  laps.innerHTML = "";
});

lapBtn.addEventListener("click", () => {
  const lapTime = display.innerText;
  const li = document.createElement("li");
  li.innerText = `Lap: ${lapTime}`;
  laps.appendChild(li);
});