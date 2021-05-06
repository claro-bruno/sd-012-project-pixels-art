// let getIdPalette = document.querySelector('#color-palette'); //retorna o elemento com o id color-palette
let divPai = document.querySelector('#color-palette');
let colorPalette = ['preto', 'vermelho', 'azul', 'amarelo']; //cores de referência para o laço for

for (let index = 0; index < colorPalette.length; index += 1) {
  let liFilha = document.createElement('li');
  liFilha.className = 'color';
  if (colorPalette[index] === 'preto') {
    liFilha.style.backgroundColor = 'black';
  }
  if (colorPalette[index] === 'vermelho') {
    liFilha.style.backgroundColor = 'red';
  }
  if (colorPalette[index] === 'azul') {
    liFilha.style.backgroundColor = 'blue';
  }
  if (colorPalette[index] === 'amarelo') {
    liFilha.style.backgroundColor = 'yellow';
  }
  divPai.appendChild(liFilha);
}

// requisito 2


// function listPalette (array) {
//   let colorPalette = ['preto', 'vermelho', 'azul', 'amarelo']; //cores de referência para o laço for
//   let ulPai = document.createElement('ul'); //cria elemento pai 'ul'

//   for (let key = 0; key < colorPalette.length; key += 1) { //percorra os valores
//     let liMake = document.createElement('li'); //cria elemento 'li' para esta variável
//     liMake.className = 'color'; //atribui uma classe 'color' ao elemento 'li'
//     let getLi = document.getElementsByTagName('li'); //chama(pega) o elemento criado
//     if (colorPalette[key] === 'preto') {
//         getLi.style.backgroundColor = 'black';
//     } else if (colorPalette[key] === 'vermelho') {
//         getLi.style.backgroundColor = 'red';
//     } else if (colorPalette[key] === 'azul') {
//         getLi.style.backgroundColor = 'blue';
//     } else if (colorPalette[key] === 'amarelo') {
//         getLi.style.backgroundColor = 'yellow';
//     }
//     ulPai.appendChild(liMake); //li filha de ul
//   }
//   getIdPalette.appendChild(ulPai);
// }
// console.log(listPalette);


