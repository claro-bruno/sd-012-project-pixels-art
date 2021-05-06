window.onload = function(){
    let cores = document.getElementsByClassName('color');
    let pixels = document.getElementsByClassName('pixel');
    let cleanBtn = document.getElementById('clear-board');
    gerarPixelBoard();
    selecionarCor(cores);
    pintarQuadro(pixels);
    cleanBtn.addEventListener('click', () => {
        limparQuadro();
    })
}

function gerarPixelBoard(){
    let pixelBoard = document.getElementById('pixel-board');
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            let cell = document.createElement('div');
            cell.style.border = '1px solid black';
            cell.style.width = '40px';
            cell.style.height = '40px';
            cell.style.background = 'white';
            cell.className = 'pixel';
            pixelBoard.appendChild(cell);
        }
    }
}

function selecionarCor(array){
    for(let item of array){
        item.addEventListener('click', (e) => {
            for(let itemRemovivel of array){
                itemRemovivel.classList.remove('selected');
            }
            e.target.classList.toggle('selected');
        })
    }
}

function pintarQuadro(array){
    for(let item of array){
        item.addEventListener('click', (e) => {
            let corSelecionada = document.querySelector('.selected')
            e.target.style.background = window.getComputedStyle(corSelecionada, null).getPropertyValue('background-color')
        })
    }
}

function limparQuadro(){
    let pixels = document.getElementsByClassName('pixel')
    for(let pixel of pixels){
        pixel.style.background = "white"
    }
}