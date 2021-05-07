let boardSize = 5;
const allCollors = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');


function setBackgroundColor() {
  document.getElementById('first-div').style.backgroundColor = 'black';
  document.getElementById('second-div').style.backgroundColor = getRandomColor();
  document.getElementById('third-div').style.backgroundColor = getRandomColor();
  document.getElementById('fourth-div').style.backgroundColor = getRandomColor();
}

function createBoard() {
  for (let index = 0; index < boardSize; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    document.querySelector('#pixel-board').appendChild(line);

    for (let index2 = 0; index2 < boardSize; index2 += 1) {
      const box = document.createElement('div');
      box.className = 'pixel';
      line.appendChild(box);
    }
  }
}
function selectColor() {
  allCollors.addEventListener('click', function(event) {
    let replaced = document.querySelector('.selected');
    replaced.classList.remove('selected');
    let clicked = event.target;
    clicked.classList.add('selected');
  })
}

function changePixelColor() {
  pixelBoard.addEventListener('click', function (event) {
    let selectedColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  })
}

function resetColors() {
  window.location.reload(false);
}

function userBoardSize() {
  const newBoardSize = document.querySelector('#board-size').value;

  if (newBoardSize < 5) {
    boardSize = 5;
  } else if (newBoardSize > 50) {
    boardSize = 50;
  } else {
    boardSize = newBoardSize;
  }

  if (newBoardSize.length === 0) {
    alert('Board inválido!');
  } else {
    while (pixelBoard.firstChild) {
      pixelBoard.removeChild(pixelBoard.lastChild);
    }
    createBoard();
  }
}

function getRandomColor() { // encontrei no https://stackoverflow.com/questions/1484506/random-color-generator
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setBackgroundColor();
createBoard();
selectColor();
changePixelColor();
