/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
function selectColor() {
  const getColors = document.getElementsByClassName('color');

  for (let index = 0; index < getColors.length; index += 1) {
    getColors[index].addEventListener('click', () => {
      if (getColors[index] === getColors[0]) {
        getColors[0].classList.add('selected');
        getColors[1].classList.remove('selected');
        getColors[2].classList.remove('selected');
        getColors[3].classList.remove('selected');
      } else if (getColors[index] === getColors[1]) {
        getColors[1].classList.add('selected');
        getColors[0].classList.remove('selected');
        getColors[2].classList.remove('selected');
        getColors[3].classList.remove('selected');
      } else if (getColors[index] === getColors[2]) {
        getColors[2].classList.add('selected');
        getColors[0].classList.remove('selected');
        getColors[1].classList.remove('selected');
        getColors[3].classList.remove('selected');
      } else if (getColors[index] === getColors[3]) {
        getColors[3].classList.add('selected');
        getColors[0].classList.remove('selected');
        getColors[1].classList.remove('selected');
        getColors[2].classList.remove('selected');
      }
    });
  }
}

selectColor();
