// Desafio 1, 2 e 3
function paletteColor () { // não entendi exatamente que será o parâmetro dessa função e se é necessário ter um;
  const divPai = document.getElementById('color-palette');
  const colorPalette = ['black', 'red', 'blue', 'yellow']; //cores de referência para o laço for
  for (let index = 0; index < colorPalette.length; index += 1) {
    const divFilha = document.createElement('div');
    divFilha.className = 'color';
    divFilha.style.backgroundColor = colorPalette[index];
    divPai.appendChild(divFilha);
  }
}
paletteColor();
// Desafio 4 e 5
function divFilha() {
  const pixelDiv = document.createElement('div'); //cria 01 (um) quadrado (pixel) usando createElement.
  pixelDiv.className = 'pixel'; // adiciona a classe 'pixel'.
  return pixelDiv; // retorna 01 pixel que é uma div.
}
function linhaParaDivs() {
  const linhaParaPixels = document.createElement('div');  //cria uma div que será uma (01) linha.
  linhaParaPixels.className = 'linha-do-pixel'; // cria classe para para linhaParaPixels.
  return linhaParaPixels; // retorna 01 linha que é uma div
}
function loosParaCriarLinhas(base) { //loop para crias as 5 linhas antes de preencher. Cada linha é uma div.
  const divPixel_board = document.getElementById('pixel-board'); //captura a div com Id=pixel-board, que será Pai dos elementos do loop
  for (let index = 0; index < base; index += 1) {
    divPixel_board.appendChild(linhaParaDivs()); //cada linhaParaDivs será filha de divPixel_board
  }
}
function repetir(linhaParaPixels) { //
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
  const divPixel_board = document.getElementById('pixel-board');
  divPixel_board.innerHTML = '';
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