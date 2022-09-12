const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timer = null;
btnStop.disabled = true;
btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;

  timer = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timer);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
