for (index = 0; index < 25; index += 1) {
    let criacao = document.createElement("div")
    let classe = criacao.className = 'pixel'
    const div = document.querySelector('#pixel-board').appendChild(criacao)
}

window.onload = function inicializacao() {
    let preto = document.querySelector('#preto')
    preto.classList.add('selected')


}