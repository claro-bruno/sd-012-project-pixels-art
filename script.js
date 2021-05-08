let pixeles = document.querySelector("#pixel-board");
let list = document.getElementsByClassName('color');

function criaLinha() {
  for (let index = 0; index < 5; index += 1) {
    let linha = document.createElement("div");
    linha.className = "pixel-line";
    pixeles.appendChild(linha);
  }
}
criaLinha();

function criaPixel() {
  let line = document.getElementsByClassName("pixel-line");
  for (let index1 = 0; index1 < line.length; index1 += 1) {
    if (index1 < 5) {
      for (let index2 = 0; index2 < line.length; index2 += 1) {
        let quadro = document.createElement("div");
        quadro.className = "pixel";
        quadro.addEventListener('click', mudaCor);
        line[index2].appendChild(quadro);

      }
    }
  }
}

criaPixel();

function mudaCor(event) {
  let selected = document.querySelector('.selected');
  let cor = selected.style.backgroundColor;
  event.target.style.backgroundColor = cor;
  console.log('jsjsks')
}

function classe() {
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', () => {
      for (let index3 = 0; index3 < list.length; index3 += 1) {
        list[index3].classList.remove("selected");
      }
      list[index].classList.add('selected')
    })
  }
}
classe();
