function criaQuadradosDiv() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  return pixel;
}
function criaLinhasDiv() {
  const pixelLine = document.createElement('div');
  pixelLine.className = 'pixel-line';
  return pixelLine;
}
function criaLinhas(size) {
  const pixelLineParent = document.getElementById('pixel-board');
  for (let index = 0; index < size; index += 1) {
    pixelLineParent.appendChild(criaLinhasDiv());
  }
}
function repetidor(pixelLine) {
  for (let index2 = 0; index2 < pixelLine.length; index2 += 1) {
    pixelLine[index2].appendChild(criaQuadradosDiv());
  }
}
function criaQuadrados(size) {
  const pixelLine = document.getElementsByClassName('pixel-line');
  for (let index = 0; index < pixelLine.length; index += 1) {
  if (index < size) {
    repetidor(pixelLine)
    }
  }
}
function createSquare(tamanho) {
  criaLinhas(tamanho)
  criaQuadrados(tamanho)
}
createSquare(5);

const cores = ['black', 'blue', 'red', 'green']; // black obrigatoriamente tenque ser a 1cor do array
function alteraCor() {
  let paletaCores = document.getElementsByClassName('color');
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].style.backgroundColor = cores[index];
  }
}
alteraCor();

window.onload = function() {
  function corPadrao() {
    let paletaCorPadrao = document.getElementsByClassName('color');
    for (let index = 0; index < paletaCorPadrao.length; index += 1) {
      paletaCorPadrao[index].classList.remove('selected')
    }
    paletaCorPadrao[0].classList.add('selected'); 
  }
corPadrao();
  
}//window.onload braket =====================================================================================

let paleta = document.getElementsByClassName('color');
for (let index = 0; index < paleta.length; index += 1) {
  paleta[index].addEventListener('click', function(event) {
    let removeSelection = document.querySelector('.selected');
    removeSelection.classList.remove('selected');
    event.target.classList.add('selected');
  })
}
  
  // function paletaSelector(classe) {
  //   let elementoSelecionado = document.querySelector('.selected');
  //   elementoSelecionado.classList.remove('selected');
  //   classe.target.classList.add('selected');
  // }