function setSquareColor() {
    const colors = ['black', 'blue', 'red', 'green'];
    let colorPalette = document.querySelectorAll('.color');
    for (let index = 0; index < colorPalette.length; index += 1) {
        colorPalette[index].style.backgroundColor = colors[index];
    }
}
setSquareColor();

function createSquare() {
    let square = document.createElement('div');
    square.className = 'pixel';
    square.style.width = '40px';
    square.style.height = '40px';
    square.style.border = '1px solid black';
    square.style.display = 'inline-block';
    square.style.boxSizing = 'border-box';
    square.style.marginBottom = '-4px'
    square.style.background = 'white';
    
    return square;
}

function createLineDiv() {
    let line = document.createElement('div');
    line.className = 'linha-pixel';

    return line;
}

function createLines(quantidade) {
    let pixelBoard = document.querySelector('#pixel-board');
    for (let index = 0; index < quantidade; index += 1) {
        pixelBoard.appendChild(createLineDiv());
    }
}

function repetidor(valor) {
    for (let index = 0; index < valor.length; index += 1) {
      valor[index].appendChild(createSquare());
    }
}

function preencheLinhas(tamanho) {
    let linhaAPreencher = document.getElementsByClassName('linha-pixel');
    for( let index = 0; index < linhaAPreencher.length; index += 1) {
        if (index < tamanho) {
            repetidor(linhaAPreencher);
        }
    }
}

function createBoard (width) {
    createLines(width);
    preencheLinhas(width);
}

createBoard(5);

window.onload = function() {
      let colors = document.querySelectorAll('.color');
      for (let index = 0; index < colors.length; index += 1) {
        colors[index].classList.remove('selected');
      }
      colors[0].classList.add('selected');
};

//requisito 7

function colorSelect() {
    const paleta = document.getElementsByClassName('color');
    for (let index = 0; index < paleta.length; index += 1) {
      paleta[index].addEventListener('click', function(event) {
        const removeSelection = document.querySelector('.selected');
        removeSelection.classList.remove('selected');
        event.target.classList.add('selected');
      });
    }
}
colorSelect();

//requisito 8
function addColor() {
    const pixel = document.getElementsByClassName('pixel');
    for(let index = 0; index < pixel.length; index += 1){
        pixel[index].addEventListener('click', function(event) {
            const pixelToColor = event.target;
            const colorSelected = document.querySelector('.selected').style.backgroundColor;
            pixelToColor.style.backgroundColor = colorSelected;
        })
    } 
}
addColor();

//requisito 9
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function (){
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = 'white';
    }
})
