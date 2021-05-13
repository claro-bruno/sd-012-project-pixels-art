// Código para gerar cor de fundo aleátoria:
// Referência: 
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

const colorSelected = document.querySelectorAll('.color');

window.onload = () => {
  const blackColor = document.querySelector('#c1');
  blackColor.classList.add('selected');

  function randomColors() {
    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;

    return `rgb(${red},${green},${blue})`;
  };

  for (let indexColor = 1; indexColor < colorSelected.length; indexColor += 1) {
    colorSelected[indexColor].style.backgroundColor = randomColors();
  };
};

//Código para gerar quadro pixels:
//Referência:
// https://github.com/tryber/sd-012-project-pixels-art/pull/152/files#

const createBoard = document.querySelector("#pixel-board");

  function createBoardColumns(lines, columns) {
  for (let indexColumns = 1; indexColumns <= columns; indexColumns += 1) {
    const pixelColumns = document.createElement('div');
    pixelColumns.classList.add('pixel');
    lines.appendChild(pixelColumns);
  };
};

function createBoardLines (lines) {
  for (let indexLines = 1; indexLines <= lines; indexLines += 1) {
    const pixelLines = document.createElement('div');
    createBoard.appendChild(pixelLines);
    createBoardColumns(pixelLines, lines);
  };
};

createBoardLines(5);


//Código para selecionar as cores a serem pintadas no board: 

let color = '#000';

function selectColor (selectedColor) {
  const pickedColor = selectedColor.target;
  if (pickedColor.classList.contains('pixel')) {
    pickedColor.style.backgroundColor = color;
  } else if (pickedColor.classList.contains('color')) {
    document.querySelector('.selected').className = ('color');
    pickedColor.className = ('color selected');
    color = window.getComputedStyle(pickedColor).backgroundColor;
  }
}

document.addEventListener('click', selectColor);
// Código para usuário escolher tamanho do board: 

const randomSizeInput = document
const randomSizeButton = document.querySelector('#generate-board');




