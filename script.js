let quadrado = document.querySelector('#pixel-board');
const cor1 = document.querySelector('#cor1');
const cor2 = document.querySelector('#cor2');
const cor3 = document.querySelector('#cor3');
const cor4 = document.querySelector('#cor4');
let valor = document.querySelector('#board-size').value;
const botaoGerar = document.querySelector('#generate-board');

//cria a tabela
function criaTabela(size) {
  for (let index = 0; index < size; index += 1) {
    let criarTr = document.createElement('tr');
    criarTr.className = 'linha';
    quadrado.appendChild(criarTr);
    for (let i = 0; i < size; i += 1) {
      let criarTd = document.createElement('td');
      criarTd.className = 'pixel';
      criarTr.appendChild(criarTd);
    }
  }
}
//botao gerar
botaoGerar.addEventListener('click', function () {
  let valor = document.querySelector('#board-size').value;
  const ultimaLinha = document.querySelectorAll('.linha');

  if (valor === '' || valor < 5) {
    alert('Valor inválido!');
  }
  for (let i = 0; i < ultimaLinha.length; i += 1) {
    quadrado.removeChild(quadrado.lastChild);
  }
  
  if (valor <= 5) {
    criaTabela(5);
  } else if (valor >= 50) {
    criaTabela(50);
  } else {
    criaTabela(valor);
  }
});

criaTabela(5);

//gerar cor random
function gerarCor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

document.querySelector('#cor1').style.backgroundColor = 'black';
document.querySelector('#cor2').style.backgroundColor = gerarCor();
document.querySelector('#cor3').style.backgroundColor = gerarCor();
document.querySelector('#cor4').style.backgroundColor = gerarCor();

//class selected
function colocaClassSelected(evento) {
  const selecao = document.querySelector('.selected');
  selecao.classList.remove('selected');
  evento.target.classList.add('selected');
}

cor1.addEventListener('click', colocaClassSelected);
cor2.addEventListener('click', colocaClassSelected);
cor3.addEventListener('click', colocaClassSelected);
cor4.addEventListener('click', colocaClassSelected);

//adicionar cor aos pixel
const corP = document.querySelector('#pixel-board');
corP.addEventListener('click', function (evento) {
  evento.target.style.backgroundColor = document.querySelector(
    '.selected'
  ).style.backgroundColor;
});

//limpar
const botao = document.querySelector('#clear-board');
botao.addEventListener('click', function () {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});
