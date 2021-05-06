window.onload = function () {
  let line = 5;
  let colom = 5;
  let square = document.getElementsByClassName('color');
  let pixelFather = document.getElementById('pixel-board');
  
  let cor = {
    0: 'black',
    1: 'red',
    2: 'blue',
    3: 'yellow'
  };

  for (let key in cor) {
    square[key].style.backgroundColor = cor[key]
  }

  square[0].className = 'color selected'; 

  lines();

  let bt1 = square[0];
  let bt2 = square[1];
  let bt3 = square[2];
  let bt4 = square[3];

  bt1.addEventListener("click", mudaSelecter);
  bt2.addEventListener("click", mudaSelecter);
  bt3.addEventListener("click", mudaSelecter);
  bt4.addEventListener("click", mudaSelecter);
  
  function mudaSelecter(bt) {
    let remov = document.querySelector('.selected');
    remov.classList.remove('selected');
    bt.target.className = ('color selected');
  }
  
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
}
