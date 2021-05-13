const colorPalette = document.querySelector('#color-palette');
const colors = ['black selected', 'red', 'green', 'blue'];

let ident = '';

for (let index = 0; index < colors.length; index += 1) {
  const div = document.createElement('div');  
  div.className = 'color ' + colors[index];
  div.id = index + 1;
  colorPalette.appendChild(div);
}

for (let index = 1; index <= 25; index += 1) {
  const div = document.createElement('div');
  div.className = 'pixel';
  div.id = index;
  if (index > 20) {
    ident = '#secao5';
  } else if (index > 15) {
    ident = '#secao4';
  } else if (index > 10) {
    ident = '#secao3';
  } else if (index > 5) {
    ident = '#secao2';
  } else {
    ident = '#secao1';
  }
  const pixelBoard = document.querySelector(ident);
  pixelBoard.appendChild(div);
}

/*function clearPixel () {    
  let div = document.getElementsByClassName("pixel");
  for (let index = 0; index < 25; index += 1) {
    div[index].style.background = '';
  }  onclick="clearPixel()"
}*/
const button = document.getElementById('clear-board');

button.addEventListener('click', () => {
  const div = document.createElement('div');
  for (let index = 0; index < 25; index += 1) {
    //pixel[index].style.backgroundColor = "white";
    div['#'+ index].sty
  }  
});
