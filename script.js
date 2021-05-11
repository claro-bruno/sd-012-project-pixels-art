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



// Agora funciona!.
// Função gera cores: Com referência do https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

function geraCores()
{
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}

const cor1 = document.getElementById('color1').style.backgroundColor = "black";
const cor2 = document.getElementById('color2').style.backgroundColor = geraCores();
const cor3 = document.getElementById('color3').style.backgroundColor = geraCores();
const cor4 = document.getElementById('color4').style.backgroundColor = geraCores();


//Função selecionaCor, verifiquei o repositório do colega Rafael Primom, isso me ajudou a compreender o que eu estava fazendo no meu próprio código.

let cor = document.getElementsByClassName("color");
let paleta = document.querySelector("#color-palette");

function selecionaColor() {
    paleta.addEventListener('click', function(event) {
      let corEscolha = document.querySelector('.selected');
      corEscolha.classList.remove('selected');
      let selecao = event.target;
      selecao.classList.add('selected');
    });
  } 

// //Função pinta quadro
//   function pintaPixel(event) {
//     let corPixel = document.querySelector('.selected');
//     event.target.style.corPixel = corPixel.style.backgroundColor;
//   }
  
//   for (let index = 0; index < pixels.length; index += 1) {
//     pixels[index].addEventListener('click', pintaPixel());
//   }

//Função limpa quadro
let pixels = document.querySelectorAll("#pixel");
let botao = document.getElementById('clear-board');

function limpar() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = "white";
  }
}
botao.addEventListener('click', limpar);

