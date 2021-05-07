// requisito 1 esta no html
// requisitos 2 e 3 esta no html e css 
//requisito 4
let getPixelBoard = document.getElementById('pixel-board');

let quantidadeDeQuadros = 5;

for (let index = 0; index < quantidadeDeQuadros; index += 1) {
  let newLine = document.createElement('tr');
  newLine.classList.add('line');
  getPixelBoard.appendChild(newLine);

  for (let columns = 0; columns < quantidadeDeQuadros; columns += 1) {
    let newColumn = document.createElement('td');
    newColumn.classList.add('pixel');
    newLine.appendChild(newColumn);
  }
}
// requisito 4 feito baseado no repositorio de Adriana Biberg : adriana-biberg-pixels-art
// pesquisa da funcao da classList.add :https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList 
// requisito 5 esta no css
// requisito 6 está no html

//requisito 7
function selected(event) {
  let removeSelection = document.querySelector('.selected');
  removeSelection.classList.remove('selected');
  event.target.classList.add('selected');
}
function selectedEvent() {
  let paletaDeCores = document.getElementsByClassName('color');
  for (let index = 0; index < paletaDeCores.length; index += 1) {
    paletaDeCores[index].addEventListener('click', selected);
  }
}
selectedEvent();

// tive que consultar o repositório de Caio-takeshi:caio-takeshi-pixels-art, para me ajudar na conclusao do requisito 7
  
//requisito 8
function pegaCor(event) {
  let selecionaCor = document.querySelector('.select').style.backgroundColor;
  event.target.style.backgroundColor = selecionaCor;
}

function mudaDeCor() {
 let getPixel = documento.getElementsByClassName('pixel');

 for(let index = 0; index < getPixel.length; index += 1) {
   getPixel[index].addEventListener('click', mudaDeCor);
       
   }
  }
  // vi essa a dica  de usar o evento.target postada no slack pelo Nuwanda
