// Getting the elements from HTML
const colorPaletteSection = document.getElementsByClassName('color');
const pixelSection = document.getElementById('pixel-board');
const squareSizeInput = document.getElementById('board-size');
const clearButton = document.getElementById('clear-board');
const VQVButton = document.getElementById('generate-board');

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

function selectedClass() {
  for (let index = 0; index < colorPaletteSection.length; index += 1) {
    colorPaletteSection[index].addEventListener('click', () => {
      for (let classRemover = 0; classRemover < colorPaletteSection.length; classRemover += 1) {
        colorPaletteSection[classRemover].classList.remove(('selected'));
      }
      colorPaletteSection[index].classList.add('selected');
    });
  }
}
selectedClass();

function pixelPainting(event) {
  const colorGrabber = document.querySelector('.selected');
  const selectedColor = colorGrabber.style.backgroundColor;
  const evento = event.target;
  evento.style.backgroundColor = selectedColor;
}

function pixelCreation(maxRowAndLine) {
  // Clean a previous board first
  pixelSection.innerHTML = '';
  // Creates the div line where the pixel would be
  for (let counter = 0; counter < maxRowAndLine; counter += 1) {
    const eachRowDiv = document.createElement('div');
    eachRowDiv.className = 'rowDiv';
    pixelSection.appendChild(eachRowDiv);
    // Create the pixel and append it in the line
    for (let index = 0; index < maxRowAndLine; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      eachRowDiv.appendChild(pixel);
      pixel.addEventListener('click', pixelPainting);
    }
  }
  // The input.value must be empty after you change the board size
  squareSizeInput.value = '';
}
// 5 is the first board number
pixelCreation(5);

clearButton.addEventListener('click', () => {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = '';
  }
});

// fazer condicional aqui pra chegar > 5 < 50
VQVButton.addEventListener('click', () => {
  if (squareSizeInput.value === '') {
    window.alert('Board inválido!');
  } else if (squareSizeInput.value <= 5) {
    pixelCreation(squareSizeInput.value = 5);
  } else if (squareSizeInput.value >= 50) {
    pixelCreation(50);
  } else {
    pixelCreation(squareSizeInput.value);
  }
});
