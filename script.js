window.onload = geraCores()

function geraCores() {
  let cor = []
  for(let cores = 0; cores < 4;cores += 1){
    
    let corRgb = `rgb( ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
    cor.push(corRgb)
  }
  return cor
}

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
          quadrinhoLinha.appendChild(quadrinhoData);
      }
      quadro.appendChild(quadrinhoLinha);
  };

  let itemQuadro = document.querySelector('#generate-board');

  itemQuadro.addEventListener('click', () => {
    let tamanhoQuadro = document.querySelector('#board-size').value;

    if(tamanhoQuadro.length === '0'){
      window.alert("Board inválido!")
    }else if(tamanhoQuadro < 5 || tamanhoQuadro >50){
      return false
    }else{
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
    }
    colorir()
  });


};
quadroPixel();

function corInicial() {

  let cor = document.querySelector('.color');
  cor.className += ' selected';
}
corInicial();

function trocaClass() {

  let cor = document.querySelectorAll('.color');

  for(let i =0;i < cor.length;i+=1) {
    cor[i].addEventListener('click', clickCor);
  }
}
function clickCor() {
  let color = 'color';
  let select = 'color selected';
  let selecao = document.querySelector('.selected');
  selecao.className = color;
  cor[i].className = select;
}
trocaClass();

function colorir(){

  let pixel= document.querySelectorAll('.pixel');

  for(let i=0;i<pixel.length;i+=1) {
   

   pixel[i].addEventListener('click', function(){
     let itemCor = document.querySelector('.selected') ;
     let arraycolor = geraCores();

       switch(pixel[i].style.backgroundColor){

                  case arraycolor[0]:
          pixel[i].style.backgroundColor = 'rgb(255, 255, 255)';
          break;
                  case arraycolor[1]:
          pixel[i].style.backgroundColor = 'rgb(255, 255, 255)';
          break;
                  case arraycolor[2]:
          pixel[i].style.backgroundColor = 'rgb(255, 255, 255)';
          break;
                  case arraycolor[3]:
          pixel[i].style.backgroundColor = 'rgb(255, 255, 255)';
          break;
          default:
          pixel[i].style.backgroundColor = itemCor.style.backgroundColor;
          break;

        }

    })
 }
}
colorir();

function LimpaPainel() {
  let limpaPainelBTN = document.querySelector('#clear-board')
  limpaPainelBTN.addEventListener('click', function() {
  let getPixel = document.querySelectorAll('.pixel')
  for(index = 0; index < getPixel.length; index += 1){
      getPixel[index].style.backgroundColor = '#fff';
    }
  })
}
LimpaPainel();

