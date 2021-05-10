const paleta = document.querySelector('#color-palette');
const cores = ['black', 'orange', 'gold', 'yellow'];
for (let i = 0; i < cores.length; i += 1){
  const colors = document.createElement('div');
  colors.className = 'color'
  paleta.appendChild(colors);
  colors.style.background = cores[i];
}     
window.onload = firstColor

const black = document.getElementsByClassName('color')[0];
black.addEventListener('click', firstColor);

function firstColor() {
  black.className = 'color selected';
}

const section = document.getElementById('pixel-board'); 
function renderBoard(boardSize) {
  for (let i = 0; i < boardSize; i += 1){
    const line = document.createElement('div');
      line.className = 'linha'
      section.appendChild(line);
      for (let i = 0; i < boardSize; i += 1){
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        line.appendChild(pixel);
      }
    }
    
  }
  
  renderBoard(5)
  
  const color = document.getElementsByClassName('color');
  for (let i = 0; i < color.length; i += 1) {
    let corSelecionada = color[i];
    corSelecionada.addEventListener('click', 
    function() {
      const ultima = document.querySelector('.selected');
      ultima.classList.remove('selected');
      corSelecionada.className = 'color selected';
    })
  }
  
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', pintaPixel)
    function pintaPixel() {
      const cor = document.querySelector('.selected').style.backgroundColor;
      pixel[i].style.backgroundColor = cor 
    }
  }
  pintaPixel();
  
  