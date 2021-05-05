let listaCores = document.getElementById('color-palette');
for (index = 0 ; index < 4; index +=1 ){
   let colorSquare = document.createElement('li');
   colorSquare.className = 'color';
   listaCores.appendChild(colorSquare);
}


let colorList = document.getElementsByClassName('color');
let colorArray = [ 'black' ,'red', 'purple', 'yellow'];
for(index = 0 ; index < colorList.length ; index +=1){
   colorList[index].style.backgroundColor = colorArray[index]
}
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
createPixelBoard(5);