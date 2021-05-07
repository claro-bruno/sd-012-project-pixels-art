function createBoxPalette() {
  let containerPalette = document.querySelector('#color-palette');
  for (let create = 1; create <= 4; create += 1) {
    let createBoxColor = document.createElement('div');
    createBoxColor.classList.add('color');

    containerPalette.appendChild(createBoxColor);
  }
}
createBoxPalette();

//Consegui esse requisito através do PR do Jossany Moura
//https://github.com/tryber/sd-012-project-pixels-art/pull/67/files
function colorsPalette() {
  let palette = document.getElementsByClassName('color');
  palette[0].style.backgroundColor = 'rgb(000,000,000)';
  palette[0].classList.add('selected');
  for (let index = 1; index < palette.length; index += 1) {
    let colorRandom = [];
    for (let index = 0; index <= 2; index += 1) {
      colorRandom.push(Math.round(Math.random() * 255));
    }
    palette[index].style.backgroundColor = `rgb(${colorRandom})`;
  }
}
colorsPalette();

function addpixels(numberPixel) {
  let containerPixels = document.querySelector('#pixel-board');
  let boardWidth = numberPixel * 40 + numberPixel * 2 + 1;
  containerPixels.style.width = `${boardWidth}px`;

  for (let createLine = 1; createLine <= numberPixel; createLine += 1) {
    for (let createColumn = 1; createColumn <= numberPixel; createColumn += 1) {
      let createPixels = document.createElement('div');
      createPixels.classList.add('pixel');
      containerPixels.appendChild(createPixels);
    }
  }
  paintPixels();
}

addpixels(5);
window.onload = function classSelected() {
  let palette = document.querySelectorAll('.color');
  if (palette[0].style.backgroundColor == 'rgb(0, 0, 0)') {
    palette[0].classList.add('selected');
  }
  for (let index = 0; index < palette.length; index += 1) {
    palette[index].addEventListener('click', function (event) {
      let elementSelected = document.querySelector('.selected');
      elementSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
};

let colorSelected;
let paletteColors = document.querySelectorAll('.color', '.selected');
//define a cor selecionada
for (let index = 0; index < paletteColors.length; index += 1) {
  paletteColors[index].addEventListener('click', function (event) {
    colorSelected = event.target.style.backgroundColor;
  });
}

//Cria botão limpar board
function createButtonClear() {
  let buttonClear = document.createElement('button');
  buttonClear.id = 'clear-board';
  buttonClear.innerHTML = 'Limpar';
  document.querySelector('#container-options').appendChild(buttonClear);
}
createButtonClear();

// Cria event de limpar os pixels
let buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearBoard);
function clearBoard() {
  let pixels = document.querySelectorAll('.pixel');
  for (let pix = 0; pix < pixels.length; pix += 1) {
    pixels[pix].style.backgroundColor = 'white';
  }
}

//Cria input e button
function createInputAndButton() {
  let createInput = document.createElement('input');
  let createButton = document.createElement('button');
  createInput.id = 'board-size';
  createButton.id = 'generate-board';
  createButton.innerHTML = 'VQV';
  document.querySelector('#container-options').appendChild(createInput);
  document.querySelector('#container-options').appendChild(createButton);
}
createInputAndButton();

//Adiciona pixels no board
function createNewBoard() {
  let input = document.querySelector('#board-size');
  input.setAttribute('min', 1);
  input.setAttribute('max', 50);
  input.setAttribute('type', 'number');
}
createNewBoard();

let button = document.querySelector('#generate-board');
button.addEventListener('click', createPixels);

function createPixels() {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    document.querySelector('.pixel').remove();
  }
  let numberPixels = document.querySelector('#board-size').value;
  if (numberPixels === '') {
    alert('Board inválido!');
  } else if (numberPixels < 5) {
    addpixels(5);
  } else if (numberPixels > 50) {
    addpixels(50);
  } else {
    addpixels(numberPixels);
  }

  paintPixels();
}

function paintPixels() {
  let pixels = document.querySelectorAll('.pixel');
  //pinta o pixel com a cor selecionada
  for (let pix = 0; pix < pixels.length; pix += 1) {
    pixels[pix].addEventListener('click', function (event) {
      if (colorSelected == null) {
        event.target.style.backgroundColor = 'rgb(0,0,0)';
      } else {
        event.target.style.backgroundColor = colorSelected;
      }
    });
  }
}
