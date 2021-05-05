let paletaCores = document.querySelector('#color-palette');
let quadro = document.querySelector('#pixel-board');

let tamanhoDoQuadrado = '40px';

let coresPaleta = ['black', 'yellow', 'blue', 'green'];

let numeroDePixelsHorizontal = 5;
let numeroDePixelsVertical = 5;
let corInicialQuadro = 'white';

criaPaletaCores(coresPaleta, tamanhoDoQuadrado);
criaQuadro(
  numeroDePixelsHorizontal,
  numeroDePixelsVertical,
  tamanhoDoQuadrado,
  corInicialQuadro
);

let cores = document.querySelectorAll('.color');
let corInicial = cores[0];
corInicial.className = 'color selected';
for (index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener('click', function (event) {
    for (let index = 0; index < cores.length; index += 1) {
      if (cores[index].className === 'color selected') {
        cores[index].className = 'color';
      }
      event.target.className = 'color selected';
    }
  });
}

function criaPaletaCores(cores, tamanho) {
  for (let index = 0; index < cores.length; index += 1) {
    let novaCor = document.createElement('li');
    let novaCorSize = tamanho;
    novaCor.className = 'color';
    novaCor.style.listStyle = 'none';
    novaCor.style.width = novaCorSize;
    novaCor.style.height = novaCorSize;
    novaCor.style.border = '1px solid black';
    novaCor.style.backgroundColor = cores[index];
    paletaCores.appendChild(novaCor);
  }
}

function criaQuadro(height, width, tamanho, color) {
  for (let index = 0; index < width; index += 1) {
    let novaLinha = document.createElement('tr');
    quadro.appendChild(novaLinha);

    for (let index = 0; index < height; index += 1) {
      let novaColuna = document.createElement('td');
      let novaColunaSize = tamanho;
      novaColuna.className = 'pixel';
      novaColuna.style.listStyle = 'none';
      novaColuna.style.backgroundColor = color;
      novaColuna.style.width = novaColunaSize;
      novaColuna.style.height = novaColunaSize;
      novaColuna.style.border = '1px solid black';
      novaLinha.appendChild(novaColuna);
    }
  }
}
