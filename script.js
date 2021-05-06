function createColorPaletteDiv(bgColor) {
    let colorPaletteSection = document.getElementById('color-palette');
    let colorPaletteDiv = document.createElement('div');

    colorPaletteDiv.className = 'color';
    colorPaletteDiv.style.backgroundColor = bgColor;

    colorPaletteSection.appendChild(colorPaletteDiv);
}

let paletteColors = ['black','red', 'blue', 'green'];
for (let index = 0; index <paletteColors.length; index +=1) {
    createColorPaletteDiv(paletteColors[index]);
}