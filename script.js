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

function specificClassGiver() {
  for (let index = 0; index < colorPaletteSection.length; index += 1) {
    colorPaletteSection[index].addEventListener('click', () => {
      for (let classRemover = 0; classRemover < colorPaletteSection.length; classRemover += 1) {
        colorPaletteSection[classRemover].classList.remove(('selected'));
      }
      colorPaletteSection[index].classList.add('selected');
    });
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

const pixel = document.getElementsByClassName('pixel');
for (let indexx = 0; indexx < pixel.length; indexx += 1) {
  pixel[indexx].addEventListener('click', (event) => {
    const colorGrabber = document.querySelector('.selected');
    const selectedColor = colorGrabber.style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  });
}

const button = document.getElementById('clear-board');

button.addEventListener('click', () => {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = '';
  }
});
