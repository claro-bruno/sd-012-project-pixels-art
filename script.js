let colors = document.querySelectorAll('.color');
let colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', (event) => {
    for (let index = 0; index < colors.length; index += 1) {
        if(colors[index].classList.contains('color')) {
            colors[index].classList.remove('selected');
            (event.target.classList.contains('color'));
            event.target.classList.add('selected');
        }
    }
});
let pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', (event) => {
  const changeColor = document.querySelector('.selected');
  const backgroundColor = window.getComputedStyle(changeColor).getPropertyValue('background');
  if (event.target.classList.contains('pixel')) {
    event.target.style.background = backgroundColor;
  }
});

let pixels = document.querySelectorAll('.pixel');
let button = document.getElementById('clear-board');
function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
button.addEventListener('click', clearBoard);

//https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle