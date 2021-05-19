let quadro = document.getElementById('pixel-board');

function board(num){
  //for(let cont = 0; cont < num; cont += 1)
  for(let i = 0; i < num; i += 1){
    let linha = document.createElement('div');
    quadro.appendChild(linha);
      for(let index = 0; index < num; index += 1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        linha.appendChild(pixel);
      }
  }

}
board(5);

// Em primeiro lugar eu preciso selecionar meu elemento color-palette, usando getElementById ou querySelector
// Atribuir o evento de clique para que eu selecione a cor desejada
// Ao clicar em qualquer cor da paleta faz com que minha cor seja trocada
// Ao clicar nos pixels faz com que


let trocaCorPaleta = document.querySelector('#pixel-board')
trocaCorPaleta.addEventListener('click', function(event){
  if(event.target.className === 'pixel'){
    let selectedColor = document.querySelector('.selected')
    event.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
  });
// Primeiro capturar os elementos da paleta de cores, posso usar o getElementByclassName ou querySelectorAll
// Atribuir o evento de clique para cada um dos elementos, através de um "for"
// Meu evento de clique precisa capturar o elemento que possui a classe selected, e depois deletar a classe selected desse elemento anterior
// Atribuir a classe selected ao elemento clicado

let paleta = document.querySelectorAll('.color');
for(let index = 0; index < paleta.length; index +=1){
  paleta[index].addEventListener('click', function(event){
    let selectedColor = document.querySelector('.selected')
    selectedColor.classList.remove('selected')
    event.target.classList.add('selected')

  });
}


document.body.addEventListener('click', function(event){
  if(event.target.getElementById === 'clear-board'){
    event.target.style.backgroundColor = 'white';
  }
});