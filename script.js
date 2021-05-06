
const pixelboard = document.querySelector('#pixel-board')
function mudarCorPaleta (array){
    let arrayCores = ["black","yellow", "red", "green"];
    let paleta = document.getElementsByClassName('color')
    for (index = 0; index < paleta.length; index += 1){
        for (index = 0; index < arrayCores.length; index += 1){
            paleta[index].style.backgroundColor = arrayCores[index];
        } if (arrayCores[index] === "black"){
            paleta[index].className = 'selected'
        }
    }
}
mudarCorPaleta();

//cria pixeis
function createBoard (pixeis) {
    let quadroPixel = document.createElement('table');
    document.body.appendChild(quadroPixel);
    quadroPixel.id = 'pixel-board'
    for(let index = 0; index < pixeis; index += 1) {
        let lineCanvas = document.createElement('tr');
        quadroPixel.appendChild(lineCanvas);
        for (let index = 0; index < pixeis; index += 1) {
            let criaPixels = document.createElement('td')
            lineCanvas.appendChild(criaPixels);
            criaPixels.className = 'pixel';
        }
    }
}
createBoard(8);

//selecao da paleta
let color = document.querySelectorAll('.color')
function mudarSelecao(event){
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', mudarSelecao);
}

//muda cor com base no selecionado
const changeColor = document.querySelector('#pixel-board');
changeColor.addEventListener('click', (e) => {
    const selected = document.querySelector('.selected');
    e.target.style.backgroundColor = selected.style.backgroundColor;
  });













