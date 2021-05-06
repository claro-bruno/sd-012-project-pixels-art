function paletasCores(arrayColor) {
  let colorContainer = document.querySelector('#color-palette');
  // let cores = arrayColor;

  for (let index = 0; index < arrayColor.length; index += 1) {
    if (arrayColor[index] === 'black') {
      let colorItem = document.createElement('li');
      colorItem.className = 'color';
      colorItem.style.backgroundColor = 'black';
      colorContainer.appendChild(colorItem);
    } else if (arrayColor[index] === 'red') {
      let colorItem = document.createElement('li');
      colorItem.className = 'color';
      colorItem.style.backgroundColor = 'red';
      colorContainer.appendChild(colorItem);
    } else if (arrayColor[index] === 'purple') {
      let colorItem = document.createElement('li');
      colorItem.className = 'color';
      colorItem.style.backgroundColor = 'purple';
      colorContainer.appendChild(colorItem);
    } else {
      let colorItem = document.createElement('li');
      colorItem.className = 'color';
      colorItem.style.backgroundColor = 'green';
      colorContainer.appendChild(colorItem);
    }
  }
}
paletasCores(['black', 'red', 'purple', 'green']);

function criandoQuadrado(tamanho) {
  let getPixelContainer = document.querySelector('#pixel-board');

  //Cria as linhas da tabela
  for (let lineIndex = 0; lineIndex < tamanho; lineIndex += 1) {
    let pixelCriado = document.createElement('tr');
    getPixelContainer.appendChild(pixelCriado);
  }

  //Capturando uma LISTA com as linhas da tabela
  let getTrContainer = document.querySelectorAll('tr');
  //Primeira linha => getTrContainer[0];
  //Segunda linha => getTrContainer[1];

  for (let index = 0; index < getTrContainer.length; index += 1) {
    //SEgunda iteração - index=1 - getTrContainer[1] - Segunda linha!
    for (let colunaIndex = 0; colunaIndex < tamanho; colunaIndex += 1) {
      //Criando o segundo pixel
      let pixelColuna = document.createElement('td');
      pixelColuna.className = 'pixel';
      pixelColuna.style.backgroundColor = 'white';
      //Inserindo na primeira linha o primeiro pixel!
      getTrContainer[index].appendChild(pixelColuna);
    }
  }
}

criandoQuadrado(5);

// Exercicio 6:

// window.onload = function () {
let firstColor = document.querySelector('.color');
firstColor.className = 'color selected';
// };

// Exercicio 7:

window.onload = function () {
  let colorContainer = document.querySelector('ul');
  // let corSelecionada = document.querySelector('.selected');

  colorContainer.addEventListener('click', function (event) {
    let corSelecionada = document.querySelector('.selected');
    console.log(corSelecionada);
    corSelecionada.className = 'color';
    console.log(corSelecionada);
    event.target.className = 'color selected';
  });
};
