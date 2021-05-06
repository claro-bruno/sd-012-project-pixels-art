let quadrad = document.querySelector('#pixel-board');
let cor1 = document.querySelector('#black');
let cor2 = document.querySelector('#orange');
let cor3 = document.querySelector('#red');
let cor4 = document.querySelector('#yellow');
let nlinhas = 5;
let nPixels = 5;

function criaTabela() {
  for (index = 0; index < nlinhas; index += 1) {
    let criarTr = document.createElement('tr');
    quadrad.appendChild(criarTr);
    for (i = 0; i < nPixels; i += 1) {
      let criarTd = document.createElement('td');
      criarTr.appendChild(criarTd);
    }
  }
}
criaTabela();

function classes() {
  let tds = document.querySelectorAll('#pixel-board tr td');
  for (let index = 0; index < tds.length; index += 1) {
    tds[index].className = 'pixel';
  }
}
classes();

function colocaClassSelected(evento) {
  let selecao = document.querySelector('.selected');
  selecao.classList.remove('selected');
  evento.target.classList.add('selected');
}

cor1.addEventListener('click', colocaClassSelected);
cor2.addEventListener('click', colocaClassSelected);
cor3.addEventListener('click', colocaClassSelected);
cor4.addEventListener('click', colocaClassSelected);

let corP = document.querySelector('#pixel-board');
corP.addEventListener('click', function (evento) {
  evento.target.id = document.querySelector('.selected').id;
});

let botao = document.querySelector('#clear-board');
let pixels = document.querySelectorAll('.pixel');
botao.addEventListener('click', function () {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});
