// function colors (){
// let colorPalette = document.getElementsByClassName("color");


// for (let index = 0; index <colorPalette.length; index += 1){
//     let colorPalette = colorPalette[index];
//     return colorPalette
// }

// }
// console.log(ola)
// function quadroPixels () {
  
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


