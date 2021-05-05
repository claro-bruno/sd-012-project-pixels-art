const colorPalette = [];

function getElementsColorPalette() {
  for (let index = 1; index <= 14; index += 1) {
    const id = `color-${index}`;
    colorPalette[index] = document.getElementById(id);
  }
}
getElementsColorPalette();

function changeSelectedColor(event) {
  const selectedBox = document.querySelector('#color-selected');
  selectedBox.style.backgroundColor = event.target.style.backgroundColor;
}

function createEventsColorPalette() {
  for (let index = 1; index <= 14; index += 1) {
    colorPalette[index].addEventListener('click', changeSelectedColor);
  }
}
createEventsColorPalette();
