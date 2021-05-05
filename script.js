window.onload = function blackOnStart() {
  document.getElementById('black').classList.add('selected');
};

function selectAColor(event) {
  const color = document.querySelectorAll('.color');
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
const pickAColor = document.querySelector('#color-palette');
pickAColor.addEventListener('click', selectAColor);

const boxLocation = document.querySelector('#pixel-board');
function boxPaint(event) {
  const selectedCheck = document.querySelector('.selected');
  const pickedColor = getComputedStyle(selectedCheck).backgroundColor;
  const paint = event.target;
  paint.style.backgroundColor = pickedColor;
}
boxLocation.addEventListener('click', boxPaint);

const clearButton = document.getElementById('clear-board');
function clearTable() {
  const boxesToClear = document.querySelectorAll('.pixel');
  for (let index = 0; index < boxesToClear.length; index += 1) {
    if (boxesToClear[index].style.backgroundColor !== 'white') {
      boxesToClear[index].style.backgroundColor = 'white';
    }
  }
}
clearButton.addEventListener('click', clearTable);
