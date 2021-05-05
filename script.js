let paletaCores = document.querySelector('#color-palette');
let quadro = document.querySelector('#pixel-board');
let botaoApagar = document.querySelector('#clear-board');
let inputSize = document.querySelector('#board-size');
let body = document.querySelector('body');

let pixels = '40px';

let tamanhoQuadro = 5;

let corInicialQuadro = 'white';

criaBotaoApagar();
criaInputTamanho();
criaBotaoTamanho();
geraCores();

criaQuadro(tamanhoQuadro, pixels, corInicialQuadro);

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

let pixel = document.querySelectorAll('.pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', function (event) {
    let corSelecionada = document.querySelector('.color.selected');
    event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
  });
}

let botaoApaga = document.querySelector('#clear-board');
botaoApaga.addEventListener('click', function () {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});

function criaPaletaCores(cores, pixels) {
  for (let index = 0; index < cores.length; index += 1) {
    let novaCor = document.createElement('li');
    let novaCorSize = pixels;
    novaCor.className = 'color';
    novaCor.style.listStyle = 'none';
    novaCor.style.width = novaCorSize;
    novaCor.style.height = novaCorSize;
    novaCor.style.border = '1px solid black';
    novaCor.style.backgroundColor = cores[index];
    paletaCores.appendChild(novaCor);
  }
}

function criaQuadro(tamanho, pixels, color) {
  for (let index = 0; index < tamanho; index += 1) {
    let novaLinha = document.createElement('tr');
    quadro.appendChild(novaLinha);

    for (let index = 0; index < tamanho; index += 1) {
      let novaColuna = document.createElement('td');
      let novaColunaSize = pixels;
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

function criaBotaoApagar() {
  let criaBotao = document.createElement('button');
  criaBotao.innerHTML = 'Limpar';
  botaoApagar.appendChild(criaBotao);
}

function criaInputTamanho() {
  let criaInput = document.createElement('input');
  criaInput.className = 'input-size';
  criaInput.style.width = '100px';
  criaInput.placeholder = 'Tamanho';
  inputSize.appendChild(criaInput);
}

function criaBotaoTamanho() {
  let criaBotao = document.createElement('button');
  criaBotao.innerHTML = 'VQV';
  criaBotao.className = 'botao-tamanho';
  criaBotao.id = 'generate-board';
  inputSize.appendChild(criaBotao);
}

function novoQuadro() {
  let remove = document.querySelectorAll('tr');
  for (let index = 0; index < remove.length; index += 1) {
    quadro.removeChild(remove[index]);
  }

  criaQuadro(tamanhoQuadro, pixels, corInicialQuadro);
}

let botaoTamanho = document.querySelector('#generate-board');
let inputTamanho = document.querySelector('.input-size');

botaoTamanho.addEventListener('click', function () {
  if (parseInt(inputTamanho.value) == parseInt(tamanhoQuadro)) {
    alert('O quadro já está no tamanho inserido');
  } else if (parseInt(inputTamanho.value) < 5) {
    tamanhoQuadro = 5;
    alert('Board inválido!');
    novoQuadro();
  } else if (parseInt(inputTamanho.value) > 50) {
    tamanhoQuadro = 50;
    alert('Board inválido!');
    novoQuadro();
  } else {
    tamanhoQuadro = parseInt(inputTamanho.value);
    novoQuadro();
  }
});

function geraCores() {
  let coresPaleta = ['#000'];
  for (let index = 0; index < 3; index += 1) {
    let novaCor =
    '#' +
    parseInt(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0');

    coresPaleta.push(novaCor);
  }
  criaPaletaCores(coresPaleta, pixels);
}
