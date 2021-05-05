window.onload = function() {
    let color_palette = document.querySelector('#color-palette');
    function makeColor (quantity) {
        for(let index = 0; index < quantity; index += 1) {
            let color = document.createElement('div');
            color.className = 'color';
            defineFirstColor(index, color);
            color_palette.appendChild(color);
        }
    }
    makeColor(4);

    function defineFirstColor (index, color) {
        if (index !== 0) {
            color.style.backgroundColor = colorGeneration();
        }
        else {
            color.style.backgroundColor = 'black';
        }
    }

    function colorGeneration () {
        return '#' + parseInt((Math.random() * 0xFFFFFF))
        .toString(16)
        .padStart(6, '0');
    }
}