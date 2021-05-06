window.onload = function () {
  let corInicial = document.getElementById('color1');
  corInicial.className = 'selected';
  padronizaPalheta(corInicial);
  // ddEventListener(p1,p2) onde: p1 e' o evento e p2 a funcao a ser executada
  let paletaPreta = document.getElementById('color1');
  paletaPreta = addEventListener('click',clicouCor(paletaPreta));
  let paletaVermelha = document.getElementById('color2');
  paletaVermelha = addEventListener('click',clicouCor(paletaVermelha));
  let paletaAzul = document.getElementById('color3');
  paletaAzul = addEventListener('click',clicouCor(paletaAzul));
  let paletaVerde = document.getElementById('color4');
  paletaVerde = addEventListener('click',clicouCor(paletaVerde));
}; 

function paletaPadrao() {
  console.log("Aqui");
}

function padronizaPalheta(palheta) {
  palheta.style.width = 20 + 'px';
  palheta.style.height = 20 + 'px;'
  palheta.style.display = inline-block;
  /* border-width: 1px;
  border-style: solid;
  border-color: black; */
}

function clicouCor(corEscolhida) {
  let CorAntiga = document.getElementsByClassName('selected');
  /* const idCorAntiga = */
};

