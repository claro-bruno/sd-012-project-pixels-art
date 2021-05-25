
const btnLimpar = document.getElementById('clear-board')
btnLimpar.addEventListener('click', () => {
let limpaPixels = document.querySelectorAll(".pixel");
  for ( let index = 0; index < limpaPixels.length; index += 1) {
      limpaPixels[index].style.backgroundColor = "white";
  }
})