window.onload = function () {
  let boardSide = document.getElementById('board-size').value;
  let getBoard = document.getElementById('pixel-board');  
  let firstColor = document.querySelector('.color1');
  firstColor.classList.add('selected');
  
  createTable(boardSide);

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
      setSelected(event);
    };
    if (event.target.classList.contains('pixel')) {
      setPixelBackgroundColor(event);
    };
    if (event.target.id === 'clear-board') {
      resetBoard();
    };
    if (event.target.id === 'generate-board') {
      boardSide = document.getElementById('board-size').value;
      if (boardSide > 0) {
        getBoard.innerHTML = '';
        createTable(boardSide);
      }
    };
  });
  
  function createTable(boardSide) {
    for (let row = 0; row < boardSide; row += 1) {
      createTableRow(row);
    };
  };

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
    };
  };

  function setSelected(event) {
    const selectedElement = document.querySelector('.selected');
    selectedElement.classList.remove('selected');
    event.target.classList.add('selected');
  };

  function setPixelBackgroundColor(event) {
    const selectedElement = document.querySelector('.selected');
    const selectedBackgroundColor = window.getComputedStyle(selectedElement).getPropertyValue('background-color');
    const initialColor = 'white';
    if (event.target.style.backgroundColor === selectedBackgroundColor) {
      event.target.style.backgroundColor = initialColor;
    } else {
      event.target.style.backgroundColor = selectedBackgroundColor;
    };
  };

  function resetBoard() {
    const allPixels = document.getElementsByClassName('pixel');
    for (let pixel of allPixels) {
      pixel.style.backgroundColor = 'white';
    };
  };

};