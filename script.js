window.onload = function () {
  const getColorPalette = document.getElementById('color-palette');
  const getColors = document.getElementsByClassName('color');
  const getPixelBoard = document.getElementById('pixel-board');
  const getClearButton = document.querySelector('#clear-board');
  const getPixels = document.querySelectorAll('.pixel');

  //7
  function changeColorSelected(event) {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  for (let color of getColors) {
    color.addEventListener('click', changeColorSelected);
  }

  //8
  function fillPixel(event) {
    const refreshColorSelected = document.querySelector('.selected');
    const style = getComputedStyle(refreshColorSelected);
    event.target.style.backgroundColor = style.backgroundColor;
  }
  getPixelBoard.addEventListener('click', fillPixel);

  //9
  getClearButton.addEventListener('click', function () {
    for (let pixel of getPixels) {
      pixel.style.backgroundColor = 'white';
    }
  });
};
