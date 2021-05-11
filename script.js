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



//Não consegui identificar o erro nesse código, por enquanto estou fazendo as ateraçoes de forma manual no CSS.
// // Função gera cores: Com referência do https://wallacemaxters.com.br/.

function geraCores()
{
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}

//Função selecionaCor, verifiquei o repositório do colega Rafael Primom, isso me ajudou a compreender o que eu estava fazendo no meu próprio código.
let cor = document.getElementsByClassName("color");
let paleta = document.querySelector("#color-palette");

function selectColor() {
    paleta.addEventListener('click', function(event) {
      let corEscolha = document.querySelector('.selected');
      
      corEscolha.classList.remove('selected');
      let clicked = event.target;
      clicked.classList.add('selected');
    });
  }
  
  for (let index = 0; index < cor.length; index += 1) {
    cor[index].addEventListener('click', selecionaCor);
  }

  let pixelI = document.getElementsByClassName("pixel");


const cor1 = document.getElementById('color1').style.backgroundColor = "black";
const cor2 = document.getElementById('color2').style.backgroundColor = geraCores();
const cor3 = document.getElementById('color3').style.backgroundColor = geraCores();
const cor4 = document.getElementById('color4').style.backgroundColor = geraCores();
