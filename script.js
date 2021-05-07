const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');

window.onload = initialColor;

function initialColor () {
    let colorBlack = document.querySelector('.color');
    colorBlack.className = 'color selected';
}