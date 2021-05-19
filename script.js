
const colors = document.getElementsByClassName('color')
function addRemove (event) {
    const selector = document.getElementsByClassName('selected')[0];
    selector.classList.remove('selected')
    event.target.classList.add('selected')
}

function selecionar () {
    for (index = 0; index < colors.length; index +=1) {
        colors[index].addEventListener('click', addRemove);
    }
}

selecionar();

const pixels = document.querySelectorAll('.pixel')

for (index = 0; index < pixels.length; index +=1) {
    pixels[index].addEventListener('click', addColor)
}

function addColor(event) {
    const selecionaCor = document.getElementsByClassName('selected')[0];
    const cor = window.getComputedStyle(selecionaCor);
    event.target.style.backgroundColor = cor.backgroundColor
}
