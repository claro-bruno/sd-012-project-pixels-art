window.onload = function colorPaletteGenerator() {
  let colorPaletteDiv = document.getElementsByClassName('color');
  // The first color must be black
  colorPaletteDiv[0].style.backgroundColor = 'black'
  // Generating all other colors randomly
  for (let index = 1; index < colorPaletteDiv.length; index += 1) {
    let redColorParameter = parseInt(Math.random() * 255);
    let greenColorParameter = parseInt(Math.random() * 255);
    let blueColorParameter = parseInt(Math.random() * 255);
    colorPaletteDiv[index].style.backgroundColor = `rgb(${redColorParameter}, ${greenColorParameter}, ${blueColorParameter})`;
  }
};
