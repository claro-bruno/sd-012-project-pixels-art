function coresPaleta() {
  const paletas = document.getElementsByClassName('color');
  paletas[0].style.backgroundColor = 'black';
  paletas[0].classList.add('selected');
  for (let index = 1; index < paletas.length; index += 1) {
    let randomColor = [];
    for (let index = 0; index <= 2; index += 1) {
      randomColor.push(Math.round(Math.random()*255));
    }
    paletas[index].style.backgroundColor = `rgb(${randomColor})`;
  }
}
coresPaleta();

let linesContainer = document.getElementById('pixel-board');

function createLines (numbLines, sizeControl) {
  for (let index = 0; index < numbLines; index += 1) {
    let line = document.createElement('div');
    line.classList.add('line');
    line.style.width = sizeControl + 'px';
    linesContainer.appendChild(line);
  }
  fillLines();
}
createLines(5);

function createBox(className) {
  let box = document.createElement('div');
  box.classList.add(className);
  box.style.backgroundColor = 'white';
  return box;
}

function fillLines() {
  let boxContainer = document.getElementsByClassName('line');
  for (let index = 0; index < boxContainer.length; index += 1) {
    for (let index2 = 0; index2 < boxContainer.length; index2 += 1) {
      let box = createBox('pixel')
      boxContainer[index].appendChild(box);
    }
  }
}

function setSelectedClass(event) {
  const paleta = document.querySelector('.selected');
  paleta.classList.remove('selected');
  event.target.classList.add('selected');
  setPixelColor();
}
const paletas = document.getElementsByClassName('color');
for (let index = 0; index < paletas.length; index += 1) {
paletas[index].addEventListener('click', setSelectedClass);
}

function setPixelColor() {
  let selectedPaleta = document.querySelector('.selected');
  let paletaColor = selectedPaleta.style.backgroundColor;
  let pixels = document.getElementsByClassName('pixel');
   
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].addEventListener('click', function(event) {
      let eventTargetColor = event.target.style.backgroundColor;
      if (eventTargetColor !== paletaColor) {
        event.target.style.backgroundColor = paletaColor;
      }
    })
  }
}
setPixelColor();

function createCleanButton(buttonName) {
  let buttonContainer = document.querySelector('#buttonContainer');
  let newButton = document.createElement('button');
  let newButtonID = buttonName;

  newButton.innerHTML = 'Limpar';
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
  return newButton;
}
let botaoLimpa = createCleanButton('clear-board');

function cleanBoard() {
  let getCleanButton = document.querySelector('#clear-board');
  let getPixels = document.getElementsByClassName('pixel');
  let setNewBackground = 'white';

  getCleanButton.addEventListener('click', function() {
    for (let index = 0; index < getPixels.length; index += 1) {
      if (getPixels[index].style.backgroundColor !== setNewBackground) {
        getPixels[index].style.backgroundColor = setNewBackground
      }
    }
  })
}
cleanBoard();




function createLineInput(inputId) {
  let inputContainer = document.querySelector('#buttonContainer');
  let newInput = document.createElement('input');
  let newInputID = inputId;
  newInput.id = newInputID;
  newInput.type = 'number';
  newInput.min = 1;
  newInput.max = 50;
  botaoLimpa.insertAdjacentElement("afterend", newInput);
  return newInput;
}

function createLineButton(buttonId) {
  let buttonContainer = document.querySelector('#buttonContainer');
  let newButton = document.createElement('button');
  let newButtonID = buttonId;

  newButton.innerHTML = 'VQV';
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}
createLineButton('generate-board');

let inputSize = createLineInput('board-size');

let click = document.getElementById('generate-board')
click.addEventListener('click', function() {
  let inputValue = inputSize.value;
  if (inputValue === '') {
    alert('Board inválido!');
  } else if (inputValue < 5) {
    inputValue = 5;
  } else if (inputValue > 50) {
    inputValue = 50;
  }
  let controlLine = inputValue * 40 + 100;
  linesContainer.innerHTML = '';
  createLines(inputValue, controlLine);
})
