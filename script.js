// function colors (){
// let colorPalette = document.getElementsByClassName("color");


// for (let index = 0; index <colorPalette.length; index += 1){
//     let colorPalette = colorPalette[index];
//     return colorPalette
// }

// }
// console.log(ola)
// function quadroPixels () {

  //Criando 25 pixels. 

let box = [];
    
for (index = 1; index <=25; index += 1){
    box.push(index);
    
}
let hBox = document.querySelector('#pixel-board');
 
for (let aux = 0; aux < box.length; aux += 1){
let boxNumbers = document.createElement('div');       
let square = box[aux];

boxNumbers.className = 'pixel';
    boxNumbers.innerHTML = square;
    hBox.appendChild(boxNumbers);

}
   
// console.log(box);

// let colorBox = [];
// for (index = 1; index < 4;index += 1){
//     colorBox.push (index);
// }

let selectedBox = document.querySelector('#firstColor');
selectedBox.className = 'color selected'



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

//Altera classe selescted com click. 

let button1 = document.querySelector('#firstColor');
let button2 = document.querySelector('#secondColor');
let button3 = document.querySelector('#thirdColor');
let button4 = document.querySelector('#fourthColor');

function changeSelected (click){
    let clickButton = document.querySelector('.selected');
    clickButton.classList.remove('selected');
    click.target.classList.add('selected');
    console.log ("wow");
}
button1.addEventListener('click', changeSelected);
button2.addEventListener('click', changeSelected);
button3.addEventListener('click', changeSelected);
button4.addEventListener('click', changeSelected);


// clickButton.addEventListener('click', function (changeSelected) {
//     console.log ("wow");
//     // if (document.className.querySelector('#color-Palette') === '.selected'){
//         clickButton.classList.remove('selected')
//     }
//     // else{
//     //     changeSelected.target.classList.add('selected')
//     // }
//     // clickButton.classList.remove('selected')
//     // changeSelected.target.classList.add('selected')
    
// });



// }
   
// alert ('ola');

