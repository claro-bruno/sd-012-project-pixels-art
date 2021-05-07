const coresDosBlocos = document.querySelectorAll('div');
const primeiroBloco = coresDosBlocos[1].style.backgroundColor = 'black';
const segundoBloco = coresDosBlocos[2].style.backgroundColor = 'red';
const terceiroBloco = coresDosBlocos[3].style.backgroundColor = 'blue';
const quartoBloco = coresDosBlocos[4].style.backgroundColor = 'green';

let selecionado = document.querySelector('.selected');

//primeiroBloco.addEventListener('click', () => {
//    selecionado.classList.remove('selected');
//    selecionado.target.classList.add('selected');
//    coresDosBlocos[6].style.backgroundColor = quartoBloco;
//})