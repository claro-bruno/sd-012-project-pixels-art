const cor1 = 'rgb(0, 0, 0)';
const cor2 = 'rgb(255, 0, 0)';
const cor3 = 'rgb(0, 100, 255)';
const cor4 = 'rgb(0, 255, 0)';
const cor5 = 'rgb(56,102,65)';
const cor6 = 'rgb(41,51,92)';
const cor7 = 'rgb(243,167,18)';
const cor8 = 'rgb(3,206,164)';
const cor9 = 'rgb(227, 99,151)';
const cor10 = 'rgb(128, 26, 134)';
const cor11 = 'rgb(106,90,205)';
const cor12 = 'rgb(192,192,192)';
const cor13 = 'rgb(173,216,230)';
const cor14 = 'rgb(0,100,0)';
const cor15 = 'rgb(210,105,30)';
const cor16 = 'rgb(139,69,19)';
const cor17 = 'rgb(255,99,71)';
const cor18 = 'rgb(255,215,0)';
const cor19 = 'rgb(143,188,143)';
const cor20 = 'rgb(245,222,179)';
const corBranco = 'rgb(255, 255, 255)';
const linha = 5;
const coluna = 5;

const cor = [cor1, cor2, cor3, cor4, cor5, cor6, cor7, cor8, cor9, cor10, cor11, cor12, cor13, cor14, cor15, cor16, cor17, cor18, cor19, cor20];

const espaco = ' ';
const selected = 'selected';
let corEscolha = 'cor1';

// Atribui um ID para os elementos com a classe "color"
// e atribui uma cor de fundo para cada elemento
// atribui a classe "selected" para o primeiro item do array cor[]
function coresPaleta() {
  let paleta = document.getElementsByClassName('color');
  for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].setAttribute('id', 'cor' + (index + 1));
    if (paleta[index].id === 'cor1') {
      paleta[index].style.backgroundColor = cor1;
    } else if (paleta[index].id === ('cor' + (index + 1))) {
      let defineCor = parseInt(Math.random() * 20);
      while (defineCor === 0) {
        defineCor = parseInt(Math.random() * 20);
      }
      paleta[index].style.backgroundColor = cor[defineCor];
    }
    if (index === 0) {
      paleta[index].style.backgroundColor = cor1;
      paleta[index].className = paleta[index].className + espaco + selected;
    }
  }
}

function clickCor() {
  document.addEventListener('click', function(clicado) {
    if (event.target.className === 'color') {
      let selecao = document.querySelector('.selected');
      selecao.className = 'color';
      clicado.target.classList += espaco + selected;
    }
  });
}

function colorePixel() {
  document.addEventListener('click', function(colore) {
    if (event.target.className === 'pixel') {
      let selecao = document.getElementsByClassName('selected');
      corEscolha = selecao[0].style.backgroundColor;
      colore.target.style.backgroundColor = corEscolha;
    }
  });
}

// cria dinamicamente linhas e colunas e atribui os pixels dentro
function criaPixel(row, col) {
  let divLinha = [];
  let idPixel = 1;
  let lugar = document.getElementById('pixel-board');
  for (let indexLinha = 0; indexLinha < col; indexLinha += 1) {
    const criaLinha = document.createElement("div");
    criaLinha.setAttribute('class', 'linha');
    divLinha.push(criaLinha);
    lugar.appendChild(divLinha[indexLinha]);
    for (let indexColuna = 0; indexColuna < row; indexColuna += 1) {
      let pixel = document.createElement('div');
      pixel.setAttribute('class', 'pixel');
      divLinha[indexLinha].appendChild(pixel);
      pixel.setAttribute('id', 'pixel' + idPixel);
      idPixel += 1;
    }
  }
  tamanhoPixel(40); // chama a configuração de altura/largura dos pixels
}

// função que configura o tamanho de todos os pixels. Sua chamada é dentro da função que cria os pixels.
function tamanhoPixel(tamanho) {
  const tamanhoBorda = 1;
  const todosPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < todosPixels.length; index += 1) {
    todosPixels[index].style.width = tamanho + 'px';
    todosPixels[index].style.height = tamanho + 'px';
  }
  let todasLinhas = document.getElementsByClassName('linha');
  for (let index = 0; index < todasLinhas.length; index += 1) {
    todasLinhas[index].style.height = tamanho + (tamanhoBorda * 2) + 'px';
  }
}

function btnBranco() {
  document.addEventListener('click', function() {
    if (event.target.id === 'clear-board') {
      const pixel = document.getElementsByClassName('pixel');
      for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = corBranco;
      }
    }
  });
}

function botaoQuadro() {
  const btnQuadro = document.getElementById('generate-board');
  const divQuadro = document.getElementById('pixel-board');
  btnQuadro.addEventListener('click', function() {
    const inputSize = document.getElementById('board-size');
    let size = inputSize.value;
    if ((size >= 5) && (size <= 50)) {
      divQuadro.innerHTML = ''; // apaga todos os pixels
      criaPixel(size, size); // chama função de criação de pixels
    } else if (size === '') {
      alert('Board inválido!');
    } else if (size > 50) {
      size = 50;
      divQuadro.innerHTML = ''; // apaga todos os pixels
      criaPixel(size, size); // chama função de criação de pixels
    }
  });
}

coresPaleta();
clickCor();
criaPixel(linha, coluna);
colorePixel();
btnBranco();
botaoQuadro();