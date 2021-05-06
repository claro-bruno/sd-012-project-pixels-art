const colorPalette = [];

function getElementsColorPalette() {
  for (let index = 1; index <= 14; index += 1) {
    const id = `color-${index}`;
    colorPalette[index] = document.getElementById(id);
  }
}
getElementsColorPalette();

function clearSelected() {
  const oldSelected = document.querySelector('.selected');
  if (oldSelected.parentElement.id === 'color-palette') {
    oldSelected.className = 'color';
  }
  if (oldSelected.parentElement.id === 'extended-palette') {
    oldSelected.className = 'color-extended';
  }
}

function changeSelectedColor(event) {
  const selectedBox = document.querySelector('#color-selected');
  selectedBox.style.backgroundColor = event.target.style.backgroundColor;
  clearSelected();
  const newSelected = event.target;
  newSelected.className = 'color selected';
}

function createEventsColorPalette() {
  for (let index = 1; index <= 14; index += 1) {
    colorPalette[index].addEventListener('click', changeSelectedColor);
  }
}
createEventsColorPalette();

const pixels = [];
function getElementsPixels() {
  for (let index = 1; index <= 25; index += 1) {
    const id = `pixel-td-${index}`;
    pixels[index] = document.getElementById(id);
  }
}
getElementsPixels();

function changePixelColor(event) {
  const selectedColor = document.querySelector('.selected');
  const selectedPixel = event.target;
  selectedPixel.style.backgroundColor = selectedColor.style.backgroundColor;
}

function createEventsPixels() {
  for (let index = 1; index <= 25; index += 1) {
    pixels[index].addEventListener('click', changePixelColor);
  }
}
createEventsPixels();

const clearButton = document.querySelector('#clear-board');
function clearPixels() {
  for (let index = 1; index <= 25; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearPixels);

function getRandomIntInclusive(min, max) {
  let lowestValue = min;
  let highestValue = max;
  lowestValue = Math.ceil(lowestValue);
  highestValue = Math.floor(highestValue);
  return Math.floor(Math.random() * (highestValue - lowestValue + 1)) + lowestValue;
}

function randomColorPalette() {
  for (let index = 2; index <= 4; index += 1) {
    let randomColor = `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)}, `;
    randomColor = `${randomColor + getRandomIntInclusive(0, 255)})`;
    colorPalette[index].style.backgroundColor = randomColor;
  }
}
randomColorPalette();
