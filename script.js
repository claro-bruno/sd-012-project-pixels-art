window.onload = function () {
  // Cria cores aleatórias
  const generateRandomColor = () => {
    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);
    let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    while (randomColor === 'rgb(255, 255, 255)' || randomColor === 'rgb(0, 0, 0)') {
      randomR = Math.floor(Math.random() * 255);
      randomG = Math.floor(Math.random() * 255);
      randomB = Math.floor(Math.random() * 255);
    }
    randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    return randomColor;
  };

  // Cria paleta de cores
  const captureColorPalette = document.querySelector('#color-palette');

  for (let index = 0; index < 4; index += 1) {
    const newColor = document.createElement('div');
    newColor.className = 'color';
    if (index === 0) {
      newColor.style.backgroundColor = 'black';
    } else {
      newColor.style.backgroundColor = generateRandomColor();
    }
    captureColorPalette.appendChild(newColor);
  }

  // Cria quadro de pixels
  const captureBoard = document.querySelector('#pixel-board');
  const captureBoardSize = document.querySelector('#board-size');
  captureBoardSize.value = 5;

  const createBoard = () => {
    captureBoard.innerHTML = '';
    for (let line = 0; line < captureBoardSize.value; line += 1) {
      const newLine = document.createElement('tr');
      for (let cell = 0; cell < captureBoardSize.value; cell += 1) {
        const newCell = document.createElement('td');
        newCell.className = 'pixel';
        newCell.style.backgroundColor = 'white';
        newLine.appendChild(newCell);
      }
      captureBoard.appendChild(newLine);
    }
  };

  createBoard();

  // Seleciona a cor preta como cor inicial
  const captureInitialColor = document.querySelector('.color');
  captureInitialColor.classList.add('selected');

  // Seleciona a cor desejada
  const changeSelectedColor = (event) => {
    const captureColor = document.querySelector('.selected');
    captureColor.classList.remove('selected');
    event.target.classList.add('selected');
  };

  // Colore os pixels com a cor selecionada
  const colorPixels = (event) => {
    const captureSelectedColor = document.querySelector('.color.selected').style.backgroundColor;
    if (event.target.style.backgroundColor === captureSelectedColor) {
      event.target.style.backgroundColor = 'white';
    } else {
      event.target.style.backgroundColor = captureSelectedColor;
    }
  };

  // Adiciona o botão de limpar o board
  const clearBoard = () => {
    const capturePixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < capturePixel.length; index += 1) {
      capturePixel[index].style.backgroundColor = 'white';
    }
  };

  // Permite que o usuário selecione o tamanho do quadro
  const createNewBoard = () => {
    if (captureBoardSize.value.length === 0) {
      window.alert('Board inválido!');
    } else if (captureBoardSize.value < 5) {
      captureBoardSize.value = 5;
      createBoard();
    } else if (captureBoardSize.value > 50) {
      captureBoardSize.value = 50;
      createBoard();
    } else {
      createBoard();
    }
  };

  // Adiciona eventos
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
      changeSelectedColor(event);
    }
    if (event.target.classList.contains('pixel')) {
      colorPixels(event);
    }
    if (event.target.id === 'clear-board') {
      clearBoard();
    }
    if (event.target.id === 'generate-board') {
      createNewBoard();
    }
  });
};
