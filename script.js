const paletaCores = document.getElementsByClassName('color');
const randomColor1 = Math.random().toString(16).substr(-6);
const randomColor2 = Math.random().toString(16).substr(-6);
const randomColor3 = Math.random().toString(16).substr(-6);

// Código para gerar cor aleatória visto no link https://bit.ly/3exV2bd.

paletaCores[0].style.backgroundColor = 'black';
paletaCores[0].classList.add('selected');
paletaCores[1].style.backgroundColor = `#${randomColor1}`;
paletaCores[2].style.backgroundColor = `#${randomColor2}`;
paletaCores[3].style.backgroundColor = `#${randomColor3}`;

function gerarQuadro(valor) {
let colunas;
let linhas;

if (valor === (undefined) || valor < 5) {
colunas = 5;
linhas = 5;
} else if (valor >= 50) {
 colunas = 50;
 linhas = 50;
} else {
  colunas = valor;
  linhas = valor;
}

  for (let index = 0; index < linhas; index += 1) {
    const divQuadroBranco = document.getElementById('pixel-board');
    const criarDiv = document.createElement('div');

    criarDiv.className = ('pixel-line');
    divQuadroBranco.appendChild(criarDiv);
        
    for (let indice = 0; indice < colunas; indice += 1) {
    const divPixelLine = document.querySelector('#pixel-board').lastElementChild;

    const criarDivPixel = document.createElement('div');

    criarDivPixel.className = ('pixel');
    divPixelLine.appendChild(criarDivPixel);
  }   
    letsColor();
}
}
gerarQuadro();

for (let index = 0; index < paletaCores.length; index += 1) {
  paletaCores[index].addEventListener('click', function (evento) {
    for (let index2 = 0; index2 < paletaCores.length; index2 += 1) {
      paletaCores[index2].className = 'color';
    }
    evento.target.classList.add('selected');
  });
}

function letsColor() {
  const pixelBranco = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBranco.length; index += 1) {
    pixelBranco[index].addEventListener('click', function(evento) {
    let corSelecionada = document.querySelector('.selected');
    evento.target.style.backgroundColor = corSelecionada.style.backgroundColor;
    });
}
}

const botaoGenerateBoard = document.getElementById('generate-board');
botaoGenerateBoard.addEventListener('click', modificarQuadro);

function modificarQuadro() {
  let linhasPixel = document.querySelectorAll('.pixel-line');

  let valorInserido = document.getElementById('board-size');

  if (valorInserido.value == false) {
    alert('Board inválido!');
  } else {
    for (let index = 0; index < linhasPixel.length; index += 1) {
      linhasPixel[index].remove();
    }
    gerarQuadro(valorInserido.value);
    letsColor();
  }
}

const botaoClearBoard = document.getElementById('clear-board');
botaoClearBoard.addEventListener('click', limparQuadro);

function limparQuadro() {  
  const pixelBranco = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBranco.length; index += 1) {
    pixelBranco[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
