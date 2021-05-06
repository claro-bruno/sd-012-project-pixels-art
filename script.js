let cor1 = "rgb(0, 0, 0, 1)";
let cor2 = "rgb(255, 0, 0, 1)";
let cor3 = "rgb(0, 100, 255, 1)";
let cor4 = "rgb(0, 255, 0, 1)";

let cor = [cor1, cor2, cor3, cor4]

let espaco = " ";
let selected = "selected";
let corEscolha = "cor1";

// Atribui um ID para os elementos com a classe "color"
// e atribui uma cor de fundo para cada elemento
// atribui a classe "selected" para o primeiro item do array cor[]
function coresPaleta() {
  let paleta = document.getElementsByClassName("color");
  for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].setAttribute("id", "cor" + (index+1));
    if (paleta[index].id === ("cor" + (index+1))) {
      paleta[index].style.backgroundColor = cor[index];
    }
    if (index === 0) {
      paleta[index].className = paleta[index].className + espaco + selected;
    }
  }
}

function clickCor() {
  document.addEventListener("click", function(clicado) {
    if (event.target.className === "color") {
      let selecao = document.querySelector(".selected");
      selecao.className = "color";
      clicado.target.classList += espaco + selected;
      //corEscolha = clicado.target.id; // escolhe a cor
      //console.log(corEscolha);
      
    }
  });
}

function colorePixel() {
  document.addEventListener("click", function(colore) {
    if (event.target.className === "pixel") {
        let selecao = document.getElementsByClassName("selected");
        corEscolha = selecao[0].style.backgroundColor;
        console.log(corEscolha);
        colore.target.style.backgroundColor = corEscolha;
    }
  });
}

function criaPixel() {
  let linha = 5;
  let coluna = 5;
  let divLinha = [];
  let idPixel = 1;
  let lugar = document.getElementById("pixel-board");
  for (let indexColuna = 0; indexColuna < coluna; indexColuna += 1) {
    let criaLinha = document.createElement("div");
    criaLinha.setAttribute("class", "linha");
    divLinha.push(criaLinha);
    lugar.appendChild(divLinha[indexColuna]);
    for (let indexLinha = 0; indexLinha < linha; indexLinha += 1) {
      let pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");
      divLinha[indexColuna].appendChild(pixel);
      pixel.setAttribute("id", "pixel" + idPixel);
      idPixel += 1;
    }
  }
  tamanhoPixel(40);
}

function tamanhoPixel(tamanho) {
  let tamanhoBorda = 1;
  let todosPixels = document.getElementsByClassName("pixel");
  for (let index = 0; index < todosPixels.length; index += 1) {
    todosPixels[index].style.width = tamanho + "px";
    todosPixels[index].style.height = tamanho + "px";
  }
  let todasLinhas = document.getElementsByClassName("linha");
  for (let index = 0; index < todasLinhas.length; index += 1) {
    todasLinhas[index].style.height = tamanho + (tamanhoBorda * 2) + "px";
  }
}

coresPaleta();
clickCor();
criaPixel();
colorePixel();   