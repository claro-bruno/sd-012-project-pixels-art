function getColorSelected() {
  const select = document.getElementsByClassName('selected')[0];
  const bgColor = select.style.backgroundColor;
  return bgColor;
}

function clear() {
  const board = document.getElementsByClassName('pixel');
  for (let boardClear = 0; boardClear < board.length; boardClear += 1) {
    board[boardClear].style.backgroundColor = 'white';
  }
}

function paint(event) {
  const cor = event.style.backgroundColor;
  if (cor === getColorSelected()) {
    event.style.backgroundColor = 'white';
  } else {
    event.style.backgroundColor = getColorSelected();
  }
}

function mudaSelecter(bt) {
  let remov = document.querySelector('.selected');
  remov.classList.remove('selected');
  bt.target.className = ('color selected');
}

function lines(line, pixelFather) {
  for (let linha = 0; linha < line; linha += 1) {
    let pixelChild = document.createElement('div');
    pixelFather.appendChild(pixelChild);
    pixelChild.className = 'line';
    pixelChild.style.height = `${(200/line)}px`;
    colunas(pixelChild, line);
  }
}

function colunas(pixelLine, colom) {
  for (let coluna = 0; coluna < colom; coluna += 1) {
    let pixelChild = document.createElement('div');
    pixelChild.className = 'pixel';
    pixelChild.style.backgroundColor = 'white';
    pixelChild.style.width = `${(200/colom)}px`;
    pixelChild.style.height = `${(200/colom)}px`;
    pixelLine.appendChild(pixelChild);
  }
}
function createColor(square) {
   let cor = {
    0: 'black',
    1: `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`,
    2: `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`,
    3: `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
  };
  for (let key in cor) {
    square[key].style.backgroundColor = cor[key]
  }
}

function changeSize(test) {
  let father = document.getElementById('pixel-board');
  if (test > 4 && test < 51) {
    while (father.firstChild) {
      father.removeChild(father.firstChild)
    }
    lines(test, father);
  } else {
    limBoard(test);
  }
}

function limBoard(test) {
  if (test > 50) {
    changeSize(50);
  } else {
    changeSize(5);
  }
}

function testIn(test) {
  if (test === '') {
    alert('Board inválido!');
  } else {
    changeSize(parseInt(test));
  }
}

window.onload = function main() {
  let line = 5;
  let square = document.getElementsByClassName('color');
  let pixelFather = document.getElementById('pixel-board');
  let clean = document.getElementById('clear-board');
  let mudaTamanho = document.getElementById('generate-board');

  createColor(square);

  square[0].className = 'color selected'; 

  lines(line, pixelFather);
  
  clean.addEventListener('click', clear);

  for (let evento = 0; evento < square.length; evento += 1) {
    square[evento].addEventListener("click", mudaSelecter);
  }
    
  document.addEventListener('click', function (event) {
    if (event.target.className === 'pixel') {
      let eventBgColor = event.target;
      paint(eventBgColor);
    }  
    });

  mudaTamanho.addEventListener('click', function (event) {
    let test = document.getElementById('board-size').value;
    testIn(test);
  });
}
