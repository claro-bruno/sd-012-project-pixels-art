let pixelBoard = document.getElementById('pixel-board');
let quadrados = 5

function criandoLinha(linha){
for (let row = 1; row <= linha; row += 1){
    divlinha = document.createElement('div')
    pixelBoard.appendChild(divlinha);
    criandoColuna(divlinha, linha)
  }
}

function criandoColuna (row, coluna){
 for (let column = 1; column <= coluna; column += 1 ){
     divColuna = document.createElement('div');
     divColuna.classList.add('pixel');
     row.appendChild(divColuna)
     
 }
}

criandoLinha(quadrados)


let paletaDeCores = document.getElementsByClassName('color');


let black = document.getElementById('black');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');

black.addEventListener('click', myFunction); 
red.addEventListener('click', myFunction); 
blue.addEventListener('click', myFunction); 
green.addEventListener('click', myFunction); 

function myFunction (event){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
}

document.body.addEventListener('click', (event) => {
    
  if(event.target.className === 'pixel'){
      event.target.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected')).backgroundColor; 
  }
})


document.body.addEventListener('click', (event) => {
  if(event.target.id === 'clear-board'){
    let clearboard = document.querySelectorAll('.pixel');
    for(let index = 0; index < clearboard.length; index += 1){
      clearboard[index].style.backgroundColor = 'white';
    }
  } 
})


let generateboard = document.getElementById('generate-board');

generateboard.addEventListener('click', adicionandoQuadrado);

function adicionandoQuadrado (){
  let elementoPaiPixels = document.getElementById('pixel-board');
  let boardsize = document.getElementById('board-size').value;
  elementoPaiPixels.innerHTML = ''
  criandoLinha(boardsize)
}


let boardInvalido = document.getElementById('generate-board')

boardInvalido.addEventListener('click', invalido)

function invalido() {
 let boardSize = document.getElementById('board-size').value
 if(boardSize === ''){
   alert('Board inválido!')
 }
}




