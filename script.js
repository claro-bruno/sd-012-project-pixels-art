const table = document.querySelector('#pixel-board');

function createSquares(numberOfLines) {
  for (let index = 0; index < numberOfLines; index += 1) {
    let line = document.createElement('tr');
    line.id = `line ${index}`;
    line.classList.add('line');
    table.appendChild(line);
    for (let index = 0; index < numberOfLines; index += 1) {
      let column = document.createElement('td');
      column.id = `column ${index}`;
      column.classList.add('pixel');
      line.appendChild(column);
    }
  }
}

createSquares(5);