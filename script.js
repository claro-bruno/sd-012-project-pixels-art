let corSelecionada = 'black'

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')){
       let selecionaClasse = document.querySelector('.selected');
       selecionaClasse.classList.remove('selected');
       event.target.classList.add('selected');
       corSelecionada = event.target.style.backgroundColor;
    }
 })

 document.addEventListener('click', (event) => {
    if (event.target.classList.contains('pixel')){
       event.target.style.backgroundColor = corSelecionada;
    }
 })

 document.addEventListener('click', (event) => {
    if (event.target.id === 'clear-board'){
       const quadro = document.querySelector('#pixel-board')
       const pixels = quadro.children
        for (let index = 0; index < pixels.length; index += 1) {
            pixels[index].style.backgroundColor = 'white';
        }

    }
 })


 