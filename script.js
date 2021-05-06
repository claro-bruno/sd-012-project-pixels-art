let colorPalette = document.getElementById('color-palette');

let blockBlack = document.createElement('div');
colorPalette.insertBefore(blockBlack, colorPalette.firstChild);
blockBlack.className = 'color black';