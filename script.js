function cores(){
let cores = document.querySelectorAll('.color');
let arraycolor = ['#000','#faf0ca','#f4d35e','#ee964b','#f95738'];
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
          quadrinho.className = 'pixel'
          quadro.appendChild(quadrinho)
      }
  };
};
quadroPixel();