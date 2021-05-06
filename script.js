let line = 5;
let column = 5;
let pixelBoard = document.getElementById('pixel-board')

function addLine(line) {
  for (let index = 0; index < line; index += 1) {
    let divLine = document.createElement('div');
    divLine.className = 'table-Row';
    pixelBoard.appendChild(divLine);
  };
};

addLine(line);

function addColumn (column) {
  let columnsOfRow = document.getElementsByClassName('table-Row');
  for (let columns of columnsOfRow) {
    for ( let index = 0; index < column; index += 1) {
      let divColumn = document.createElement('div');
      divColumn.className = 'pixel';
      columns.appendChild(divColumn);
    };
  };
};

addColumn(column);

/*function colorSelected (event) {
  let initialColor = document.querySelector('.selected');
  initialColor.classList.remove('selected');
  event.target.classList.add('selected');
};*/

const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');

function selectedColor (event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let indexcolor = 0; indexcolor < colors.length; indexcolor += 1) {
  colors[indexcolor].addEventListener('click', selectedColor);
}

// Após uma sucessão de erros com as funçoes, verifiquei o repositório da colega Adriana Biberg (https://github.com/tryber/sd-012-project-pixels-art/pull/122), cujo a função para acrescentar e remover a classe selected ao mesmo tempo que seleciona a cor de acordo com o click, foi de fácil compreensão.