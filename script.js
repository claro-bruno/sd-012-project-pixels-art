const pixelBoard = document.querySelector('#pixel-board');
const elements = 5;

function pixelBox (linhas) {
    for (let file = 1; file <= linhas; file =+1); {
      const boxFile = document.createElement('box');
      pixelBoard.appendChild(boxFile);
      pixelBoxColumns(boxFile, linhas);
    }
}

function pixelBoxColumns(file, colunas) {
    for (let column = 1; column <= colunas; column += 1); {
      const boxColumn = document.createElement('box');
      boxColumn.classList.add('pixel');
      file.appendChild(boxColumn);
    }
}
pixelBox(elements);
