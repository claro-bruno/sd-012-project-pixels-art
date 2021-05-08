for (index = 0; index < 25; index += 1) {
    let criacao = document.createElement("div")
    criacao.className = 'pixel'
    criacao.addEventListener('click', adicionaCor)
    const div = document.querySelector('#pixel-board').appendChild(criacao)

    //criaçao de botão e adicionado o evento de apagar todas as cores das divs
    let botao = document.querySelector('#clear-board')
    botao.addEventListener('click', function(event) {
        criacao.style.backgroundColor = 'white'
    })
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