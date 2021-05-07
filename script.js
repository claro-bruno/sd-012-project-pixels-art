const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const pixels = document.querySelectorAll('.pixel');

let colorBlack = document.querySelectorAll('.color')[0];
let colorAqua = document.querySelectorAll('.color')[1];
let colorBlueViolet = document.querySelectorAll('.color')[2];
let colorChartreuse = document.querySelectorAll('.color')[3];

window.onload = changeColor;
function changeColor (event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
}

colorAqua.addEventListener('click', changeColor);
colorBlueViolet.addEventListener('click', changeColor);
colorChartreuse.addEventListener('click', changeColor);
colorBlack.addEventListener('click', changeColor);

window.onload = initialColor;

function initialColor () {
    let colorBlack = document.querySelector('.color');
    colorBlack.className = 'color selected';
}

// pixel elemento especifico
for (const pixel of pixels) {
    pixel.addEventListener('click', function (event){
        const selected = document.querySelector('.selected');
        let selectedColor = window.getComputedStyle(selected).getPropertyValue('background-color');
        event.target.style.backgroundColor = selectedColor;    

    })
}