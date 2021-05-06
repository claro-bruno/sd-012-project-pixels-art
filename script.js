for (index = 0; index < 25; index += 1) {
    let criacao = document.createElement("div")
    criacao.className = 'pixel'
    const div = document.querySelector('#pixel-board').appendChild(criacao)
}

window.onload = function inicializacao() {
    let preto = document.querySelector('#preto')
    preto.classList.add('selected')

}

let cor = document.querySelectorAll('.color')
console.log(cor)
for (let index = 0; index < cor.length; index += 1) {
    cor[index].addEventListener('click', removeClass)
}

function removeClass(event) {
    let remover = document.querySelector('.selected')
    remover.classList.remove('selected')
    event.target.classList.add('selected')
}