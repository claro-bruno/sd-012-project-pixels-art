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