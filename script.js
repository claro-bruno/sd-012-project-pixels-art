// Código para gerar cor de fundo aleátoria:
// Referência: 
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

const colorSelected = document.querySelectorAll('.color');

window.onload = () => {
  const blackColor = document.querySelector('#c1');
  blackColor.classList.add('selected');
  function randomColors() {
    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;

    return `rgb(${red},${green},${blue})`;
  }

  for (let color = 1; color < colorSelected.length; color += 1) {
    colorSelected[color].style.backgroundColor = randomColors();
  }
};