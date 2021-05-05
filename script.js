const palColor = document.getElementById('color-pallete');
const palleteColor = document.querySelectorAll('.color');
const arrayColor = ['rgb(0,0,0','rgb(255,0,0','rgb(0,255,0','rgb(0,0,255'];


function fillPalletColors() {
  for (index = 0; index < palleteColor.length; index +=1) {
      palleteColor[index].style.backgroundColor = arrayColor[index];
  }
}
fillPalletColors();

palColor.addEventListener('click',selectColor);

function selectColor (event) {
  console.log(event.target.style.backgroundColor);
}