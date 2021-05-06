
let corMaster = document.querySelector("#color-palette");
let cores = ['black', 'red', 'blue', 'green', 'yellow'];
for(let index = 0; index < 4; index +=1){
    let cor = document.createElement('div');//cria os elementos div para serem populados
    cor.className = 'color';//atribui o nome à classe do elemento cor
    cor.style.backgroundColor = cores[index];//Atribui stilo e cor de fundo ao elemento criado cor.
    corMaster.appendChild(cor);

}













