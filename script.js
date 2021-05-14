const colorPalette = document.querySelector('#color-palette');
const colors = ['black selected', 'red', 'green', 'blue'];

let ident = '';

for (let index = 0; index < colors.length; index += 1) {
  const div = document.createElement('div');  
  div.className = 'color ' + colors[index];
  div.id = index + 30;
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

const button = document.getElementById('clear-board');

button.addEventListener('click', () => {  
  for (let index = 0; index < 25; index += 1) {
    document.getElementById(index + 1).style.backgroundColor = "#fff";
  }
});

// Algoritmo do colega Caio Takeshi.
let paleta = document.getElementsByClassName('color');
for (let index = 0; index < paleta.length; index += 1) {
  paleta[index].addEventListener('click', function(event) {
    let removeSelection = document.querySelector('.selected');
    removeSelection.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

let pixel = document.getElementsByClassName('pixel');

for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function(event) {  
        let div = document.getElementById(index + 1);        
        //let color = document.getElementById(32);        
        
        div.style.backgroundColor = color.style.backgroundColor;//'red';//document.querySelector('.selected').backgroundColor;
    //event.target.style.backgroundColor = selectedColor;
  });
}
