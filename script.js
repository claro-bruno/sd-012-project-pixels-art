//Desafio 7
let selecionaCor = document.getElementsByClassName('color');

function seleciona(event) {
  let selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected');
  event.target.classList.add('selected');
}
function capturaClasseColor() {
    for (let indice = 0; indice < selecionaCor.length ; indice += 1) {
      selecionaCor[indice].addEventListener('click', seleciona);
    }
}
capturaClasseColor()

//Desafio 8

let selecionaPixel = document.getElementsByClassName('pixel');
for (let index = 0; index < selecionaPixel.length ; index +=1){
  selecionaPixel[index].addEventListener('click', pintar)
}
function pintar (evento) {
  let corSelecionado = document.querySelector('.selected');
  let pintarPixel = window.getComputedStyle(corSelecionado).getPropertyValue("background-color");
  evento.target.style.backgroundColor = pintarPixel;
}











//8.. capturar todos os pixels "brancos"
// for na lista que retornar e adicionar um evento de clique para cada pixel
// o evento de clique tem q pegar o elemento com a classe selected e descobrir a cor dele
// adicionar essa cor como bg-color do pixel
// funciona como o requisito 7 - ppega lista de elementos e faz for na lista
// pegar elemento com a cor selecionada e a cor e atribuir para o pixel
// atraves do evento (addEvent...)