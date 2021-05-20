// 7.. capturar os elementos classe color
// tem 4 elementos (for para acessar cada um dos elementos)
// adicionar evento de clique (addEventList...) em cada elemento
// evento precisa capturar o elemento com a classe selected
// remover classe selected do elemento
// adicionar classe selected ao elemento selecionado.
let selecionaCor = document.querySelector('color');

function capturaClasseColor() {
    for (let indice = 0; indice < selecionaCor.length ; indice += 1) {
        selecionaCor[indice].addEventListener('click', seleciona);
    }
};

function seleciona(event) {
    let selecionado = document.querySelector('selected');
    selecionado.classList.remove('selected');
    event.target.classList.add('selected');
};


//8.. capturar todos os pixels "brancos"
// for na lista que retornar e adicionar um evento de clique para cada pixel
// o evento de clique tem q pegar o elemento com a classe selected e descobrir a cor dele
// adicionar essa cor como bg-color do pixel
// funciona como o requisito 7 - ppega lista de elementos e faz for na lista
// pegar elemento com a cor selecionada e a cor e atribuir para o pixel
// atraves do evento (addEvent...)