window.onload = function () {
  const corInicial = document.getElementById('color1');
  corInicial.className = 'color selected';
  padronizaPalheta(corInicial);
  // ddEventListener(p1,p2) onde: p1 e' o evento e p2 a funcao a ser executada
  const paletaPreta = document.getElementById('color1');
  paletaPreta.addEventListener('click', clicouCor(paletaPreta));
  const paletaVermelha = document.getElementById('color2');
  paletaVermelha.addEventListener('click', clicouCor(paletaVermelha));
  const paletaAzul = document.getElementById('color3');
  paletaAzul.addEventListener('click', clicouCor(paletaAzul));
  const paletaVerde = document.getElementById('color4');
  paletaVerde.addEventListener('click', clicouCor(paletaVerde));
}; 

function paletaPadrao() {
  console.log("Aqui");
}

function clicouCor(corEscolhida) {
    console.log("a cor escolhida :"+corEscolhida);
  let CorAntiga = document.getElementsByClassName('selected');
  /* const idCorAntiga = */
};

