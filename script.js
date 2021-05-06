const colors = document.querySelectorAll('.color');
const color1 = document.getElementById('black');
const color2 = document.getElementById('burlywood');
const color3 = document.getElementById('teal');
const color4 = document.getElementById('goldenrod');

function removeColor() {
  const colorPallete = document.querySelectorAll('.color');
  for (let index = 0; index < colorPallete.length; index += 1) {
    colorPallete[index].classList.remove('selected');
  }
}

let colorSelected = 'black';

function getblackColor(event) {
  const evento = event.target;
  removeColor();
  evento.classList.add('selected');
  colorSelected = 'black';
}
color1.addEventListener('click', getblackColor);

function getburlywoodColor(event) {
  const evento = event.target;
  removeColor();
  evento.classList.add('selected');
  colorSelected = 'burlywood';
}
color2.addEventListener('click', getburlywoodColor);

function gettealColor(event) {
  const evento = event.target;
  removeColor();
  evento.classList.add('selected');
  colorSelected = 'teal';
}
color3.addEventListener('click', gettealColor);

function getgoldenrodColor(event) {
  const evento = event.target;
  removeColor();
  evento.classList.add('selected');
  colorSelected = 'goldenrod';
}
color4.addEventListener('click', getgoldenrodColor);

const pixelBoard = document.querySelector('#pixel-board');

function pixelBord(event) {
  const evento = event.target;
  evento.style.backgroundColor = colorSelected;
}

pixelBoard.addEventListener('click', pixelBord);

const clearBoard = document.querySelector('#clear-board');

function removePixel() {
  const evento = document.getElementsByClassName('pixel');
  for (let index = 0; index < evento.length; index += 1) {
    evento[index].style.backgroundColor = 'white';
  }
}
clearBoard.addEventListener('click', removePixel);
