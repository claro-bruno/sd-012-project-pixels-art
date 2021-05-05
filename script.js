window.onload = function () {
  let line = 5;
  let colom = 5;
  let square = document.getElementsByClassName('color');
  let pixel = document.getElementById('pixel-board');
  cor = {
    0: 'black',
    1: 'red',
    2: 'blue',
    3: 'yellow'
  };

  for (let key in cor) {
    square[key].style.backgroundColor = cor[key]
  }

  function lines() {
    for (let linha = 0; linha < line; linha += 1) {
      colunas();      
    }
  }

  function colunas() {
    for (let coluna = 0; coluna < colom; coluna += 1) {
      
    }
  }

};