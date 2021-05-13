
let quadrado = document.getElementById('pixel-board');
function board(num) {
    for(let index = 0; index < num; index += 1) {
        let linha = document.createElement('div');
        quadrado.appendChild(linha);
    for(let index = 0; index < num; index +=1) {
        let coluna = document.createElement('div')
        coluna.className = 'pixel';
        quadrado.appendChild(coluna);
    }
}
}
board(5);

let selecaoCor = document.getElementsByClassName('color');
for(index = 0; index < selecaoCor.length; index +=1){
selecaoCor[index].addEventListener('click', function(event){
    let elemento = document.querySelector('.selected');
    elemento.classList.remove('selected');
    event.target.classList.add('selected');
  })
}

let pintaPixel = document.querySelectorAll('.pixel');
for(let index =0; index < pintaPixel.length; index +=1){
    pintaPixel[index].addEventListener('click', function(event){
        let cor = document.getElementsByClassName('selected')[0];
        let comCor = window.getComputedStyle(cor).getPropertyValue('background-color');
        event.target.style.backgroundcolor = comCor;
    })
}

let quadradinho = document.getElementsByClassName('pixel');
let botao1 = document.getElementById('clear-board');
botao1.addEventListener('click', function () {
  for (let index = 0; index < quadradinho.length; index += 1) {
    quadradinho[index].style.backgroundColor = 'white';
  }
})