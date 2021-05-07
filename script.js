window.onload = function() {

function adicionaLinha(line) {
  for (let index = 0; index < line; index += 1) {
    let divLine = document.createElement('div');
    divLine.className = 'linha';
    bordaPixel.appendChild(divLine);
  };
};


function adicionaColuna(coluna) {
  let numColunas = document.getElementsByClassName('linha');
    for (let colunas of numColunas) {
    for ( let index = 0; index < coluna; index += 1) {
  let divColuna = document.createElement('div');
      divColuna.className = 'pixel';
      colunas.appendChild(divColuna);
    };
  };
};
let linha = 5;
let coluna = 5;
const bordaPixel = document.getElementById('pixel-board')
adicionaLinha(linha);
adicionaColuna(coluna);

const cores = document.querySelectorAll('.color');
document.addEventListener('click', event => {
  if (event.target.classList.contains('pixel')) {
    const selected = document.querySelector('.selected');
    const corSelecionada = selected.style.backgroundColor;
    event.target.style.backgroundColor = corSelecionada;
  }
})
function selecionaCor(event) {
  const seleciona = document.querySelector('.selected');
  seleciona.classList.remove('selected');
  event.target.classList.add('selected');
}
for (let index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener('click', selecionaCor);
}

}

function botaoLimpar () {
  let botao = document.getElementById('.clear-board')
  botao.addEventListener('click', botao)
}
document.querySelectorAll('.pixel')
function limparPixel () {
  for (linha of pixel) {
  linha.style.backgroundColor = 'white'
  }
}