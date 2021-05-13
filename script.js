
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