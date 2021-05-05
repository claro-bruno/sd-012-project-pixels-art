function alteraCor() {
  const cores = ['black', 'blue', 'red', 'green'];
  let paletaCores = document.getElementsByClassName('color');
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].style.backgroundColor = cores[index];
  }
}
alteraCor();

function criaQuadradosDiv() {
  let pixel = document.createElement('div');
  pixel.className = 'pixel'
  return pixel
}
function criaLinhasDiv() {
  let pixelLine = document.createElement('div');
  pixelLine.className = 'pixel-line'
  return pixelLine
}
function criaLinhas(size) {
  let pixelLineParent = document.getElementById('pixel-board');
  for (let index = 0; index < size; index += 1) {
    pixelLineParent.appendChild(criaLinhasDiv())
  }
}

function criaQuadrados(size) {
  let pixelLine = document.getElementsByClassName('pixel-line');
  for (let index = 0; index < pixelLine.length; index += 1) {
    if (index < size) {
      for (let index2 = 0; index2 < pixelLine.length; index2 += 1) 
      pixelLine[index2].appendChild(criaQuadradosDiv())
    }
  }
}

function createSquare(tamanho) {
  criaLinhas(tamanho)
  criaQuadrados(tamanho)
}
createSquare(5);