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
  const remov = document.querySelector('.selected');
  remov.classList.remove('selected');
  bt.target.className = ('color selected');
}

function colunas(pixelLine, colom) {
  for (let coluna = 0; coluna < colom; coluna += 1) {
    const pixelChild = document.createElement('div');
    pixelChild.className = 'pixel';
    pixelChild.style.backgroundColor = 'white';
    pixelChild.style.width = `${(200 / colom)}px`;
    pixelChild.style.height = `${(200 / colom)}px`;
    pixelLine.appendChild(pixelChild);
  }
}

function lines(line, pixelFather) {
  for (let linha = 0; linha < line; linha += 1) {
    const pixelChild = document.createElement('div');
    pixelFather.appendChild(pixelChild);
    pixelChild.className = 'line';
    pixelChild.style.height = `${(200 / line)}px`;
    colunas(pixelChild, line);
  }
}

function createColor(square) {
  let array = [];
  for (let index = 0; index < 3 * square; index += 1) {
    array.push(Math.round(Math.random()*255))
  }
  
  const cor = {
    0: 'black',
    1: `rgb(${array[0]},${array[1]},${array[2]})`,
    2: `rgb(${array[3]}},${array[4]},${array[5]})`,
    3: `rgb(${array[6]},${array[7]},${array[8]})`
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
