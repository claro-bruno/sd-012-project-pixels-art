let pixeles = document.querySelector("#pixel-board");

let palette = document.querySelector("#color-palette");

function criaPreto() {
  for (let i = 0; i < 1; i += 1) {
    let preto = document.createElement('div')
    preto.className = 'color selected'
    palette.appendChild(preto);
    preto.style.backgroundColor = 'black'
  }
}
criaPreto();

function quadroPalette() {

  let color = '#';
  let simbolos = '0123456789ABCDEF';
  for (let i = 0; i < 6; i += 1) {
    color += simbolos[Math.floor(Math.random() * 16)];
  }

  for (let j = 0; j < 3; j += 1) {
    let pix = document.createElement('div');
    pix.className = 'color';
    palette.appendChild(pix);
  
      pix.style.backgroundColor = color;
      console.log(pix)
  }
}
quadroPalette()

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
        line[index2].appendChild(quadro);
        quadro.style.backgroundColor = 'white'
        quadro.addEventListener('click', mudaCor);
      }
    }
  }
}

criaPixel();


let list = document.querySelectorAll('.color');;

function mudaClasse() {

  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', () => {
      for (let index3 = 0; index3 < list.length; index3 += 1) {
        list[index3].classList.remove("selected");
      }
      list[index].classList.add('selected')
    })
  }
}
mudaClasse();

function mudaCor(event) {
  let selected = document.querySelector('.selected')
  let cor = selected.style.backgroundColor;
  console.lo
  event.target.style.backgroundColor = cor;
  console.log('jsjsks')
}

window.onload = function() {
  let botao = document.getElementById("clear-board");
  botao.addEventListener('click', () => {
    let reset = document.querySelectorAll('.pixel');
    for(let i = 0; i < reset.length; i += 1) {
      reset[i].style.backgroundColor = 'white'
    }
  })
}