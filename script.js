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
  let quadrinhoLinha = document.createElement('tr');

      for(let coluna =1 ; coluna <= 5 ; coluna +=1){
          let quadrinhoData = document.createElement('td');
          quadrinhoData.className = 'pixel';
          quadrinhoLinha.appendChild(quadrinhoData)
      }
      quadro.appendChild(quadrinhoLinha)
  };
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
   
   pixel[i].addEventListener('click', function(){
     let itemCor = document.querySelector('.selected') ;
     let arraycolor = ['rgb(0, 0, 0)','rgb(250, 240, 202)','rgb(244, 211, 94)','rgb(238, 150, 75)'];
       switch(pixel[i].style.backgroundColor){
                  case arraycolor[0]:
         pixel[i].style.backgroundColor = '#fff';
         break;
                  case arraycolor[1]:
         pixel[i].style.backgroundColor = '#fff';
         break;
                  case arraycolor[2]:
         pixel[i].style.backgroundColor = '#fff';
         break;
                  case arraycolor[3]:
         pixel[i].style.backgroundColor = '#fff';
         break;
         default:
         pixel[i].style.backgroundColor = itemCor.style.backgroundColor;
         break;

       }

    })
 }
}
colorir();
