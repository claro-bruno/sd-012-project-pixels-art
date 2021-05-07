window.onload = function () {
  const corInicial = document.getElementById('color1');
  corInicial.className = 'color selected';
   // ddEventListener(p1,p2) onde: p1 e' o evento e p2 a funcao a ser executada
  const paletaPreta = document.getElementById('color1');
  paletaPreta.addEventListener('click', clicouCor); 
  const paletaVermelha = document.getElementById('color2');
  paletaVermelha.addEventListener('click', clicouCor);
  const paletaAzul = document.getElementById('color3');
  paletaAzul.addEventListener('click', clicouCor);
  const paletaVerde = document.getElementById('color4');
  paletaVerde.addEventListener('click', clicouCor);
}; 

function clicouCor(paletaEscolhida) {
  const corAntiga = document.getElementsByClassName('selected')[0];
  corAntiga.className = 'color';
  const corNova = document.getElementById(paletaEscolhida.target.id);
  corNova.className = 'color selected';
};

/* 
  cont cor = document.querySelector9(#palete)
cor.addeventlistener('click, (event) => {
  if (event.target.classname === 'color') {
   corselec.classlist.remove(selected);
   event.target.classlist.add(selected)
document.getElementsByClassName("selected")[0]
  const corAntiga = document.getElementsByClassName('color selected');
  const teste = document.getElementById(corAntiga);
  console.log(teste);
  console.log(corAntiga);
  /* document.getElementById("MyElement").className = "color"; */
  /* corAntiga.className = 'color';
  console.log(corAntiga);
   */
 
