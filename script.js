// Funcao que cria paleta de cores random
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
const paletaDeCores = document.querySelectorAll('.color');

window.onload = () => {
  const blackColor = document.querySelector('#first-color');
  blackColor.classList.add('selected');
  function randomColors() {
    const orange = Math.random() * 255;
    const blue = Math.random() * 255;
    const grey = Math.random() * 255;

    return `rgb(${orange},${blue},${grey})`;
  }

  for (let color = 1; color < paletaDeCores.length; color += 1) {
    paletaDeCores[color].style.backgroundColor = randomColors();
  }
};

// Funcao que cria o pixel-board
const pixelBoard = document.querySelector('#pixel-board');

function pixelBoardColunas(linhas, colunas) {
  for (let coluna = 1; coluna <= colunas; coluna += 1) {
    const pixelColuna = document.createElement('div');
    pixelColuna.classList.add('pixel');
    linhas.appendChild(pixelColuna);
  }
}

function pixelBoardLinhas(linhas) {
  for (let linha = 1; linha <= linhas; linha += 1) {
    const pixelLinha = document.createElement('div');
    pixelBoard.appendChild(pixelLinha);
    pixelBoardColunas(pixelLinha, linhas);
  }
}

pixelBoardLinhas(5);

// Funcao que seleciona a cor e da as cores ao board
let cor = 'black';

function selecionaCor(corSelecionada) {
  const corEscolhida = corSelecionada.target;
  if (corEscolhida.classList.contains('pixel')) {
    corEscolhida.style.backgroundColor = cor;
  } else if (corEscolhida.classList.contains('color')) {
    document.querySelector('.selected').className = ('color');
    corEscolhida.className = ('color selected');
    cor = window.getComputedStyle(corEscolhida).backgroundColor;
  }
}

document.addEventListener('click', selecionaCor);

// Funcao que reseta o board
function resetBoard() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    const pixelSquare = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelSquare.length; index += 1) {
      pixelSquare[index].style.backgroundColor = 'white';
    }
  });
}
resetBoard();
