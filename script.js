window.onload = function () {
  let boardSide = 5;
  let getBoard = document.getElementById('pixel-board');  
  let firstColor = document.querySelector('.color1');

  //Define a cor preta como cor inicial
  firstColor.classList.add('selected');

  //Chama as funções
  createTable();

  //Cria dinamicamente uma linha da tabela com um determinado número de colunas
  function createTableRow(row) {
    let tableRow = document.createElement('tr');
    tableRow.className = 'board-row';
    getBoard.appendChild(tableRow);
    let getBoardRow = document.getElementsByClassName('board-row')[row];
    for (let column = 1; column <= boardSide; column += 1) {
      const tableColumn = document.createElement('td');
      tableColumn.className = 'pixel';
      tableColumn.style.backgroundColor = 'white';
      getBoardRow.appendChild(tableColumn);
    }
  }

  //Cria dinamicamente um determinado número de linhas da tabela
  function createTable() {
    for (let row = 0; row < boardSide; row += 1) {
      createTableRow(row);
    }
  }

}
