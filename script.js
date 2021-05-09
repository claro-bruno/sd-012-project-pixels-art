resetaCaixas();
let botao = document.querySelector('#clear-board')
botao.addEventListener('click', function(event) {

    let pixelss = document.querySelectorAll('.pixel')
    for (let index = 0; index < pixelss.length; index += 1) {
        pixelss[index].style.backgroundColor = 'white'
    }
})

let botaoEvento = document.querySelector('#generate-board')
botaoEvento.addEventListener('click', resetaCaixas)

function resetaCaixas() {
    let pai = document.querySelector('#pixel-board')
    pai.innerHTML = ''
    let textNumber = document.querySelector('#board-size').value;
    let caixaValor = !Number(textNumber) ? 5 : textNumber;

    for (let index = 0; index < caixaValor; index += 1) {
        let board = document.querySelector('#pixel-board');
        let criacaoLinha = document.createElement("div");
        criacaoLinha.style.className = 'line';
        board.appendChild(criacaoLinha);

        for (let indexJ = 0; indexJ < caixaValor; indexJ += 1) {
            let criacaoColuna = document.createElement("div");
            criacaoColuna.className = 'pixel'
            criacaoColuna.addEventListener('click', adicionaCor)
            criacaoLinha.appendChild(criacaoColuna);
        }
    }

}
window.onload = function inicializacao() {
    let preto = document.querySelector('#preto')
    preto.classList.add('selected')

}

let cor = document.querySelectorAll('.color')

for (let index = 0; index < cor.length; index += 1) {
    cor[index].addEventListener('click', removeClass)
}

function removeClass(event) {
    let remover = document.querySelector('.selected')
    remover.classList.remove('selected')
    event.target.classList.add('selected')

}

function adicionaCor(event) {

    let colorido = document.querySelector('.selected')
    let corSeleciona = window.getComputedStyle(colorido).getPropertyValue('background-color')
    event.target.style.backgroundColor = corSeleciona

}
let botaoLimpar = document.querySelector('#clear-board')