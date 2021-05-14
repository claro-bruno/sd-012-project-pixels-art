
let quadrado = document.getElementById('pixel-board');
function board(num) {
    for(let index = 0; index < num; index += 1) {
        let linha = document.createElement('div');
        quadrado.appendChild(linha);
    for(let index = 0; index < num; index +=1) {
        let coluna = document.createElement('div')
        coluna.className = 'pixel';
        quadrado.appendChild(coluna);
    }
}
}
board(5);

let selecaoCor = document.getElementsByClassName('color');
for(index = 0; index < selecaoCor.length; index +=1){
selecaoCor[index].addEventListener('click', function(event){
    let elemento = document.querySelector('.selected');
    elemento.classList.remove('selected');
    event.target.classList.add('selected');
  })
}
// function pinta (){
//     let pintaPixel = document.getElementsByClassName('pixel');
//     for(let index =0; index < pintaPixel.length; index +=1){
//         pintaPixel[index].addEventListener('click', function(event){
//             let cor = document.querySelector('.selected');
    
//              event.target.style.backgroundcolor = cor.style.backgroundcolor;
//     })
//   }
// }
// pinta();

function changeColorClick() {
    const pixels = document.querySelectorAll('.pixel');
    for (const pixel of pixels) {
      pixel.addEventListener('click', changeColor);
    }
  }
  
  // Botão que deixa o background de todos os pixels da board como 'white'.
  function clearBoard() {
    const pixels = document.querySelectorAll('.pixel');
    for (const pixel of pixels) {
      pixel.style.backgroundColor = 'white';
    }
  }
