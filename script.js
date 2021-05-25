// capturar todos os elementos da class color 
// adicionar evento de click a cada um dos elementos do primeiro passo 
// capturar o elemento com a classe select dentro da função click 
// remover a classe select do elemento selecionado 
// adicionar a classe select ao elemento clicado

let capturaCor = document.getElementsByClassName('color')
for(let index = 0; index < capturaCor.length; index +=1){
    capturaCor[index].addEventListener('click',alteraCor)
}
function alteraCor(event){
    let capturaSelect = document.querySelector('.selected')
    capturaSelect.classList.remove("selected")
   event.target.classList.add('selected')
}

// // capturar todos os elementos com a class pixel 
// rodar o for para add undefined, evendo de  click para cada pixel
// dentro da função --- selecionar o elemento com a class selected
// pegar a cor de fundo do elemento selecionado 
// adicionar a cor de fundo ao elemento clicado 

let capturaPixel = document.getElementsByClassName('pixel')
for(let index = 0; index < capturaPixel.length; index +=1){
    capturaPixel[index].addEventListener('click', colorPixel);
}
function colorPixel(event){
    let capturaColorPixel = document.querySelector('.selected')
    let capturaBg = window.getComputedStyle(capturaColorPixel).getPropertyValue("background-color")
    event.target.style.backgroundColor = capturaBg
    console.log(capturaBg)
}   