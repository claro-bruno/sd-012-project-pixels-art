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
