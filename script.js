function PaletteColor () { // não entendi exatamente que será o parâmetro dessa função e se é necessário ter um;
let divPai = document.querySelector('#color-palette');
let colorPalette = ['preto', 'vermelho', 'azul', 'amarelo']; //cores de referência para o laço for
for (let index = 0; index < colorPalette.length; index += 1) {
  let divFilha = document.createElement('div');
  divFilha.className = 'color';
  if (colorPalette[index] === 'preto') {
    divFilha.style.backgroundColor = 'black';
  }
  if (colorPalette[index] === 'vermelho') {
    divFilha.style.backgroundColor = 'red';
  }
  if (colorPalette[index] === 'azul') {
    divFilha.style.backgroundColor = 'blue';
  }
  if (colorPalette[index] === 'amarelo') {
    divFilha.style.backgroundColor = 'yellow';
  }
  divPai.appendChild(divFilha);
}
}
console.log(PaletteColor()); // não entendi exatamente que será o parâmetro dessa função e se é necessário ter um;
