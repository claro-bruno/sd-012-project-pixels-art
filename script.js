// Desafio 1, 2 e 3
function paletteColor() {
  const divPai = document.getElementById('color-palette');
  const colorPalette = ['black', 'red', 'blue', 'yellow'];
  for (let index = 0; index < colorPalette.length; index += 1) {
    let divFilha = document.createElement('div');
    divFilha.className = 'color';
    divFilha.style.backgroundColor = colorPalette[index];
    divPai.appendChild(divFilha);
  }
}
paletteColor();
// Desafio 4 e 5
function divFilha() {
  const pixelDiv = document.createElement('div'); // cria 01 (um) quadrado (pixel) usando createElement.
  pixelDiv.className = 'pixel'; // adiciona a classe 'pixel'.
  return pixelDiv; // retorna 01 pixel que é uma div.
}
function linhaParaDivs() {
  const linhaParaPixels = document.createElement('div'); // cria uma div que será uma (01) linha.
  linhaParaPixels.className = 'linha-do-pixel'; // cria classe para para linhaParaPixels.
  return linhaParaPixels; // retorna 01 linha que é uma div
}
function loosParaCriarLinhas(base) { // loop para crias as 5 linhas antes de preencher. Cada linha é uma div.
  const divPixelBoard = document.getElementById('pixel-board'); // captura a div com Id=pixel-board, que será Pai dos elementos do loop
  for (let index = 0; index < base; index += 1) {
    divPixelBoard.appendChild(linhaParaDivs()); // cada linhaParaDivs será filha de divPixelBoard
  }
}
function repetir(linhaParaPixels) { // loop para que divFilha se torne filha do pai linhaParaPixels
  for (let indexRepet = 0; indexRepet < linhaParaPixels.length; indexRepet += 1) {
    linhaParaPixels[indexRepet].appendChild(divFilha());
  }
}
function quadrados(size) {
  const linhaParaPixels = document.getElementsByClassName('linha-do-pixel');
  for (let index = 0; index < linhaParaPixels.length; index += 1) {
    if (index < size) {
      repetir(linhaParaPixels);
    }
  }
}
function comporGrade(tamanho) {
  const divPixelBoard = document.getElementById('pixel-board');
  divPixelBoard.innerHTML = '';
  loosParaCriarLinhas(tamanho);
  quadrados(tamanho);
}
comporGrade(5);

// desafio 6
function corPaleta() {
  const coresPaleta = document.getElementsByClassName('color');
  coresPaleta[0].classList.add('selected');
}
corPaleta();

// Desafio 7
