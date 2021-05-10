const arrayCores =['black', 'red', 'blue', 'orange'];
const cores = document.querySelectorAll('.color');

GeraCores();//atribui cores a paleta
function GeraCores (){
    for (let index = 0; index < arrayCores.length; index +=1) {
      cores[index].style.backgroundColor = arrayCores[index];
    } 
}
cores[0].classList.add('selected'); //cor preto já está selecionada
function mudaClasse(event) {//adiciona a classe selected no elemento que receber o evento de click
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}
eventClick();
function eventClick(){//captura o click na paleta
for (let indexSelect = 0; indexSelect < cores.length; indexSelect += 1) {
    cores[indexSelect].addEventListener('click', mudaClasse);
}
}
document.body.addEventListener('click', ColorePixel);
function ColorePixel(event){//colore a classe pixel clicada 
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
}
