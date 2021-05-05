// Cria quadro de pixels
const captureBoardSize = document.querySelector('#board-size');
const captureBoard = document.querySelector('#pixel-board');
captureBoardSize.value = 5;

for (let line = 0; line < captureBoardSize.value; line += 1) {
  let newLine = document.createElement('tr');
    for (let cell = 0; cell < captureBoardSize.value; cell += 1) {
      let newCell = document.createElement('td');
      newCell.className = 'pixel'
      newLine.appendChild(newCell);
    }
  captureBoard.appendChild(newLine);
}
