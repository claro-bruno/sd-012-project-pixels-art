const pixelBoard = document.querySelector('#pixel-board');

function creatingPixelBoardCollumns(row, colunas) {
    for (let column = 1; column <= colunas; column += 1) {
      const divColumn = document.createElement('div');
      divColumn.classList.add('pixel');
      divColumn.classList.add('td');
      row.appendChild(divColumn);
    }
  }

  function creatingPixelBoardRows(linhas) {
    for (let row = 1; row <= linhas; row += 1) {
      const divRow = document.createElement('div');
      divRow.classList.add('tr');
      pixelBoard.appendChild(divRow);
      creatingPixelBoardCollumns(divRow, linhas);
    }
  }