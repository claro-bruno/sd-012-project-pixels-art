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
cor[0].className += ' selected';
}
corInicial();

function colorir(){
// A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;


}
colorir()