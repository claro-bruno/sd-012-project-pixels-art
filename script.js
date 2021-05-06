window.onload = function () {

  function criarPalheta(numeroDeCores) {
    const pegarPaleta = document.getElementById('color-palette');
    for (let i = 0; i < numeroDeCores; i += 1) {
      const div = document.createElement('div');
      if (i === 0) {
        div.className = 'color selected';
        //div.style.transition = 'transform .2s';
        //div.style.transform = 'scale(1.2)';
        div.style.backgroundColor = 'black';
      } else {
        div.className = 'color';
        div.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      }
      pegarPaleta.appendChild(div);
    }
  }

  criarPalheta(4);

  function criarPixelBoard(base) {
    const pegarPixelBoard = document.getElementById('pixel-board');
    pegarPixelBoard.innerHTML = '';
    pegarPixelBoard.style.width = `${base * 79}px`;
    const totalPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < base*base; index += 1) {
      const div = document.createElement('div');
      div.className = 'pixel';
      pegarPixelBoard.appendChild(div);
    }
  }

  criarPixelBoard(5);

  function selecionarCores() {
    const coresPaleta = document.querySelectorAll('.color');
    let indexSelecionado = 0;
    for (let i = 0; i < coresPaleta.length; i += 1) {
      let cor = coresPaleta[i];
      cor.addEventListener('click', function (event) {

        if (event.target.className === 'color') {
          resetSelect();
          pintalPixel(event.target.style.backgroundColor);
          event.target.className = 'color selected';
          //event.target.style.transition = 'transform .2s';
          //event.target.style.transform = 'scale(1.2)';
        } 
      })
    }
  }

  function resetSelect() {
    const cores = document.querySelectorAll('.color');
    for (let i = 0; i < cores.length; i += 1) {
      cores[i].className = 'color';
      //cores[i].style.transform = 'scale(1.0)';
    }
  }

  selecionarCores();

  function pintalPixel(color) {
    const pixel = document.getElementById('pixel-board');
    pixel.addEventListener('click', function (event) {
      if (event.target.className === 'pixel') event.target.style.backgroundColor = color;
    })
  }

  pintalPixel('black');

  function botaoLimpar() {
    const botao = document.getElementById('clear-board');
    botao.addEventListener('click', function () {
      const pixels = document.querySelectorAll('.pixel');
      for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = 'white';
      }
    })
  }

  botaoLimpar();

  function VQV() {
    const vqvButton = document.getElementById('generate-board');
    vqvButton.addEventListener('click', function () {
      const input = document.getElementById('board-size');

      if (!input.value.length) {
        window.alert('Board inválido!');
        input.value = 5;
      }
      if (input.value < 5) {
        input.value = 5;
      }
      if (input.value > 50) {
        input.value = 50;
      }
      criarPixelBoard(input.value);
    })
  }

  VQV();

  /*function gerarCoresBotao() {
    const pegarBotaoCores = document.getElementById('generate-colors');
    pegarBotaoCores.addEventListener('click', function (event) {
      const coresAtuais = document.querySelectorAll('.color')
      for (let i = 0; i < coresAtuais.length; i += 1) {
        if (i !== 0) coresAtuais[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      }
    })
  }

  gerarCoresBotao();*/
}