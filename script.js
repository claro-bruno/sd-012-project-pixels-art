const colorizeBorder = 'green';

function selectedColorPrimary() {
  const onloadBlackColor = document.querySelector('div', '.color', '.selected');
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      pixels[index].style.background = 'black';
    });
  }
  onloadBlackColor.style.borderColor = colorizeBorder;
}

window.onload = () => {
  selectedColorPrimary();
};
