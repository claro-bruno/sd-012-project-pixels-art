window.onload = mainColor;

function mainColor() {
    let setBlack = document.querySelector('#bloco1');
    setBlack.className = 'color selected';
}

mainColor;

function makeBoard(tamanho) {
    let destiny = document.querySelector('#pixel-board');

    if (tamanho > 10) {
        return 'Tamanho maximo e 10.'
    }
    for (let index = 1; index <= tamanho; index += 1) {
        let lines = document.createElement('div');
        destiny.appendChild(lines);
            for (let index = 1; index <= tamanho; index += 1) {
                let columns = document.createElement('div');
                columns.className = 'pixel';
                lines.appendChild(columns);
        }
    }
}
makeBoard(5);

function makePallete(tamanho) {
    let destiny = document.querySelector('#color-palette');
    
    for (let index = 1; index <= tamanho; index += 1) {
        let cores = document.createElement('div');
        cores.className = 'color';
        cores.id = 'bloco' + index;
        destiny.appendChild(cores);
    }
}
makePallete(4);

function title(string) {
    let mainTitle = document.querySelector('h1');
    mainTitle.innerHTML = string;
}
title('Paleta de Cores');

function selectColor() {
    let blackButton = document.querySelector('#bloco1');
    let redButton = document.querySelector('#bloco2');
    let greenButton = document.querySelector('#bloco3');
    let blueButton = document.querySelector('#bloco4');

    blackButton.addEventListener('click', function(){
        let selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        blackButton.className = 'color selected';
    })

    redButton.addEventListener('click', function(){
        let selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        redButton.className = 'color selected';
    })

    greenButton.addEventListener('click', function(){
        let selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        greenButton.className = 'color selected';
    })

    blueButton.addEventListener('click', function(){
        let selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        blueButton.className = 'color selected';
    })
}
selectColor();

