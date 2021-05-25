// capturar todos os elementos da class color 
// adicionar evento de click a cada um dos elementos do primeiro passo 
// capturar o elemento com a classe select dentro da função click 
// remover a classe select do elemento selecionado 
// adicionar a classe select ao elemento clicado

let capturaCor = document.getElementsByClassName('color')
for(let index = 0; index < capturaCor.length; index +=1){
    capturaCor[index].addEventListener('click',alteraCor)
}
function alteraCor(event){
    let capturaSelect = document.querySelector('.selected')
    capturaSelect.classList.remove("selected")
   event.target.classList.add('selected')
}

// // capturar todos os elementos com a class pixel 
// rodar o for para add undefined, evendo de  click para cada pixel
// dentro da função --- selecionar o elemento com a class selected
// pegar a cor de fundo do elemento selecionado 
// adicionar a cor de fundo ao elemento clicado 

let capturaPixel = document.getElementsByClassName('pixel')
for(let index = 0; index < capturaPixel.length; index +=1){
    capturaPixel[index].addEventListener('click', colorPixel);
}
function colorPixel(event){
    let capturaColorPixel = document.querySelector('.selected')
    let capturaBg = window.getComputedStyle(capturaColorPixel).getPropertyValue("background-color")
    event.target.style.backgroundColor = capturaBg
}   

// 1- criar um botao no htm para limpar as cores
// 2- capturar esse botao no js
// 3-adicionar um evento de click nesse botao
// 4-na função do evento
// 5-selecionar todos os elementos com a classe pixel
// 6-rodar um laço de repetição e trocar a cor de fundo de cada elemento da lita

let apagaTudo = document.getElementById("clear-board")
apagaTudo.addEventListener('click', apagaCor);
function apagaCor(){
    let fundoBranco = document.querySelectorAll(".pixel")
    for(let index = 0; index < fundoBranco.length; index +=1){
    fundoBranco[index].style.backgroundColor ="rgb(255,255,255)"
            }
}
// 1- criar um input no html e um botao
// (2-capturar o botao e adicionar um evento de click nele)
// 3- dentro da função do click criar uma função que receba um numero e crie sua tabela
// 3.1- a função tem que primeiro selecionar a tabela antiga e apagar ela (https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild)
// 3.2-capturar o input
// 3.3-criar os elementos(dica for dentro de um for-para cada vez q ele percorrer esse for ele cria N(input) elementos)

let botaoBoard = document.getElementById('generate-board');
console.log(botaoBoard)
botaoBoard.addEventListener('click', tabela);


function tabela() {
	let qantidadeQuadros = document.getElementById('board-size').value;
    if(qantidadeQuadros === ""){
       window.alert("Board inválido!")
    }
	let matrix = qantidadeQuadros;
	document.getElementById('tabela-pixels').innerHTML = ''

	for (let index = 0; index < matrix; index += 1) {
		novaLinha = document.createElement('TR')
		document.getElementById('tabela-pixels').appendChild(novaLinha)
		criaLinhaTabela(matrix)
	 }

	 function criaLinhaTabela (matrix) {
		let obtemLinha = document.getElementById('tabela-pixels').lastChild
		for (let index = 0; index < matrix; index += 1){
			novaColuna = document.createElement('TD')
			obtemLinha.appendChild(novaColuna).className = 'pixel'
             }
	 }
     let capturaPixel = document.getElementsByClassName('pixel')
for(let index = 0; index < capturaPixel.length; index +=1){
    capturaPixel[index].addEventListener('click', colorPixel);
}
}