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
const createBoard = document.querySelector("#pixel-board")

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