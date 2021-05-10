const pixelBoard = document.querySelector('#pixel-board');

const size = 5;

function pixelBoardColunas(valorLinha, valorColuna) {
  for (let coluna = 1; coluna <= valorColuna; coluna += 1) {
    const pixelColuna = document.createElement('div');
    pixelColuna.classList.add('pixel');
    valorLinha.appendChild(pixelColuna);
  }
}

function pixelBoardLinhas(linhas) {
  for (let linha = 1; linha <= linhas; linha += 1) {
    const pixelLinha = document.createElement('div');
    pixelBoard.appendChild(pixelLinha);
    pixelBoardColunas(pixelLinha, linhas);
  }
}

pixelBoardLinhas(size);
