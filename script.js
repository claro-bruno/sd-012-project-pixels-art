// cria e adiciona paleta de cores
let pallete = document.getElementById('color-palette');
let arrayRandomColors = generateArrayRandomColors();
for (let i = 0; i < 4; i += 1) {
    let color = document.createElement('div');
    color.className = 'color';
    color.style.backgroundColor = arrayRandomColors[i];
    pallete.appendChild(color);
}
// gera rgb aleatorio
function generateRandomColors () {
    let r = Math.ceil(Math.random()*254);
    let g = Math.ceil(Math.random()*254);
    let b = Math.ceil(Math.random()*254);
    let rgb = ('rgb(' + r + ', ' + g + ', ' + b + ')');
    return rgb;
}
// gera array de 4 cores
function generateArrayRandomColors () {
    let colorsArray = [];
    let rgb;
    colorsArray[0] = 'rgb(0, 0, 0)';
    for (let i = 1; i < 4; i += 1) {
        rgb = generateRandomColors();
        colorsArray[i] = rgb;
    }
    for (let i = 1; i < colorsArray - 1; i += 1) {
        if (colorsArray[i] === colorsArray[i+1]) {
            rgb = generateRandomColors();
            colorsArray[i+1] = rgb;
        }
    }
    return colorsArray;
}
// quadro de pixels
let board = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    board.appendChild(pixelLine);
}
let arrayPixelLine = document.getElementsByClassName('pixel-line');
for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'rgb(255, 255, 255)';
        arrayPixelLine[i].appendChild(pixel);
    }
}
// define cor preta como cor inicial
let blackColor = document.querySelector('.color');
blackColor.className = 'color selected';
// seleciona cor a partir do clique do mouse
pallete.addEventListener('click', function(e) {
    let selected = document.getElementsByClassName('selected');
    selected[0].className = 'color';
    e.target.className = 'color selected';
});
// preencher pixel com a cor selecionada
board.addEventListener('click', function (e) {
    let selected = document.getElementsByClassName('selected');
    //let selectedColor = selected.style.backgroundColor;
    e.target.style.backgroundColor = selected[0].style.backgroundColor;
});
// botao limpar
let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
    let arrayPixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < arrayPixels.length; i += 1) {
        arrayPixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }
});

