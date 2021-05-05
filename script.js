function cores(){
let cores = document.querySelectorAll('.color');
let arraycolor = ['#000','#faf0ca','#f4d35e','#ee964b'];
for(let index =0; index < cores.length;index +=1){
cores[index].style.backgroundColor = arraycolor[index];
};
};
cores();

function quadroPixel(){
  let quadro = document.querySelector('#pixel-board')
  
  for(let linha = 1; linha <= 5;linha +=1){
      for(let coluna =1 ; coluna <= 5 ; coluna +=1){
          let quadrinho = document.createElement('div');
          quadrinho.className = 'pixel';
          quadro.appendChild(quadrinho)
      }
  };
};
quadroPixel();

function corInicial(){
//adiciona a nova classe das classes color
let cor = document.querySelectorAll('.color');
cor[0].className += ' selected';
for(let ICor = 0; ICor < cor.length;ICor+=1){
  cor[ICor]
}

// muda a cor dos pixel para a mesma cor do item com classe selected


}
corInicial();