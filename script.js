window.onload = function () {
  let section1 = document.createElement('section');
  section1.id = 'color-palette';

  let text = document.createElement('h3');
  text.innerHTML = 'Insira a quantidade de linhas x colunas desejadas';

  let input = document.createElement('input');
  input.id = 'board-size';

  let btn2 = document.createElement('button');
  btn2.id = 'generate-board';
  btn2.innerHTML = 'VQV';

  let btn = document.createElement('button');
  btn.id = 'clear-board';
  btn.innerHTML = 'Limpar';

  let section2 = document.createElement('section');
  section2.id = 'pixel-board';

  let main = document.querySelector('main');
  main.appendChild(section1);
  main.appendChild(text);
  main.appendChild(input);
  main.appendChild(btn2);
  main.appendChild(btn);
  main.appendChild(section2);
  

  let color_palette = document.querySelector('#color-palette');
  let pixel_board = document.querySelector('#pixel-board');

  let buttonVQV = document.querySelector('#generate-board');
  let amount = document.querySelector('#board-size').value;

  buttonVQV.addEventListener('click', verifiTam(amount));

  function verifiTam (num) {
    if (num < 5) {
        num = 5
    }
    else if (num > 50) {
        num = 50;
    }
    tamanho(num);
  }

  function makeColor (quantity) {
    for(let index = 0; index < quantity; index += 1) {
      let color = document.createElement('div');
      color.className = 'color';
      defineColors(index, color);
      color_palette.appendChild(color);
    };
  }
  makeColor(4); // quantidades de cores geradas

  function defineColors (index, color) {
    if (index !== 0) {
      color.style.backgroundColor = colorGeneration();
    }
    else {
      color.style.backgroundColor = 'black';
    };
  }
  
  function colorGeneration () {
    return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
  }


  function makeDivs () {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    return pixel;
  }

  function makeColum (tam) {
    let ln = document.querySelectorAll('.line');
    for ( let index = 0; index < ln.length; index += 1) {
       aux(index, tam, ln);
    }
  }

  function aux (num1, num2, num3) {
    if (num1 < num2) {
        for (let index = 0; index < num3.length; index += 1) {
          num3[index].appendChild(makeDivs());
        }
    }
  }

  function pixelLine (){
    let lines = document.createElement('div');
    lines.className = 'line';
    return lines;
  }

  function makeLine (tam) {
    for (let index = 0; index < tam; index += 1) {
        pixel_board.appendChild(pixelLine());
    }
  }

  function tamanho (size) {
      makeLine(size)
      makeColum(size)
  }

  function selecAux (param1) {
    let rem = document.querySelector('.selected');
    rem.classList.remove('selected');
    param1.target.className = 'color selected';
  }

  function selec () {
    for (let index = 0; index < colors.length; index += 1) {
        colors[index].addEventListener('click', selecAux);
    }
  }

  let colors = document.querySelectorAll('.color');
  colors[0].className = 'color selected';
  selec()

  function getColor () {
    let pixels = document.querySelectorAll('.pixel')
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].addEventListener('click', inputColor);
    }
  }
  getColor()

  function inputColor (param1) {
    let cor = document.querySelector('.selected').style.backgroundColor;
    param1.target.style.backgroundColor = cor;
  }

  let button = document.querySelector('#clear-board');
  button.addEventListener('click', function () {
    let pixels = document.querySelectorAll('.pixel');
    for(let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  }); 

}