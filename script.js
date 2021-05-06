
let corMaster = document.querySelector("#color-palette");
let cores = ['black', 'red', 'blue', 'green'];
for(let index = 0; index < 4; index +=1){
    let cor = document.createElement('div');//cria os elementos div para serem populados
    cor.className = 'color';//atribui o nome à classe do elemento cor
    cor.style.backgroundColor = cores[index];//Atribui stilo e cor de fundo ao elemento criado cor.
    corMaster.appendChild(cor);

}

let getTrContainer = document.querySelector('#pixel-board');
let coresPixel = ['black', 'red', 'blue', 'green'];
for(let linhaIndex = 0; linhaIndex < 5; linhaIndex += 1){
    let pixelLinha = document.createElement('div');
    pixelLinha.className = 'pixel-line';
    document.getElementById('pixel-board').appendChild(pixelLinha);
    
}

//let getTdContainer = document.querySelector('.pixel-line');
let pixelLinhas = document.getElementsByClassName('pixel-line');
for(let colunaIndex = 0; colunaIndex < pixelLinhas.length; colunaIndex +=1 ){
    for(let index = 0; index < pixelLinhas.length; index += 1){
    let pixelColuna = document.createElement('div');
    pixelColuna.className = 'pixel';
    pixelLinhas[index].appendChild(pixelColuna);
    }

  
    
}
window.onload = corInicial;
function corInicial(){
    let buscaColor = document.querySelector('.color');
    buscaColor.classList.add('selected');
}






   














