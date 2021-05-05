window.onload = function () {
  let line = 5;
  let colom = 5;
  let square = document.getElementsByClassName('color');
  let pixelFather = document.getElementById('pixel-board');

  cor = {
    0: 'black',
    1: 'red',
    2: 'blue',
    3: 'yellow'
  };

  for (let key in cor) {
    square[key].style.backgroundColor = cor[key]
  }
   lines();

  function lines() {
    for (let linha = 0; linha < line; linha += 1) {
      let pixelChild = document.createElement('div');
      pixelFather.appendChild(pixelChild);
      pixelChild.className = 'line';
      colunas(pixelChild);
    }
  }

  function colunas(pixelLine) {
    for (let coluna = 0; coluna < colom; coluna += 1) {
      let pixelChild = document.createElement('div');
      pixelChild.className = 'pixel';
      pixelLine.appendChild(pixelChild);
    }
  }

};