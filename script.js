// Código para gerar cor de fundo aleátoria:
// Referência: 
// https://stackoverflow.com/questions/1484506/random-color-generator

const paletaDeCores = document.querySelectorAll('.color');

window.onload = () => {
  const blackColor = document.querySelector('#c1');
  blackColor.classList.add('selected');
  function randomColors() {
    const orange = Math.random() * 255;
    const blue = Math.random() * 255;
    const grey = Math.random() * 255;

    return `rgb(${orange},${blue},${grey})`;
  }

  for (let color = 1; color < paletaDeCores.length; color += 1) {
    paletaDeCores[color].style.backgroundColor = randomColors();
  }
};