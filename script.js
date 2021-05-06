
// O que eu tinha feito antes, qd estava tentando afzer tudo pelo JS:
//const body = document.querySelector('body');
// const colorPalette = document.createElement('section');
// colorPalette.id = 'color-palette';
// body.appendChild(colorPalette);

//Requisito 2 e 3
const colorPalette = document.querySelector('table');

for (let index = 0; index <= 3; index += 1){
    const color = document.createElement('td');
    for (let index2 = 0; index2 <= 3; index2 += 1){
        color.className = 'color';
        colorPalette.appendChild(color);
    };
};

let arrayColorPalette = ['black', 'red', 'blue', 'green'];
let color = document.getElementsByClassName('color');

function creatColorPalette (array) {
    for (let index = 0; index < arrayColorPalette.length; index += 1) { 
        color[index].style.backgroundColor = array[index];
    };
}
creatColorPalette(arrayColorPalette);
 
//Requisito 4
function creatPixelBox (elements) {
for (let index = 0; index < elements; index += 1) {
    const divLine = document.createElement('div'); 
    divLine.className = 'pixel-line';
    
    for (let index2 = 0; index2 < elements; index2 += 1){
        const divPixel = document.createElement('div');
        divPixel.className = 'pixel';
        divLine.appendChild(divPixel);
    };
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.appendChild(divLine);
};
}
creatPixelBox(5);

// Requisito 6
// function initialColor () {
//     const initialColor = document.getElementById('color-palete').firstChild;
//     initialColor.classList.add('selected');
// }
// initialColor();

let initialColorBlack = document.getElementsByClassName('color')[0];
initialColorBlack.classList.add('selected');

//Requisito 7
function selectedColor () {
    const colorPalette =  document.querySelector('#color-palette');
    colorPalette.addEventListener('click', (event) => {
        if (event.target.className === 'color') {
          const colorSelected = document.querySelector('.selected');
          colorSelected.classList.remove('selected');
          event.target.classList.add('selected');
        }
      }  );
}

selectedColor();