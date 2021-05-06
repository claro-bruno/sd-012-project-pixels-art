// Criando Box Pixels
const pixelBox = document.querySelector('#pixel-board');
let = createBoardRows(5);

// Gera as linhas
function createBoardRows(linhas) {
  for (let row = 1; row <= linhas; row += 1) {
    const divRow = document.createElement('div');
    divRow.classList.add('tr');
    pixelBox.appendChild(divRow);
    createCollumns(divRow, linhas);
  }
}
// Gera as Colunas
function createCollumns(row, colunas) {
  for (let column = 1; column <= colunas; column += 1) {
    const divColumn = document.createElement('div');
    divColumn.classList.add('box');
    row.appendChild(divColumn);
  }
}
