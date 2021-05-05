window.onload = function () {
  document.getElementById('black').classList.add('selected');
};

function selectAColor(event) {
  let color = document.querySelectorAll('.color');
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
let pickAColor = document.querySelector('#color-palette');
pickAColor.addEventListener('click', selectAColor);

let boxLocation = document.querySelector('#pixel-board');
function boxPaint(event) {
  let selectedCheck = document.querySelector('.selected');
  let pickedColor = getComputedStyle(selectedCheck).backgroundColor;
  let paint = event.target;
  paint.style.backgroundColor = pickedColor;
}
boxLocation.addEventListener('click', boxPaint);

let clearButton = document.getElementById('clear-board');
function clearTable(event) {
  let boxesToClear = document.querySelectorAll('.pixel');
  for (let index = 0; index < boxesToClear.length; index += 1) {
    if (boxesToClear[index].style.backgroundColor !== 'white') {
      boxesToClear[index].style.backgroundColor = 'white';
    }
  }
}
clearButton.addEventListener('click', clearTable);
