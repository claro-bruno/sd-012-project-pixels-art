
//Criando 25 pixels.

let box = [];

for (index = 1; index <= 25; index += 1) {
  box.push(index);
}
let hBox = document.querySelector('#pixel-board');

for (let aux = 0; aux < box.length; aux += 1) {
  let boxNumbers = document.createElement('div');
  let square = box[aux];

  boxNumbers.className = 'pixel';
  boxNumbers.innerHTML = square;
  hBox.appendChild(boxNumbers);
}


let selectedBox = document.querySelector('#firstColor');
selectedBox.className = 'color selected';

//Tentativa de criar button

// let buttons = []
// for (index = 1; index <5; index += 1){
//     buttons.push(index);
// }
// let colors = document.querySelector('#color-palette');
// for (let aux = 0; aux < buttons.length; aux += 1){
// let colorsButton = document.createElement('button');
// let squareColors = buttons[aux];
// colorsButton.className = 'class';
// colorsButton.innerHTML = squareColors
// colors.appendChild(colorsButton);
// if (buttons[index] === 1){
//     colorsButton.id === 'firstColor';
// }
// else if (buttons[index] === 2);{
//     colorsButton.id === 'secondColor';
// }
// else if (buttons[index] === 3){
// colorsButton.id === 'thirdColor';
// }
// else {
//     colorsButton.id === 'fourthColor';
// }
// }
// console.log (buttons);

// for (let aux = 0; aux < colorBox.length; aux +=1){
//     let blackBox = colorBox[aux];
//     if (blackBox === 1){
// selectedBox.className = 'color selected'
// }
// }

// }

// let box = [];

// for (index = 1; index <=5; index += 1){
//     box.push(index);
// }
// for (let index = 0; index <= box.length; index += 1){
//     let square = box[index];
//     console.log(box);
// }
// function changeColor(elements, color){

// }

// window.onload = function() {

//Altera classe selected com click.

let button1 = document.querySelector('#firstColor');
let button2 = document.querySelector('#secondColor');
let button3 = document.querySelector('#thirdColor');
let button4 = document.querySelector('#fourthColor');

function changeSelected(click) {
  let clickButton = document.querySelector('.selected');
  clickButton.classList.remove('selected');
  click.target.classList.add('selected');
  console.log('wow');
}
button1.addEventListener('click', changeSelected);
button2.addEventListener('click', changeSelected);
button3.addEventListener('click', changeSelected);
button4.addEventListener('click', changeSelected);

//Colorir quadrado
let firstColor = document.querySelector('#firstColor');
let secondColor = document.querySelector('#secondColor');
let thirdColor = document.querySelector('#thirdColor');
let fourthColor = document.querySelector('#fourthColor');
let pixelSquare = document.querySelector('#pixel-board');

let color = 'black';
function getBlackColor(paintInBlack) {
  let firstPalette = paintInBlack.target;

  firstPalette.color = 'black';
}
firstColor.addEventListener('click', getBlackColor);

function getPurpleColor(paintInPurple){
    let secondPalette = paintInPurple.target;
 
    color = 'purple';
}

secondColor.addEventListener('click', getPurpleColor);

function getGreenColor(paintInGreen){
    let thirdPalette = paintInGreen.target;
    color = 'green';
}

thirdColor.addEventListener('click', getGreenColor);

function getYellowColor (paintInYellow){
    let fourthPalette = paintInYellow.target;
    color = 'yellow';
}
fourthColor.addEventListener('click', getYellowColor);

function changeColor(event) {
  let pixel = event.target;
  pixel.style.backgroundColor = color;
}
pixelSquare.addEventListener('click', changeColor);

//

// function changeColor(toColor) {

// for (index = 0; index< pixelSquare.length; index += 1);{
//     pixelSquare[index].addEventListener('click', (toColor) => {
//         let chooseSelector = document.querySelector('.selected');
//         let chooseColor = chooseSelector.style.backgroundColor;
//         // let clickButton = document.querySelector('.selected');
//         // let squareColor = clickButton.style.backgroundColor;
//         toColor.target.style.backgroundColor = chooseColor;
//     })
// }
// }
// toColor.addEventListener('input', (colorClick)  {
//     let clickButton = document.querySelector('.selected');
//     clickButton.style.backgroundColor = colorClick.target.value;
// }



//Limpa Quadro

let cleanboard = document.querySelector('#clear-board');

function whiteSquare(cleanInWhite) {
  let box = [];

  for (index = 0; index < 25; index += 1) {
    let whiteColor = document.querySelector('#pixel-board');

    whiteColor.style.color = 'white';
    whiteColor.style.backgroundColor = 'white';
    whiteColor.style.border =  '1px solid white'

    // whiteColor.style.border =  '1px solid white'
    let whiteColor2 = document.querySelectorAll('.pixel')[index];
    whiteColor2.style.color = 'white';
    // whiteColor.style.backgroundColor = 'white';
    // whiteColor2.style.border =  '1px solid white'
  }
}
cleanboard.addEventListener('click', whiteSquare);
