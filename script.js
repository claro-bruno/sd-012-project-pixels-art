window.onload = function colorPaletteGenerator() {
  const colorPaletteSection = document.getElementsByClassName('color');
  for (let index = 0; index < colorPaletteSection.length; index += 1) {
    const redColorParameter = Math.floor(Math.random() * 255);
    const greenColorParameter = Math.floor(Math.random() * 255);
    const blueColorParameter = Math.floor(Math.random() * 255);
    if (index === 0) {
      colorPaletteSection[0].style.backgroundColor = 'black';
    } else {
      const fullRGBGenerator = `rgb(${redColorParameter}, ${greenColorParameter}, ${blueColorParameter})`;
      colorPaletteSection[index].style.backgroundColor = fullRGBGenerator;
    }
    colorPaletteSection[index].addEventListener('click', () => {
      // ao invés de capturar a cor, colocar uma classe 'selected' 
      const colorInput = colorPaletteSection[index].style.backgroundColor;
    });
  }
};

function pixelCreation() {
  const maxRow = 5;
  const maxLine = 5;
  const pixelSection = document.querySelector('#pixel-board');
  for (let counter = 0; counter < maxLine; counter += 1) {
    const eachRowDiv = document.createElement('div');
    eachRowDiv.className = 'rowDiv';
    pixelSection.appendChild(eachRowDiv);
    for (let index = 0; index < maxRow; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      eachRowDiv.appendChild(pixel);
    }
  }
}
pixelCreation();




function showintInputColor() {
  console.log(colorInput);
}
showintInputColor()