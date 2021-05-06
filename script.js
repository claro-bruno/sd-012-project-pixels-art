function coresPaleta(array) {
  const paletas = document.getElementsByClassName('color');
  paletas[0].style.backgroundColor = 'black';
  paletas[0].classList.add('selected');
  for (let index = 1; index < paletas.length; index += 1) {
    paletas[index].style.backgroundColor = array[index - 1];
  }
}
const paletaCores = ['blue', 'green', 'yellow'];
coresPaleta(paletaCores);

let numberOfLines = 5;
function createLines (numberOfLines) {
  let linesContainer = document.querySelector('#pixel-board');
  for (let index = 0; index < numberOfLines; index += 1) {
    let line = document.createElement('div');
    line.classList.add('line');
    linesContainer.appendChild(line);
  }
}
createLines(numberOfLines);

function createBox(className) {
  let box = document.createElement('div');
  box.classList.add(className);
  box.style.backgroundColor = 'white';
  return box;
}

function fillLines() {
  let boxContainer = document.getElementsByClassName('line');
  for (let index = 0; index < boxContainer.length; index += 1) {
    for (let index2 = 0; index2 < numberOfLines; index2 += 1) {
      let box = createBox('pixel')
      boxContainer[index].appendChild(box);
    }
  }
}
fillLines();

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
  console.log(selectedPaleta);
  let paletaColor = selectedPaleta.style.backgroundColor;
  console.log(paletaColor);
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
}
createCleanButton('clear-board');

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
