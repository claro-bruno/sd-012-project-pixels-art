window.onload = geraCores()

function geraCores() {
  let cor = ['rgb(0,0,0)']
  for(let cores = 0; cores < 3;cores += 1){
    
    let corRgb = `rgb( ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
    cor.push(corRgb)
  }
  return cor
}
console.log(geraCores())

function cores(){
let cores = document.querySelectorAll('.color');
let arraycolor = geraCores();
for(let index =0; index < cores.length;index +=1){
cores[index].style.backgroundColor = arraycolor[index];
};
};
cores();

function quadroPixel(){
  let quadro = document.querySelector('#pixel-board')

  for(let linha = 1; linha <= 5;linha +=1){
  let quadrinhoLinha = document.createElement('tr');
      for(let coluna =1 ; coluna <= 5 ; coluna +=1){
          let quadrinhoData = document.createElement('td');
          quadrinhoData.className = 'pixel';
          quadrinhoLinha.appendChild(quadrinhoData)
      }
      quadro.appendChild(quadrinhoLinha)
  };

  let itemQuadro = document.querySelector('#generate-board');

  itemQuadro.addEventListener('click', () => {
    let tamanhoQuadro = document.querySelector('#board-size').value;

    if(tamanhoQuadro === ''){
      alert("Board inválido!")
      return false
    }
     if(tamanhoQuadro > 50){
      tamanhoQuadro = 50;
    }
     if(tamanhoQuadro < 5){
      tamanhoQuadro = 5;
    }
      let getPixel = document.querySelectorAll('tr')

      for(index = 0; index < getPixel.length; index += 1){
        getPixel[index].remove()
      }

      for(let linha = 1; linha <= tamanhoQuadro;linha +=1){
        let quadrinhoLinha = document.createElement('tr');
      
            for(let coluna =1 ; coluna <= tamanhoQuadro ; coluna +=1){
                let quadrinhoData = document.createElement('td');
                quadrinhoData.className = 'pixel';
                quadrinhoLinha.appendChild(quadrinhoData)
            }

            quadro.appendChild(quadrinhoLinha)
      };
    
    colorir()
  });


};
quadroPixel();

function corInicial(){
//adiciona a nova classe das classes color
let cor = document.querySelector('.color');
cor.className += ' selected';
}
corInicial();

function trocaClass(){

let cor = document.querySelectorAll('.color');

for(let i =0;i < cor.length;i+=1){
  let color = 'color';
  let select = 'color selected';
  cor[i].addEventListener('click', function(){
    let selecao = document.querySelector('.selected');
    selecao.className = color;
    cor[i].className = select;
  })
}
}
trocaClass();

function colorir(){
  let pixel= document.querySelectorAll('.pixel');

 for(let i=0;i<pixel.length;i+=1){
   
   pixel[i].addEventListener('click', function() {

    let itemCor = document.querySelector('.selected') ;
         pixel[i].style.backgroundColor = itemCor.style.backgroundColor;

            })
  }
}
colorir();

function LimpaPainel(){
  let limpaPainelBTN = document.querySelector('#clear-board')
  limpaPainelBTN.addEventListener('click', function(){
    let getPixel = document.querySelectorAll('.pixel')
    for(index = 0; index < getPixel.length; index += 1){
      getPixel[index].style.backgroundColor = '#fff';
    }
  })
}
LimpaPainel();

