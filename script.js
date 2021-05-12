let quadrado = document.getElementById('pixel-board');
function quadrado25(num) {
    for (let index = 0; index < num; index += 1) {
        let linha = document.createElement('div');
        quadrado.appendChild(linha);
        for (let index = 0; index < num; index += 1) {
            let coluna = document.createElement('div')
            coluna.className = 'pixel';
            quadrado.appendChild(coluna);
        }
    }
}
quadrado25(5)

let initColor = document.querySelectorAll('.pixel');
    for (let index = 0 ; index < initColor.length; index +=1){
    initColor[index].addEventListener('click', function (event) {
       event.target.style.backgroundColor = 'black';

});
}
let quadradinho = document.getElementsByClassName('pixel');
let botao1 = document.getElementById('clear-board');
    botao1.addEventListener('click',function (){
    for (let index = 0; index < quadradinho.length; index +=1){
        quadradinho[index].style.backgroundColor = 'white';
    }
    })