window.onload = function () {
  const getColorPalette = document.getElementById('color-palette');
  const getColors = document.getElementsByClassName('color');

  function changeColorSelected(event) {
    let colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  for (let color of getColors) {
    color.addEventListener('click', changeColorSelected);
  }
};
