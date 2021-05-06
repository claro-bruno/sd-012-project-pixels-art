const colors = ['black', 'blue', 'red', 'green'];

function createPalette() {
    let divs = document.getElementById('color-palette'); 
    for(let index = 0; index < colors.length; index += 1){
    let createDivs = document.createElement('div');
    createDivs.className = 'color';
    createDivs.style.backgroundColor = colors[index];
    createDivs.id = 'choseColor';
    divs.appendChild(createDivs);
    } 
}

createPalette();

let pixelBoard = document.getElementById('pixel-board');
let arrayPixelLine = [];


function createBoard(size) {
    for (let index = 0; index < size; index += 1) {
        let pixelLine = document.createElement('div');
        pixelLine.className = 'pixel-line';
        pixelBoard.appendChild(pixelLine);
    }
    arrayPixelLine = document.getElementsByClassName('pixel-line');
    for (let index = 0; index < size; index += 1) {
        for (let index2 = 0; index2 < size; index2 += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';

            arrayPixelLine[index].appendChild(pixel);
        }
    }
}
createBoard(5);

function selecteBlack() {
    let selectedBlack = document.getElementsByClassName('color')[0];
    selectedBlack.className = 'color selected';
}
selecteBlack();


let  choseColor = document.querySelectorAll('#choseColor');

choseColor.addEventListener('click', selectColor);

function selectColor(event) {
    if (choseColor.className === 'color selected'){
        event.target.className = 'color';
    } else {
        event.target.className = 'color selected';
    }
}
selectColor();