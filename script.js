// Função para criar o quadro de pixels
function createPixel (size) {
    const table = document.querySelector('#pixel-board');
    table.innerHTML = ''
		for (let line = 0; line < size; line += 1) {
			const linePixels = document.createElement('div');	
		
		for (let column = 0; column < size; column += 1) {
			const columnPixels = document.createElement('div');
			
			columnPixels.className = 'pixel';
			linePixels.className = 'pixel-line';
			linePixels.appendChild(columnPixels);
		};

		table.appendChild(linePixels);

		};

};

createPixel(5);


//Define cor inicial ao carregar a página
//Modifica as cores selecionadas
const captureInitialColor = document.querySelector('.color');
captureInitialColor.classList.add('selected');

const captureColor = document.querySelectorAll('.color');

for (let index = 0; index < captureColor.length; index += 1) {
	captureColor[index].addEventListener('click', (event) => {
		for (let index2 = 0; index2 < captureColor.length; index2 += 1) {
			captureColor[index2].classList.remove('selected');
		}
	    event.target.classList.add('selected');
	})

}

//Cor preta selecionada ao carregar a página
const capturePixel = document.querySelectorAll('.pixel');
for (let index = 0; index < capturePixel.length; index += 1) {
  capturePixel[index].addEventListener('click', (event) => {
    let captureSelectedColor = document.querySelector('.selected')
	let selectedColor = window.getComputedStyle(captureSelectedColor).backgroundColor;
	event.target.style.backgroundColor = selectedColor;
    
  })
}

//Botão "Limpar" para pintar todos os pixels de branco
const clearBoardBtn = document.getElementById('clear-board');

clearBoardBtn.addEventListener('click',clearBoard);

function clearBoard () {
  for ( index = 0; index < document.querySelectorAll('.pixel').length ; index += 1) {
    document.querySelectorAll('.pixel')[index].style.backgroundColor = 'white';
    console.log(document.querySelectorAll('.pixel')[index]);
  }
} 

