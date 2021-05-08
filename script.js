function makePallete(colors) {
  const colorNumber = colors;
  for (let index = 0; index < colorNumber; index += 1) {
    const pallete = document.getElementById('color-palette');
    const palletSlot = document.createElement('div');
    palletSlot.className = 'color';
    pallete.appendChild(palletSlot);
  }
}
makePallete(4);

const colors = ['black', 'red', 'silver', 'gold'];
function paintPallete(painting) {
  const fillPallet = document.getElementsByClassName('color');
  for (let index = 0; index < fillPallet.length; index += 1) {
    fillPallet[index].style.backgroundColor = painting[index];
  }
}
paintPallete(colors);