function paletasCores(arrayColor) {
  let colorContainer = document.querySelector('#color-palette');
  // let cores = arrayColor;

  for (let index = 0; index < arrayColor.length; index += 1) {
    if (arrayColor[index] === 'black') {
      let colorItem = document.createElement('li');
      colorItem.className = 'color';
      colorItem.style.backgroundColor = 'black';
      colorContainer.appendChild(colorItem);
    } else if (arrayColor[index] === 'red') {
      let colorItem = document.createElement('li');
      colorItem.className = 'color';
      colorItem.style.backgroundColor = 'red';
      colorContainer.appendChild(colorItem);
    } else if (arrayColor[index] === 'purple') {
      let colorItem = document.createElement('li');
      colorItem.className = 'color';
      colorItem.style.backgroundColor = 'purple';
      colorContainer.appendChild(colorItem);
    } else {
      let colorItem = document.createElement('li');
      colorItem.className = 'color';
      colorItem.style.backgroundColor = 'green';
      colorContainer.appendChild(colorItem);
    }
  }
}
console.log(paletasCores(['black', 'red', 'purple', 'green']));

function criandoQuadrado(tamanho) {
  let getPixelContainer = document.querySelector('#pixel-board');

  //Cria as linhas da tabela
  for (let lineIndex = 0; lineIndex < tamanho; lineIndex += 1) {
    let pixelCriado = document.createElement('tr');
    getPixelContainer.appendChild(pixelCriado);
  }

  //Capturando uma LISTA com as linhas da tabela
  let getTrContainer = document.querySelectorAll('tr');
  //Primeira linha => getTrContainer[0];
  //Segunda linha => getTrContainer[1];

  for (let index = 0; index < getTrContainer.length; index += 1) {
    //SEgunda iteração - index=1 - getTrContainer[1] - Segunda linha!
    console.log(getTrContainer[index]);
    for (let colunaIndex = 0; colunaIndex < tamanho; colunaIndex += 1) {
      //Criando o segundo pixel
      let pixelColuna = document.createElement('td');
      pixelColuna.className = 'pixel';
      //Inserindo na primeira linha o primeiro pixel!
      getTrContainer[index].appendChild(pixelColuna);
    }
  }
}

criandoQuadrado(5);

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   inputLine = inputLine + symbol;
// };
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   console.log(inputLine);
// };

// window.onload = function () {
//   let boardSide = 5;
//   let getBoard = document.getElementById('pixel-board');

//   //Chama as funções
//   createTable();

//   //Cria dinamicamente uma linha da tabela com um determinado número de colunas
//   function createTableRow(row) {
//     let tableRow = document.createElement('tr');
//     tableRow.className = 'board-row';
//     getBoard.appendChild(tableRow);
//     let getBoardRow = document.getElementsByClassName('board-row')[row];
//     for (let column = 1; column <= boardSide; column += 1) {
//       const tableColumn = document.createElement('td');
//       tableColumn.className = 'pixel';
//       tableColumn.style.backgroundColor = 'white';
//       getBoardRow.appendChild(tableColumn);
//     }
//   }

//   //Cria dinamicamente um determinado número de linhas da tabela
//   function createTable() {
//     for (let row = 0; row < boardSide; row += 1) {
//       createTableRow(row);
//     }
//   }
// };
