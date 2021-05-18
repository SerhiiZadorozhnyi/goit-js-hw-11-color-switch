const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalTime;
const max = colors.length-1;
const min = 0;
const buttonStart = document.querySelector("[data-action='start']");
const buttonStop = document.querySelector("[data-action='stop']");
const bodyElement = document.querySelector("body");
//Фукция запуска смены цвета фона
function onButtonStartClick(e) {
  intervalTime = setInterval(() => {
    bodyElement.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
  }, 1000);
  
  buttonStart.setAttribute('disabled', false); //Делает клавишу "Start" неактивной при запуске функции смены цвета
  return intervalTime;
}
//Функция остановки смены цвета фона
function onButtonStopClick(e) {
  buttonStart.removeAttribute('disabled');
  clearInterval(intervalTime);
}
//Действия при клике на клавишы
buttonStart.addEventListener('click', onButtonStartClick)
buttonStop.addEventListener('click', onButtonStopClick)