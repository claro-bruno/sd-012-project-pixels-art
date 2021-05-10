let line = 5;
let column = 5;
let board = document.getElementById('pixel-board');
let colorPallet = document.querySelectorAll('.color')
let button = document.getElementById('clear-board')

function addColumn(column) {
  for (let index = 0; index < column; index += 1) {
    let divColumn = document.createElement('div');
    divColumn.className = 'column';
    board.appendChild(divColumn);
  }
}

function addline (line) {
  let lineColumn = document.getElementsByClassName('column');
  for (let lines of lineColumn) {
    for (let index = 0; index < line; index += 1) {
      let divline = document.createElement('div');
      divline.className = 'pixel';
      lines.appendChild(divline);
    }
  }
}

document.body.addEventListener("click", function(event){
  if(event.target.className === "color"){
    document.querySelector(".selected").classList.remove("selected");
    event.target.classList.add("selected"); 
  }
})

addColumn(column);
addline(line); 


function randomColor() {
  const red = Math.random() * 256;
  const green = Math.random() * 256;
  const blue = Math.random() * 256;
  return `rgb( ${red} , ${green} , ${blue})`;
}


for (let index = 1 ; index < colorPallet.length; index++) {
  const color = randomColor()
  colorPallet[index].style.backgroundColor = color;
  
}

button.addEventListener("click", function(){
  const pixelSquare = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelSquare.length; index += 1) {
    pixelSquare[index].style.backgroundColor = 'white';
}
})