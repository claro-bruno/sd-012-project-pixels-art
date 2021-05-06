  
let cor = ['box1', 'box2', 'box3', 'box4'];


function createPalette() {
    let divs = document.getElementById('color-palette'); 
    for(let index = 0; index < cor.length; index += 1){
    let createDivs = document.createElement('div');
    createDivs.className = 'color';
    createDivs.id = cor[index];
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