window.onload = firstColor

let black = document.getElementById('black');
black.addEventListener('click', firstColor);

function firstColor() {
    black.className = 'color selected';
}

const section = document.getElementById('pixel-board'); 
function RenderBoard(boardSize) {
    for (let i = 0; i < boardSize; i += 1){
      const Line = document.createElement('div');
      Line.className = 'linha'
      section.appendChild(Line);
      for (let i = 0; i < boardSize; i += 1){
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        Line.appendChild(pixel);
      }
    }
  
  }
  
RenderBoard(5)
  
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
function recebeClick() {
    for (let index = 0; index < pixel.length; index +=1) {
        pixel[i].addEventListener("click",function(){
            const cor = document.querySelector('.selected');
            if(pixel[i].style.backgroundColor != cor.style.backgroundColor) {
            pixel[i].style.backgroundColor = cor.style.backgroundColor
            }
        });
}
}
recebeClick();

