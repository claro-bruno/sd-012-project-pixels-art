function PaletteColor () { // não entendi exatamente que será o parâmetro dessa função e se é necessário ter um;
let divPai = document.getElementById('color-palette');
let colorPalette = ['black', 'red', 'blue', 'yellow']; //cores de referência para o laço for
for (let index = 0; index < colorPalette.length; index += 1) {
  let divFilha = document.createElement('div');
  divFilha.className = 'color';
  divFilha.style.backgroundColor =colorPalette[index];
  divPai.appendChild(divFilha);
}
}
console.log(PaletteColor()); // não entendi exatamente que será o parâmetro dessa função e se é necessário ter um;
// esse console de cima ^ pode ficar aqui?
function divFilha() { 
  let pixelDiv = document.createElement('div'); //cria 01 (um) quadrado (pixel) usando createElement.
  pixelDiv.className = 'pixel'; // adiciona a classe 'pixel'.
  return pixelDiv; // retorna 01 pixel que é uma div.
}
function linhaParaDivs() {
  const linhaParaPixels = document.createElement('div');  //cria uma div que será uma (01) linha.
  linhaParaPixels.className = 'linha-do-pixel'; // cria classe para para linhaParaPixels.
  return linhaParaPixels; // retorna 01 linha que é uma div
}
function loosParaCriarLinhas(base) { //loop para crias as linhas antes de preencher; 
  const divPixel_board = document.getElementById('pixel-board'); //captura a div com Id=pixel-board, que será Pai dos elementos do loop
  for (let index = 0; index < base; index += 1) {
    divPixel_board.appendChild(linhaParaDivs()); //cada linhaParaDivs será filha de divPixel_board
  }
}
function repetir(linhaParaPixels) { //
  for (let index_rep = 0; index_rep < linhaParaPixels.length; index_rep += 1) {
    linhaParaPixels[index_rep].appendChild(divFilha());
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