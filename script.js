const table = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');


function createSquares(numberOfLines) {
  for (let index = 0; index < numberOfLines; index += 1) {
    const line = document.createElement('tr');
    line.id = `line ${index}`;
    line.classList.add('line');
    table.appendChild(line);
    for (let index2 = 0; index2 < numberOfLines; index2 += 1) {
      const column = document.createElement('td');
      column.id = `column ${index2}`;
      column.classList.add('pixel');
      line.appendChild(column);
    }
  }
}

createSquares(5);

function changeSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index3 = 0; index3 < colors.length; index3 += 1) {
  colors[index3].addEventListener('click', changeSelected);
}
