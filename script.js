window.onload = function() {

// O que eu tinha feito antes, qd estava tentando afzer tudo pelo JS:
//const body = document.querySelector('body');
// const colorPalette = document.createElement('section');
// colorPalette.id = 'color-palette';
// body.appendChild(colorPalette);

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

}

