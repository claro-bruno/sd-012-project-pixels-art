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
// requisito 6 esta no html

//requisito 7
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
      const color = event.target.style.backgroundColor;
      setColorSelected(color);
    }
    if (event.target.classList.contains('pixel')) {
      let elementColorSelected = document.querySelector('.selected');
      event.target.style.backgroundColor = elementColorSelected.style.backgroundColor;
    }
  });
  // usei a dica que Samuel Constantino, deu quando fez um comentário no code-review de um colega
