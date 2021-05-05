//2, 3- COLOCANDO AS CORES NA PALETA ATRAVES DAS CLASSES, RESGATANDO AS CLASSES DAS DIVS DE CADA COR DO HTML:

const black = document.querySelectorAll('.color')[0].style.backgroundColor = 'black';

const red = document.querySelectorAll('.color')[1].style.backgroundColor = 'red';

const yellow = document.querySelectorAll('.color')[2].style.backgroundColor = 'yellow';

const blue = document.querySelectorAll('.color')[3].style.backgroundColor = 'blue';

//4 - CRIANDO A TABELA DE PIXELS:

//CRIA VARIAVEL PARA RESGATAR O ELEMENTO PELO ID:
const pixelBoard = document.getElementById('pixel-board');

//IMPLEMENTANDO A LOGICA PARA CRIAÇÃO DO QUADRO DE PIXEL:
//O PRIMEIRO FOR ELE CRIA UM LAÇO DE REPETIÇÃO PARA PERCORRER AS 5 POSIÇOES DO QUADRO, CRIEI UMA VARIAVEL QUE CRIA UM ELEMENTO DIV ONDE ARMAZENA AS CLASSES PARA ESTILIZAÇÃO E MANIPULAÇÃO, DEPOIS COLOQUEI ELA COMO FILHA DA DIV PAI DO QUADRO (pixelBoard)
//O SEGUNDO FOR PERCORRE TBM AS 5 POSIÇÕES DO QUADRO, POREM PARA DETERMINAR AS CONDIÇÕES DE CADA PIXEL (eachPixel), CRIEI UMA VARIAVEL PARA CRIAR UM ELEMENTO div, COLOQUEI CADA QUADRO DE PIXEL A CLASSE pixel, E COLOQUEI A div eachPixel COMO FILHA DA div linhaDePixel, AO FINAL ADICIONEI A COR DE FUNDO COMO BRANCA PARA CADA QUADRADO DE PIXEL (eachPixel.style.backgroundColor = 'white';) 

for (let index = 0; index < 5; index += 1) {
    const linhaDePixel = document.createElement('div');
    linhaDePixel.className = 'pixelLine';
    pixelBoard.appendChild(linhaDePixel);
    
    for (let index = 0; index < 5; index += 1) {
      const eachPixel = document.createElement('div');
      eachPixel.className = 'pixel';
      linhaDePixel.appendChild(eachPixel);
      eachPixel.style.backgroundColor = 'white';
    }
  }


//6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels.
//CRIEI UMA VARIAVEL PARA ADICIONAR A CLASSE SELECTED A PRIMEIRA COR QUE É A PRETA:


const addNewClass = document.querySelectorAll('.color')[0].classList.add('selected');

//7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
//PRIMEIRO RESGATEI O ELEMENTO COM O ID COLOR-PALLETE

//RESGATO OS ELEMENTOS COM A CLASSE COLOR;
//ATRIBUIR UM EVENTO DE CLICK PARA TODOS OS ELEMENTOS COM A CLASSE COLOR CRIANDO A FUNÇÃO DENTRO JA DO LISTENER;
//SELECIONO OS ELEMENTOS QUE TEM A CLASSE SELECTED;
//REMOVER A CLASSE SELECTED;
//ATRIBUIR A CLASSE SELECTED PARA O ELEMENTO CLICADO (EVENT DO CLICK);

const paletteColors = document.querySelector('#color-palette');

function selectColor() {
  paletteColors.addEventListener('click', (event) => {
    const color = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      color.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selectColor();





