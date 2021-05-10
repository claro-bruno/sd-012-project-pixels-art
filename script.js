// Funçao para criar a tabela
const armazNumeroTabela = [];
let n = 24;
for (index = 0; index < n; index += 1) {
  armazNumeroTabela.push(index);
  const tabela = document.querySelector('#pixel-board');
  const pixelPoint = document.createElement('div');
  pixelPoint.className = 'pixel';
  tabela.appendChild(pixelPoint);
}
// Funçao Click mouse
let corSelecionada = document.querySelector('.selected');
corSelecionada.addEventListener('click', apertarMouse);
function apertarMouse() {
  console.log('click');
}
// Funçao mudar o select com um click
const button1 = document.getElementById('color1');
const button2 = document.getElementById('color2');
const button3 = document.getElementById('color3');
const button4 = document.getElementById('color4');

function handleChangeSelected(event) {
  const SelectedOriginal = document.querySelector('.selected');
  SelectedOriginal.classList.remove('selected');
  event.target.classList.add('selected');
}
button1.addEventListener('click', handleChangeSelected);
button2.addEventListener('click', handleChangeSelected);
button3.addEventListener('click', handleChangeSelected);
button4.addEventListener('click', handleChangeSelected);

// Colorir o pixel escolhido
// const pixelBoard = document.getElementById('pixel-board');
// pixelBoard.addEventListener('click', (Event) => {
// if (Event.target.className === 'pixel'){
// const corPaleta = document.querySelector('selected').style.backgroundColor;
// const pintarPixel = e.target;
// pintarPixel.style.backgroundColor = corPaleta;
// }
// });

// faz com que o pixel seja preenchido com a cor selecionada
const pintarPreto = document.getElementById('color1');
const pintarVermelho = document.getElementById('color2');
const pintarVerde = document.getElementById('color3');
const pintarAzul = document.getElementById('color4');
const pintarPixel = document.getElementById('pixel-board');

let color = 'black';
function blackColor(preto){
    let paleta1 = preto.target;
    color = 'black'
}
pintarPreto.addEventListener('click', blackColor)

function redColor(vermelho){
    let paleta2 = vermelho.target;
    color = 'red'
}
pintarVermelho.addEventListener('click', redColor)

function greenColor(verde){
    let paleta1 = verde.target;
    color = 'green'
}
pintarVerde.addEventListener('click', greenColor)

function blueColor(azul){
    let paleta1 = azul.target;
    color = 'blue'
}
pintarAzul.addEventListener('click', blueColor)

function mudarCorQuadro (event){
    let corPixel = event.target;
    corPixel.style.backgroundColor = color;
}
pintarPixel.addEventListener('click', mudarCorQuadro);
