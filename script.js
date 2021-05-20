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


let paletaDeCores = document.getElementsByClassName('color')


for(let index = 0; index <= paletaDeCores.length; index += 1){
    paletaDeCores[index].addEventListener('click', myFunction)
}


function myFunction (event){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected')
}



