// add classe 'selected' ao bloco1
const selectedClass = document.querySelector('#bloco1');
selectedClass.className = 'color selected';
// chamando os blocos HTML para um variavel
const bloco1 = document.querySelector('#bloco1');
const bloco2 = document.querySelector('#bloco2');
const bloco3 = document.querySelector('#bloco3');
const bloco4 = document.querySelector('#bloco4');

// funcao para remover e adicionar o nome selected na classe
function removeEAdd(mouseClick) {
  let changeClass = document.querySelector('.selected');
  changeClass.classList.remove('selected');
  mouseClick.target.classList.add('selected');
}
bloco1.addEventListener('click', removeEAdd);
bloco2.addEventListener('click', removeEAdd);
bloco3.addEventListener('click', removeEAdd);
bloco4.addEventListener('click', removeEAdd);
