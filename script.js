const pixelboard = document.querySelector('#pixel-board')
let quadroPixel = document.createElement('table');
const botaoCriaPixel = document.querySelector('#generate-board');
const entradaPixels = document.querySelector('#board-size');
let color = document.querySelectorAll('.color')
const botaoClear = document.querySelector('#clear-board');

function mudarCorPaleta (array){
    let arrayCores = ["black","yellow", "red", "green"];
    let paleta = document.getElementsByClassName('color')
    for (index = 0; index < paleta.length; index += 1){
        for (index = 0; index < arrayCores.length; index += 1){
            paleta[index].style.backgroundColor = arrayCores[index];
        } if (arrayCores[index] === "black"){
            paleta[index].className = 'selected'
        }
    }
}
mudarCorPaleta();

//cria pixeis

function inputBoard(){
    if(entradaPixels.value === ""){
        alert('Board inválido!')
    } else if (entradaPixels.value < 5){
        entradaPixels.value = 5;
    } else if (entradaPixels.value > 50) {
        entradaPixels.value = 50;
    }
    createBoard(entradaPixels.value)
}
botaoCriaPixel.addEventListener('click',inputBoard);

function createBoard (entradaPixels) {
    document.body.appendChild(quadroPixel);
    quadroPixel.id = 'pixel-board'
    for(let index = 0; index < entradaPixels; index += 1) {
        let lineCanvas = document.createElement('tr');
        quadroPixel.appendChild(lineCanvas);
        for (let index = 0; index < entradaPixels; index += 1) {
            let criaPixels = document.createElement('td')
            lineCanvas.appendChild(criaPixels);
            criaPixels.className = 'pixel';
        }
    }
}
createBoard();

//selecao da paleta
function mudarSelecao(event){
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', mudarSelecao);
}

//muda cor com base no selecionado
const changeColor = document.querySelector('#pixel-board');
changeColor.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    event.target.style.backgroundColor = selected.style.backgroundColor;
  });


//botao limpa board
botaoClear.addEventListener('click', () =>{
    const pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1){
        pixels[index].style.backgroundColor = 'white';
    }
})
