const shadows = '2px 2px 2px green';

function selectedColorPrimary() {
  const onloadBlackColor = document.querySelector('div', '.color', '.selected');
  const pixels = document.querySelectorAll('.pixel');
  const primary = document.getElementsByClassName('color')[0];
  console.log(primary.style.color);

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      pixels[index].style.background = 'black';
    });
  }
  onloadBlackColor.style.boxShadow = shadows;
}

window.onload = () => {
  selectedColorPrimary();
};
