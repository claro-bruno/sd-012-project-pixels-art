
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