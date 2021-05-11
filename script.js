// Função gera quadro:
let quadro = document.getElementById("pixel-board");

function quadroPixels(num) {
    for (let index = 0; index < num; index += 1) {
        let linha = document.createElement("div");
        quadro.appendChild(linha);
        for (let index = 0; index < num; index += 1) {
            let coluna = document.createElement("div");
            coluna.className = "pixel"
            quadro.appendChild(coluna);
        }
    }
} 
quadroPixels(5);



// Função gera cores: Com referência do https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function geraCores()
{
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}


//ERRO
let cores = document.getElementsByClassName("color");
let paleta = document.querySelector("#color-palette");

function selecionaCor(event) {
  let selected = document.getElementsByClassName('selected')[0];
    selected.classList.remove('selected');
  event.target.classList.add('selected');

  
}

for (let index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener('click', selecionaCor);
}


//Atribui as cores aleatórias geradas na funçao geraCores
let cor1 = document.getElementById('color1').style.backgroundColor = "black";
let cor2 = document.getElementById('color2').style.backgroundColor = geraCores();
let cor3 = document.getElementById('color3').style.backgroundColor = geraCores();
let cor4 = document.getElementById('color4').style.backgroundColor = geraCores();

//erro desconhecido
//Função pinta quadro
let pixels = document.querySelectorAll(".pixel");
  function pintaPixel(event) {
    let corPixel = document.querySelector('.selected');
    console.log(event.target.style.backgroundColor)
    event.target.style.backgroundColor = corPixel.style.backgroundColor;
  }
  
  
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', pintaPixel);
  }

//Função limpa quadro
let botao = document.getElementById('clear-board');

function limpar() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = "rgb(255, 255, 255)";
  }
}
botao.addEventListener('click', limpar);

