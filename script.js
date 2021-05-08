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
