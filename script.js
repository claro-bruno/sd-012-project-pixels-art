/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
const colorPaletteSection = document.getElementsByClassName('color');

function colorPaletteGenerator() {
  for (let paletteCreator = 0; paletteCreator < colorPaletteSection.length; paletteCreator += 1) {
    const redAmountRGB = Math.floor(Math.random() * 255);
    const greenAmountRGB = Math.floor(Math.random() * 255);
    const blueAmountRGB = Math.floor(Math.random() * 255);
    if (paletteCreator === 0) {
      colorPaletteSection[0].style.backgroundColor = 'black';
      colorPaletteSection[0].classList.add('selected');
    } else {
      const rgbGenerator = `rgb(${redAmountRGB}, ${greenAmountRGB}, ${blueAmountRGB})`;
      colorPaletteSection[paletteCreator].style.backgroundColor = rgbGenerator;
    }
  }
}
colorPaletteGenerator();

function colorOutput() {
  const colorGrabber = document.getElementsByClassName('selected')[0];
  const selectedColor = colorGrabber.style.backgroundColor;
  const selectedPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < selectedPixel.length; index += 1) {
    selectedPixel[index].addEventListener('click', () => {
      selectedPixel[index].style.backgroundColor = selectedColor;
    });
  }
}

function specificClassGiver() {
  for (let index = 0; index < colorPaletteSection.length; index += 1) {
    colorPaletteSection[index].addEventListener('click', () => {
      for (let classRemover = 0; classRemover < colorPaletteSection.length; classRemover += 1) {
        colorPaletteSection[classRemover].classList.remove(('selected'));
      }
      colorPaletteSection[index].classList.add('selected');
    });
    colorPaletteSection[index].addEventListener('click', colorOutput);
  }
}
specificClassGiver();

function pixelCreation() {
  const maxRow = 5;
  const maxLine = 5;
  const pixelSection = document.getElementById('pixel-board');
  for (let counter = 0; counter < maxLine; counter += 1) {
    const eachRowDiv = document.createElement('div');
    eachRowDiv.className = 'rowDiv';
    pixelSection.appendChild(eachRowDiv);
    for (let index = 0; index < maxRow; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      eachRowDiv.appendChild(pixel);
    }
  }
}
pixelCreation();
