const colors = ['black', 'blue', 'red', 'green'];

function createPalette() {
    let divs = document.getElementById('color-palette'); 
    for(let index = 0; index < colors.length; index += 1){
    let createDivs = document.createElement('div');
    createDivs.className = 'color';
    createDivs.style.backgroundColor = colors[index];
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


let choseColor = document.getElementById('color-palette');

choseColor.addEventListener('click',function (event) {
    let selectedColor = document.getElementsByClassName('selected');
    selectedColor[0].className = "color";
    event.target.className = 'color selected';
} )

let pixelColor = document.getElementById('pixel-board');

pixelBoard.addEventListener('click', function (event) {
    let pixelColor = document.querySelector('.selected');
    let chosedColor = pixelColor.style.backgroundColor;
    event.target.style.backgroundColor = chosedColor;
}
)


