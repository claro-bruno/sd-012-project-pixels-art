function selectColor(event) {
    let color = document.querySelector('.selected');
    color.classList.remove('selected');
    event.target.classList.add('selected');
}

const colorSlecting = document.getElementById('color-palette');

colorSlecting.addEventListener('click', selectColor); 

function paintPixel(event){
    const painter = document.querySelector('.selected');
    if (event.target.className === 'pixel') {
      event.target.style.backgroundColor = painter.style.backgroundColor;
    }
}

const board = document.getElementById('pixel-board')

board.addEventListener('click', paintPixel);