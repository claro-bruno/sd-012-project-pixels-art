const pixelBoard = document.querySelector('#pixel-board');
// requerimento6

function initialColorSelected() {
  const paletteColor = document.getElementsByClassName('color');
  paletteColor[0].style.backgroundColor = 'black';
  paletteColor[1].style.backgroundColor = 'cyan';
  paletteColor[2].style.backgroundColor = 'aquamarine';
  paletteColor[3].style.backgroundColor = 'deeppink';
  paletteColor[0].classList.add('selected');
}
initialColorSelected();

window.onload = initialColorSelected;

// requerimento 4

function generateLinePixel(pam1, userSize) {
  for (let index2 = 0; index2 < userSize; index2 += 1) {
    const CreatePixelRow = document.createElement('div');
    CreatePixelRow.classList.add('pixel');
    pam1.appendChild(CreatePixelRow);
  }
}

function generatePixel(userSize) {
  for (let index = 0; index < userSize; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.classList.add('pixelLine');
    pixelBoard.appendChild(createPixel);
    generateLinePixel(createPixel, userSize);
  }
}
generatePixel(5);

// requerimento 7 e 8 (ajuda da Gisele)

function clickOnColor() {
  const allColors = document.querySelector('#color-palette');
  allColors.addEventListener('click', (event) => {
    const selectedColor = event.target;
    document.querySelector('.selected').className = 'color';
    selectedColor.classList.add('selected');
  });
}

clickOnColor();

function setColor() {
  const pixelTable = document.querySelector('#pixel-board');
  pixelTable.addEventListener('click', (event) => {
    const selectPixel = event.target;
    const color = document.querySelector('.selected').style.backgroundColor;
    // console.log(color)
    selectPixel.style.backgroundColor = color;
  });
}

setColor();
