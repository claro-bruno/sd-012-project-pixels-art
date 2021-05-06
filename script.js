window.onload = function () {
  let color_palette = document.querySelector('#color-palette');
  let pixel_board = document.querySelector('#pixel-board');


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
  verifiTam (5) // tamanho do board de pixel

  function verifiTam (num) {
    if (num < 5) {
        num = 5
    }
    else if (num > 50) {
        num = 50;
    }
    tamanho(num);
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

  let btn = document.querySelector('#clear-board');
  btn.addEventListener('click', function () {
    let pixels = document.querySelectorAll('.pixel');
    for(let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });

}