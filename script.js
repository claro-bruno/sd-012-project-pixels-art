/* eslint-disable no-undef */
function colorPallete() {
  const colors = ['black', 'blue', 'red', 'green'];
  let colorsPalette = document.querySelectorAll('.color');
  for (let index = 0; index < colorsPalette.length; index += 1) {
    colorsPalette[index].style.backgroundColor = colors[index];
  }
}
colorPallete();
