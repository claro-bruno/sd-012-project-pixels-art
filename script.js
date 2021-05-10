let colors = document.querySelectorAll('.color');
let colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', (event) => {
    for (let index = 0; index < colors.length; index += 1) {
        if(colors[index].classList.contains('color')) {
            colors[index].classList.remove('selected');
            (event.target.classList.contains('color'));
            event.target.classList.add('selected');
        }
    }
});