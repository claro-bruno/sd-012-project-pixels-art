function selectColor(){
    let color1 = document.getElementById('color1');
    let color2 = document.getElementById('color2');
    let color3 = document.getElementById('color3');
    let color4 = document.getElementById('color4');
    
    color1.addEventListener('click', select);
    color2.addEventListener('click', select);
    color3.addEventListener('click', select);
    color4.addEventListener('click', select);

    function select(event){
        let element = document.querySelector('.selected');
        element.classList.remove('selected');
        event.target.classList.add('selected');
    }
}

let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
    let arrayPixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < arrayPixels.length; i += 1) {
        arrayPixels[i].style.backgroundColor = 'white';
    }
});