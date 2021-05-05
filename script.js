window.onload = function() {

const body = document.querySelector('body');
const colorPalette = document.createElement('section');
colorPalette.id = 'color-palette';
body.appendChild(colorPalette);

for (let index = 0; index <= 3; index += 1){
    const color = document.createElement('div');
    for (let index2 = 0; index2 <= 3; index2 += 1){
        color.className = 'color';
        colorPalette.appendChild(color);
    };
};

let arrayColorPalette = ['black', 'red', 'blue', 'green'];

function creatColorPalette (array) {
    for (let index = 0; index < arrayColorPalette.length; index += 1) {
        let color = document.getElementsByClassName('color')[index];
        color.style.backgroundColor = array[index];
    };
}
creatColorPalette(arrayColorPalette);


}

