function selectColor(event) {
    let color = document.querySelector('.selected');
    color.classList.remove('selected');
    event.target.classList.add('selected');
}

const colorSlecting = document.getElementById('color-palette');

colorSlecting.addEventListener('click', selectColor); 

function paintPixel(event){
    let selectColor = document.querySelector('.selected').style.backgroundColor;
    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = selectColor;
    }
}

document.addEventListener('click', paintPixel);