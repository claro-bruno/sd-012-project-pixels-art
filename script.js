function creatBoard(linha) {
let tamanho = linha * linha;
//   let pixelBoard = document.querySelector('pixel');
  for (let index = 0; index < tamanho; index ++) {
  let div = document.createElement('div');
  div.className = 'pixel';
  let pai = document.getElementById('pixel-board');
  pai.appendChild(div);
  }
}  
creatBoard(5);