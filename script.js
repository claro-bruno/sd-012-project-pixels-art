// requisito 1 esta no html
// requisitos 2 e 3 esta no html e css 
//requisito 4
const quadroPai = document.getElementById('pixel-board');

const board = 5;

for (let index = 0; index < board; index += 1) {
  const newLine = document.createElement('tr');
  newLine.classList.add('line');
  quadroPai.appendChild(newLine);

  for (let columns = 0; columns < board; columns += 1) {
    const newColumn = document.createElement('td');
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
  const removeSelection = document.querySelector('.selected');
  removeSelection.classList.remove('selected');
  event.target.classList.add('selected');
}
function selectedEvent() {
  const paleta = document.getElementsByClassName('color');
  for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].addEventListener('click', selected);
  }
}
selectedEvent();

// tive que consultar o repositório de Caio-takeshi:caio-takeshi-pixels-art, para me ajudar na conclusao do requisito
  
