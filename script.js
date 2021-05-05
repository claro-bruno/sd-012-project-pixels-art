const colors = document.getElementsByClassName('color');

function inputColorsPalett(arrayElements, arrayColors) {
  for (let index = 0; index < arrayElements.length; index += 1) {
    console.log(arrayColors[index]);
    arrayElements[index].style.backgroundColor = arrayColors[index];
  }
}

const RGBColors = ['#000000', '#800000', '#008000', '#000080'];

inputColorsPalett(colors, RGBColors);
