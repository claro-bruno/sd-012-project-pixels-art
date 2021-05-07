
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

function creatColorPalette () {
    let arrayColorPalette = ['black', 'red', 'blue', 'green'];
    let color = document.getElementsByClassName('color');
    for (let index = 0; index < arrayColorPalette.length; index += 1) { 
        color[index].style.backgroundColor = arrayColorPalette[index];
    };
}
creatColorPalette();
 
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


function eventClick() {
    let initialColor = document.getElementsByClassName('color');

    for (let index = 0; index < initialColor.length; index += 1){
        initialColor[index].classList.remove('selected');
    }
    initialColor[0].classList.add('selected');
}
eventClick();

//Requisito 7
document.addEventListener('click', event => {
    if(event.target.classList.contains('pixel')) {
        const pixelBoard = document.getElementsByClassName('pixel');
        const selected = document.querySelector('.selected');
        const selectedColor = selected.style.backgroundColor;
        event.target.style.backgroundColor = selectedColor;
    }
})
function selectedColor () {
    const colorPalette =  document.querySelector('#color-palette').children;
    console.log(colorPalette);
    
    for (let index = 0; index < colorPalette.length; index += 1){
        colorPalette[index].addEventListener('click', (event) => {
            if (event.target.className === 'color') {
            const colorSelected = document.querySelector('.selected');
            colorSelected.classList.remove('selected');
            event.target.classList.add('selected');
            }
        } );
    }
} 

selectedColor();

// Reqiosito 8
// function colorPixelBox() {
    
//     for (let index = 0; index < pixelBoard.length; index += 1) {
//        pixelBoard[index].addEventListener('click', function (event) {
           
//         }); 
//     }
// }
// colorPixelBox();



// Requisito 9
// const pixel = document.querySelectorAll('.pixel');
// function clearPixelBox () {
//     for (let element of pixel) {
//         element.style.backgroundColor = "white";
//     };
// }

// let button = document.getElementById("clear-board");
// button.addEventListener("click", clearPixelBox);