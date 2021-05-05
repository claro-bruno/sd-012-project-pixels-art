function coresPaleta(array) {
  const paletas = document.getElementsByClassName('color');
  paletas[0].style.backgroundColor = 'black';
  for (let index = 1; index < paletas.length; index += 1) {
    paletas[index].style.backgroundColor = array[index - 1];
  }
}
const paletaCores = ['blue', 'green', 'yellow'];
coresPaleta(paletaCores);
