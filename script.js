const pixelBoard = document.querySelector('#pixel-board');

function creatingPixelBoardCollumns(row, colunas) {
    for (let column = 1; column <= colunas; column += 1) {
      const divColumn = document.createElement('div');
      divColumn.classList.add('pixel');
      divColumn.classList.add('td');
      row.appendChild(divColumn);
    }
  }