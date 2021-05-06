  
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

function lineBoard() {
    let pixelLine = document.getElementById('pixel-board');
    for (let index = 0; index < 5; index++) {
        let line = document.createElement('div');
        line.className = 'pixel-line';
        pixelLine.appendChild(line);
    }
}

lineBoard();

function createBox(size) {
    let pixelsBox = document.querySelectorAll('.pixel-line');
    for (let index = 0; index < size; index++) {
        let box = document.createElement('div');
        box.className = 'pixel'
    }
    
}