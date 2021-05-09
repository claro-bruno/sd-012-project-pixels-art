// Funçao para criar a tabela
const armazNumeroTabela = [];
let n = 24;
for (index = 0; index < n; index += 1){
    armazNumeroTabela.push(index);
const tabela = document.querySelector('#pixel-board');
const pixelPoint = document.createElement('div');
pixelPoint.className = 'pixel';
tabela.appendChild(pixelPoint)
}
// Funçao Click mouse
let corSelecionada = document.querySelector('.selected');
corSelecionada.addEventListener('click', apertarMouse)
function apertarMouse(){
console.log('click')
}

const button1 = document.getElementById('color1'); 
const button2 = document.getElementById('color2'); 
const button3 = document.getElementById('color3'); 
const button4 = document.getElementById('color4'); 

function handleChangeSelected(event) {
const SelectedOriginal = document.querySelector('.selected');
SelectedOriginal.classList.remove('selected');
event.target.classList.add('selected'); 
}
button1.addEventListener('click', handleChangeSelected)
button2.addEventListener('click', handleChangeSelected)
button3.addEventListener('click', handleChangeSelected)
button4.addEventListener('click', handleChangeSelected)



