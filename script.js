let line = 5;
let column = 5;
let board = document.getElementById('pixel-board');

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
  document.querySelector(".selected").classList.remove("selected");
  event.target.classList.add("selected");
})

addColumn(column);
addline(line);