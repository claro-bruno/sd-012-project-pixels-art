const colors = document.querySelectorAll('.color');

function select(event){
    let element = document.querySelector('.selected');
    element.classList.remove('selected');
    event.target.classList.add('selected');
}

function selectColor(){
    for (let index = 0; index < colors.length; index =+ 1) {
        colors[index].addEventListener('click',select);
    }
}

selectColor();

let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
    let arrayPixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < arrayPixels.length; i += 1) {
        arrayPixels[i].style.backgroundColor = 'white';
    }
});