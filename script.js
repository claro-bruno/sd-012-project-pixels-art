let colorPalette = document.querySelector('#color-palette');

let pixel = ['black', 'red', 'blue', 'green'];

function lista() {
  for (index = 0; index < pixel.length; index += 1) {
    let generateLi = document.createElement('li');
    colorPixel.appendChild(generateLi);
    generateLi.className = 'color';
  }
}



