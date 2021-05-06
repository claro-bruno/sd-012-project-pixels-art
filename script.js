const colors = document.querySelectorAll('.color');
const colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', (event) => {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.contains('color')) {
      colors[index].classList.remove('selected');
      (event.target.classList.contains('color'));
      event.target.classList.add('selected');
    }
  }
});

const pixelBoard = document.getElementById('pixel-board');
// a referencia de como usar window.getComputedStyle().getPropertyValue() para colorir background eu peguei em http://www.permadi.com/tutorial/cssGettingBackgroundColor/index.html
pixelBoard.addEventListener('click', (event) => {
  const changeColor = document.querySelector('.selected');
  const backgroundColor = window.getComputedStyle(changeColor).getPropertyValue('background');
  if (event.target.classList.contains('pixel')) {
    // eslint-disable-next-line no-param-reassign
    event.target.style.background = backgroundColor;
  }
});

const pixels = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');
clear.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = '#ffffff';
  }
});
