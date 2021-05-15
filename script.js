const colors = document.getElementsByClassName('color');
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', function (event) {
    for (let index2 = 0; index2 < colors.length; index2 += 1) {
      if (colors[index2].classList.contains('selected')) {
        colors[index2].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
};

colorPixel();

function colorPixel() {
  let pixelcolor = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelcolor.length; index += 1) {
    pixelcolor[index].addEventListener('click', function (event) {
      let selected = document.querySelector('.selected');
      let selectedColor = window.getComputedStyle(selected).backgroundColor;
      event.target.style.backgroundColor = selectedColor;
    });
  };
  const botaoLimpar = document.getElementById('clear-board');
  botaoLimpar.addEventListener('click', function () {
    let pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    };
  });

  const board = document.querySelector('#pixel-board');
  const input = document.querySelector('#board-size');
  const generateBoardButton = document.querySelector('#generate-board');
  generateBoardButton.addEventListener('click', function () {
    if (!input.value) {
      alert("Board inválido!");
    }
    if (input.value < 5) {
      input.value = 5;
    }
    if (input.value > 50) {
      input.value = 50;
    }
    removeOldBoard();
    for (let index = 0; index < input.value; index += 1) {
      let row = criandoLinhas(input.value);
      board.appendChild(row);
    };
    colorPixel();
  });


  for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = generateRandomColor();
  };

  function generateRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r} ,${g} ,${b})`;
    return color;
  };

  function criandoLinhas(numberOfPixels) {
    let row = document.createElement('tr');
    for (let index = 0; index < numberOfPixels; index += 1) {
      let col = document.createElement('td');
      col.className = 'pixel';
      row.appendChild(col);
    }
    return row;
  }

  function removeOldBoard() {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    };
  };

  function removeOldBoard() {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    };
  };
}
