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

//1.capturar os elementos da paleta de cores
let paletaDeCores = document.getElementsByClassName('color')

//2. Colocar um for para rodar o passo 1 e depois adicionar um eventli.. click
for(let index = 0; index <= paletaDeCores; index += 1){
    paletaDeCores.addEventListener('click', myFunction)
}

//3. capturar um elemento com a classe selected e remover esse class no elemento depois de clicar na cor deve estar dentro evento click passo 2
function myFunction (){
    
}

//4. Adicionar a classe selected para elemento que foi clicado
  

