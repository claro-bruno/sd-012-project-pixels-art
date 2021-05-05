let pixelBoard = document.querySelector('#pixel-board');
document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
document.querySelectorAll('.color')[1].style.backgroundColor = 'blue';
document.querySelectorAll('.color')[2].style.backgroundColor = 'red';
document.querySelectorAll('.color')[3].style.backgroundColor = 'yellow';

for (let index = 1; index <= 5; index +=1) {
    for (let index2 = 1; index2 <= 5; index2 +=1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        pixel.style.width = '40px';
        pixel.style.height = '40px';
        pixel.style.padding = '0px';
        pixel.style.margin = '0px';
        pixel.style.border = '1px solid black';
        pixel.style.position = 'relative';
        pixel.style.display = 'inline-block';
        pixel.style.verticalAlign = 'top';
        pixelBoard.appendChild(pixel);
    }
}

document.querySelector('.color').classList.add('selected');

function selecionaCor (event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
} document.querySelector('#color-palette').addEventListener('click', selecionaCor);

function preencheCor (event) {
    let corSelecionada = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = corSelecionada;
} document.querySelector('#pixel-board').addEventListener('click', preencheCor);

document.querySelector('#clear-board').addEventListener('click', function limpaCores () {
    let pixelALimpar = pixelBoard.firstChild;
    for (let index in pixelBoard.children) {
        pixelALimpar.style.backgroundColor = 'white';
        if (pixelALimpar !== pixelBoard.lastChild) {
            pixelALimpar = pixelALimpar.nextSibling;
        }
    }
});