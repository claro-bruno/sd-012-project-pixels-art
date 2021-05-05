window.onload = function colorPaletteGenerator() {
  let colorPaletteSection = document.getElementsByClassName('color');
  // The first color must be black
  colorPaletteSection[0].style.backgroundColor = 'black';
  // Generating all other colors randomly
  for (let index = 1; index < colorPaletteSection.length; index += 1) {
    let redColorParameter = parseInt(Math.random() * 255);
    let greenColorParameter = parseInt(Math.random() * 255);
    let blueColorParameter = parseInt(Math.random() * 255);
    colorPaletteSection[index].style.backgroundColor = `rgb(${redColorParameter}, ${greenColorParameter}, ${blueColorParameter})`;
  }
};

function pixelCreation() {
  let maxRow = 5;
  let maxLine = 5;
  let pixelSection = document.querySelector('#pixel-board')
  for (let counter = 0; counter < maxLine; counter += 1) {
    let eachRowDiv = document.createElement('div');
    eachRowDiv.className = 'rowDiv'
    pixelSection.appendChild(eachRowDiv);
    for (let index = 0; index < maxRow; index += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      eachRowDiv.appendChild(pixel);
    }
  }


  console.log('foi');
}
pixelCreation()
