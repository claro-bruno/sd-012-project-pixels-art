/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable sonarjs/no-extra-arguments */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-undef */
function colorPallete() {
  const colors = ['black', 'blue', 'red', 'green'];
  const colorsPalette = document.querySelectorAll('.color');
  for (let index = 0; index < colorsPalette.length; index += 1) {
    colorsPalette[index].style.backgroundColor = colors[index];
  }
}

function getInicialColor() {
  const inicialColor = document.querySelector('.selected');
  inicialColor.style.backgroundColor = 'black';
}

function selectColor(event) {
  const selectedPaletteColor = document.querySelector('.selected');
  selectedPaletteColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function addEventOnClick() {
  const getColorClasses = document.querySelectorAll('.color');
  for (let index = 0; index < getColorClasses.length; index += 1) {
    getColorClasses[index].addEventListener('click', selectColor);
  }
}

function changePixelColor(event) {
  const paletteColorSelected = document.querySelector('.selected');
  const pixelClicked = event.target;

  pixelClicked.style.backgroundColor = paletteColorSelected.style.backgroundColor;
}

function getColor(event) {
  let selectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectedColor;
}

function getColorEvent() {
  let square = document.getElementsByClassName('pixel');
  for (let index = 0; index < square.length; index += 1) {
    square[index].addEventListener('click', getColor);
  }
}

colorPallete();
addEventOnClick();
