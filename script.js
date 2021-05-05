const listaCores = document.getElementById('color-palette');
const colorList = document.getElementsByClassName('color');


function createColorPalette (){
for (index = 0 ; index < 4; index +=1 ){
   let colorSquare = document.createElement('li');
   colorSquare.className = 'color';
   listaCores.appendChild(colorSquare);
}
}
createColorPalette()
function createColorList (){
let colorArray = [ 'black' ,'red', 'purple', 'yellow'];
for(index = 0 ; index < colorList.length ; index +=1){
   colorList[index].style.backgroundColor = colorArray[index]
}
}
createColorList();
document.getElementsByClassName('color')[0].classList.add('selected') ;

function createPixelBoard (number){
    const pixelBoard = document.getElementById('pixel-board');
    if(number > 50){
        number = 50;
    }
    if (number < 5){
        number = 5;
    }
    for (let indexColum = 0; indexColum < number; indexColum += 1) {
      const pixelRow = document.createElement('div');
      pixelRow.className = 'pixelRow';
      pixelBoard.appendChild(pixelRow);
    
      for (let indexLine = 0; indexLine < number; indexLine += 1) {
        const pixelCell = document.createElement('div');
        pixelCell.className = 'pixel';
        pixelRow.appendChild(pixelCell);
      }
    }
}
createPixelBoard(6);
const paletaCores = document.querySelector('#color-palette');
function selectedColor() {
  paletaCores.addEventListener('click', (event) => {
    const color = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      color.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selectedColor();