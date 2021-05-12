function selectColor(event) {
    let color = document.querySelector('.selected');
    color.classList.remove('selected');
    event.target.classList.add('selected');
}

const colorSlecting = document.getElementById('color-palette');

colorSlecting.addEventListener('click', selectColor);