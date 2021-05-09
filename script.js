function corInicial(corInicio) {
const corInicial = document.getElementById(corInicio);
  corInicial.className = 'color selected';
}

function iniciaPalhetas(coresIniciais) {
  const palhetas = document.getElementsByClassName('color');
  if (palhetas.length === coresIniciais.length) {
    for (let indice = 0; indice < palhetas.length ; indice += 1) {
      palhetas[indice].style.color = coresIniciais[indice];
      palhetas[indice].style.backgroundColor = coresIniciais[indice];
    }
  }
   else {
     return 'Quantidade de cores é diferente da quantidade de palhetas';
   }
}

function clicouCor() {
  const corAntiga = document.getElementById('color-palette');
  corAntiga.addEventListener('click', function(event) {
    document.querySelector(".selected").classList.remove("selected");
    event.target.classList.add("selected");
  })
 };

 function pintar() {
  const tabelaPixel = document.querySelectorAll(".pixel");
  for (let indice = 0; indice < tabelaPixel.length; indice +=1) {
    tabelaPixel[indice].addEventListener('click', function(event) {
      let corEscolhida = document.getElementsByClassName('color selected')[0].style.backgroundColor;
      event.target.style.background = corEscolhida;
    })
  }
 }

/* window.onload = function () { */
corInicial('color1');
iniciaPalhetas(['black', 'red', 'blue', 'green']);
clicouCor();
pintar();
