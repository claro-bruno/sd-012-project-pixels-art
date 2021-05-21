const quadro = document.getElementById('pixel-board');

function board(num) {
  for (let i = 0; i < num; i += 1) {
    const linha = document.createElement('div');
    quadro.appendChild(linha);
    for (let index = 0; index < num; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
  }
}
board(5);

const trocaCorPaleta = document.querySelector('#pixel-board')
trocaCorPaleta.addEventListener('click', function (event) {
  if (event.target.className === 'pixel') {
    const selectedColor = document.querySelector('.selected');
    const cor = window.getComputedStyle(selectedColor).backgroundColor;
    event.target.style.backgroundColor = cor;
  }
});

const paleta = document.querySelectorAll('.color');
for (let index = 0; index < paleta.length; index += 1) {
  paleta[index].addEventListener('click', function (event) {
    const selectedColor = document.querySelector('.selected')
    selectedColor.classList.remove('selected')
    event.target.classList.add('selected')
  });
}

const pixels = document.getElementsByClassName('pixel');
for(let i = 0; i < pixels.length; i+= 1){
  pixels[i].addEventListener("click", function(){
  let corNova = document.getElementsByClassName("selected")[0].style.backgroundColor;
  pixels[i].style.backgroundColor = corNova;
  })
}

const button = document.getElementById("clear-board");
button.addEventListener('click', clear);
function clear (){
  for(let i = 0; i < pixels.length; i+= 1){
    document.getElementsByClassName("pixel")[i].style.backgroundColor = "white"
  }
}
