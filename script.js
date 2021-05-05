function initialBrush() {
  document.querySelector('#color1').classList.add('selected');
}

window.onload = initialBrush;

function changeBrush(event) {
  if (event.target.classList.contains('color')) {
    const palette = document.getElementsByClassName('color');
    for (let index = 0; index < palette.length; index += 1) {
      palette[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

const colorPalette = document.querySelector('#color-palette');

colorPalette.addEventListener('click', changeBrush);

function paint(event) {
  if (event.target.classList.contains('pixel')) {
    const paletteColor = document.querySelector('.selected');
    const brushColor = window.getComputedStyle(paletteColor).backgroundColor;
    event.target.style.backgroundColor = brushColor;
  } 
}

const frame = document.querySelector('#pixel-board');

frame.addEventListener('click', paint);
