let corSelecionada = 'black';

document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('color')) {
    const selecionaClasse = document.querySelector('.selected');
    selecionaClasse.classList.remove('selected');
    target.classList.add('selected');
    corSelecionada = target.style.backgroundColor;
  }
});

document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('pixel')) {
    target.style.backgroundColor = corSelecionada;
  }
});

document.addEventListener('click', ({ target }) => {
  if (target.id === 'clear-board') {
    const quadro = document.querySelector('#pixel-board');
    const pixels = quadro.children;
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  }
});
