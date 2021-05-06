/* eslint-disable max-lines-per-function */
window.onload = function colorPaletteGenerator() {
  const colorPaletteSection = document.getElementsByClassName('color');
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
    colorPaletteSection[paletteCreator].addEventListener('click', () => {
      for (let classRemover = 0; classRemover < colorPaletteSection.length; classRemover += 1) {
        colorPaletteSection[classRemover].classList.remove(('selected'));
      }
      colorPaletteSection[paletteCreator].classList.add('selected');
    });
  }
};

function pixelCreation() {
  const maxRow = 5;
  const maxLine = 5;
  const pixelSection = document.querySelector('#pixel-board');
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
