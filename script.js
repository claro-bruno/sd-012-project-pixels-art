let getInputValue = document.getElementById('board-size').value;
const defaultValue = 5;
const getBoard = document.getElementById('pixel-board');
const firstColor = document.querySelector('.first-color');
firstColor.classList.add('selected');

for (let index = 1; index < 4; index += 1) {
  const randomColorArray = [];
  for (let randomRGB = 1; randomRGB <= 3; randomRGB += 1) {
    const randomNumberRGB = parseInt(((Math.random() * 255) + 1), 10);
    randomColorArray.push(randomNumberRGB);
  }
  const colorNumber = document.getElementsByClassName('color');
  const colorRGB = `rgb(${randomColorArray[0]},${randomColorArray[1]},${randomColorArray[2]})`;
  colorNumber[index].style.backgroundColor = colorRGB;
}

function createTableRow(row, sideOfBoard) {
  const sideLength = sideOfBoard;
  const tableRow = document.createElement('tr');
  tableRow.className = 'board-row';
  getBoard.appendChild(tableRow);
  const getBoardRow = document.getElementsByClassName('board-row')[row];
  for (let column = 1; column <= sideLength; column += 1) {
    const tableColumn = document.createElement('td');
    tableColumn.className = 'pixel';
    tableColumn.style.backgroundColor = 'white';
    getBoardRow.appendChild(tableColumn);
  }
}

function createTable(inputValue) {
  const sideOfBoard = inputValue;
  for (let row = 0; row < sideOfBoard; row += 1) {
    createTableRow(row, sideOfBoard);
  }
}

function setSelected(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

function setPixelBackgroundColor(event) {
  const selectedElement = document.querySelector('.selected');
  const selectedElementStyle = window.getComputedStyle(selectedElement);
  const selectedBackgroundColor = selectedElementStyle.getPropertyValue('background-color');
  const initialColor = 'white';
  const eventTarget = event.target;
  if (eventTarget.style.backgroundColor === selectedBackgroundColor) {
    eventTarget.style.backgroundColor = initialColor;
  } else {
    eventTarget.style.backgroundColor = selectedBackgroundColor;
  }
}

function resetBoard() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let pixel = 0; pixel < allPixels.length; pixel += 1) {
    allPixels[pixel].style.backgroundColor = 'white';
  }
}

function newBoard() {
  getInputValue = document.getElementById('board-size').value;
  if (getInputValue >= 50) {
    getBoard.innerHTML = '';
    createTable(50);
  } else if (getInputValue > 5 && getInputValue < 50) {
    getBoard.innerHTML = '';
    createTable(getInputValue);
  } else if (getInputValue > 0) {
    getBoard.innerHTML = '';
    createTable(defaultValue);
  } else {
    window.alert('Board inválido!');
  }
}

createTable(defaultValue);

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('color')) {
    setSelected(event);
  }
  if (event.target.classList.contains('pixel')) {
    setPixelBackgroundColor(event);
  }
  if (event.target.id === 'clear-board') {
    resetBoard();
  }
  if (event.target.id === 'generate-board') {
    newBoard();
  }
});
