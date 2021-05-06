//cria as divs da paleta
function paleta() {
  let palette = document.createElement('section');
  palette.id = 'color-palette';
  document.body.appendChild(palette);
  for (let i = 0; i < 4; i++) {
    let color = document.createElement('div');
    color.className = 'color';
    palette.appendChild(color);
  }
}
paleta();
//atribui cor randomica para paleta
function corPaleta() {
  let cores = document.getElementsByClassName('color');
  let options = '0123456789abcdef';
  for (let i = 0; i < cores.length; i++) {
    let cor = '#';
    if (i === 0) {
      cores[i].style.backgroundColor = 'black';
    } else {
      for (let c = 0; c < 6; c++) {
        cor += options[Math.floor(Math.random() * 16)];
      }
      cores[i].style.backgroundColor = cor;
    }
  }
}
corPaleta();

//cria a tabela
function tabela() {
  let table = document.createElement('table');
  table.id = 'pixel-board';
  let body = document.body;
  for (let i = 0; i < 5; i++) {
    let linha = document.createElement('tr');
    for (let c = 0; c < 5; c++) {
      let coluna = document.createElement('td');
      coluna.className = 'pixel';
      linha.appendChild(coluna);
    }
    table.appendChild(linha);
  }
  body.appendChild(table);
}
tabela();
//coloca a classe selected na cor preta
window.onload = function() {
  let black = document.querySelector('.color');
  black.classList.add('selected');
}
//muda a classe selected para a cor que foi clicada
function selectedColor() {
  let colorSelected = document.querySelectorAll('.color');
  for (let i = 0; i < colorSelected.length; i++) {
    colorSelected[i].addEventListener('click', function(event) {
      let corSelecionada = document.querySelector('.selected');
      corSelecionada.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
selectedColor();
//cê pinta com meu pinto
function pintar() {
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('click', function(event) {
      let cor = document.querySelector('.selected').style.backgroundColor;
      if (cor === pixels[i].style.backgroundColor) {
        pixels[i].style.backgroundColor = 'white';
      } else {
      pixels[i].style.backgroundColor = cor;
      }
    });
  }
}
pintar();
