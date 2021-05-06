let pixelBoard = document.querySelector('#pixel-board');
document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
let cor2 = document.querySelectorAll('.color')[1];
let cor3 = document.querySelectorAll('.color')[2];
let cor4 = document.querySelectorAll('.color')[3];
cor2.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
cor3.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
cor4.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);

function preencherBoard (tamanho) {
    for (let index = 1; index <= tamanho; index +=1) {
        for (let index2 = 1; index2 <= tamanho; index2 +=1) {
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
            pixelBoard.appendChild(pixel);
        }
        let quebrar = document.createElement('br');
        pixelBoard.appendChild(quebrar);
    }
}; preencherBoard(5);

document.querySelector('.color').classList.add('selected');

function selecionaCor (event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
} document.querySelector('#color-palette').addEventListener('click', selecionaCor);

document.querySelector('#pixel-board').addEventListener('click', function preencheCor (event) {
    let corSelecionada = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = corSelecionada;
});

document.querySelector('#clear-board').addEventListener('click', function limpaCores () {
    let pixelALimpar = document.querySelector('#pixel-board').firstChild;
    for (let index in document.querySelector('#pixel-board').children) {
        pixelALimpar.style.backgroundColor = 'white';
        if (pixelALimpar !== document.querySelector('#pixel-board').lastChild) {
            pixelALimpar = pixelALimpar.nextSibling;
        }
    }
});

let vqv = document.querySelector('#generate-board');

function removerBoard() {
    let colors = document.querySelectorAll('.pixel');
    for (let index = 0; index < colors.length; index +=1) {
        pixelBoard.removeChild(colors[index]);
    }
}

function mudarTamanho () {
    let inputValue = document.querySelector('#board-size');
    if (inputValue.value === '') {
        window.alert('Board inválido!');
    } else if (inputValue.value > 50) {
        removerBoard ();
        preencherBoard(50);
    } else if (inputValue.value < 5) {
        removerBoard ();
        preencherBoard(5);
    } else {
        removerBoard ();
        preencherBoard(inputValue.value);
    }
}; vqv.addEventListener('click', mudarTamanho);