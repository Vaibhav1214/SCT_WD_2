let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const milliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor(time / (1000 * 60 * 60));
  document.getElementById("time").textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function pad(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function startStopwatch() {
  if (isRunning) return;
  startTime = Date.now();
  timer = setInterval(updateDisplay, 10);
  isRunning = true;
}

function pauseStopwatch() {
  if (!isRunning) return;
  clearInterval(timer);
  elapsedTime += Date.now() - startTime;
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;
  document.getElementById("time").textContent = "00:00:00.00";
  document.getElementById("lapList").innerHTML = "";
}

function lapTime() {
  if (!isRunning) return;
  const time = Date.now() - startTime + elapsedTime;
  const milliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor(time / (1000 * 60 * 60));
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap - ${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
  document.getElementById("lapList").appendChild(lapItem);
}
