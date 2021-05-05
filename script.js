let paletaCores = document.querySelector('#color-palette');
let quadro = document.querySelector('#pixel-board');

let tamanhoDoQuadrado = '30px';

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
  for (let index = 0; index < height; index += 1) {
        let novaColuna = document.createElement('div');
        quadro.appendChild(novaColuna);


    for (let index = 0; index < width; index += 1) {
        let novaLinha = document.createElement('li');
        let novaLinhaSize = tamanho;
        novaLinha.className = 'pixel';
        novaLinha.style.listStyle = 'none';
        novaLinha.style.backgroundColor = color;
        novaLinha.style.width = novaLinhaSize;
        novaLinha.style.height = novaLinhaSize;
        novaLinha.style.border = '1px solid black';
        novaColuna.appendChild(novaLinha);
    }
  }
}
