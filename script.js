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
  console.log(tabelaPixel);
  for (let indice = 0; indice < tabelaPixel.length; indice +=1) {
    tabelaPixel[indice].addEventListener('click', function(event) {
      let corEscolhida = document.getElementsByClassName('selected')[0].style.background;
      console.log(corEscolhida);
      event.target.style.background = corEscolhida;
    })
  }
 }
/* window.onload = function () { */
  iniciaPalhetas(['black', 'red', 'blue', 'green']);
  // estou aqui

/* document.getElementById('color1').style.backgroundColor = 'black';
document.getElementById("color1").style.color = "black"; */


/* corPixel.style.background-color = black; */
/* const corInicial = document.getElementById('color1');
corInicial.className = 'color selected';
 */clicouCor();
pintar();
