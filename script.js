
// INICIO
let table = document.getElementById('pixel-board');
let numRows = 5;
let numCols = 5;
let selectedColor = '#000';


// PINTA A PALHETA
document.getElementById('color1').style.backgroundColor = selectedColor;
document.getElementById('color2').style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
document.getElementById('color3').style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
document.getElementById('color4').style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);

// ADICIONA EVENT LISTENERS
let paleta = document.getElementsByClassName('color');
for (let i = 0; i < paleta.length; i++){
  paleta[i].addEventListener('click', setColor);
}
document.getElementById('clear-board').addEventListener('click', clearTable);


// CRIA A TABELA E INJETA NA DIV TABLE
for (let i = 0; i < numRows; i++){
  let divR = document.createElement('div');
  divR.classList.add('row');
  for (let j = 0; j < numCols; j++){
    let divC = document.createElement('div');
    divC.addEventListener('click', paint);
    divC.classList.add('pixel');
    divR.appendChild(divC);
  }
  table.appendChild(divR);
}


// FUNCOES 
function paint(event){
  if (event.target.style.backgroundColor != selectedColor){
    event.target.style.backgroundColor = selectedColor;
  }else{
    event.target.style.backgroundColor = '#fff';
  }
}

function setColor(event){
  let classSelected = document.getElementsByClassName('color');
  selectedColor = event.target.style.backgroundColor;
  for (let i = 0; i < classSelected.length; i++){
    classSelected[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function clearTable(){
  let pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i++){
    pixels[i].style.backgroundColor = '#fff'
  }
}





