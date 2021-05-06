const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');

function selectedColor (event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let indexcolor = 0; indexcolor < colors.length; indexcolor += 1) {
  colors[indexcolor].addEventListener('click', selectedColor);
}

// Após uma sucessão de erros com as funçoes, verifiquei o repositório da colega Adriana Biberg (https://github.com/tryber/sd-012-project-pixels-art/pull/122), cujo a função para acrescentar e remover a classe selected ao mesmo tempo que seleciona a cor de acordo com o click, foi de fácil compreensão.
