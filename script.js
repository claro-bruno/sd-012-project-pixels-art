const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const divQuatro = document.getElementById('divQuatro');

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
}

divUm.addEventListener('click', setSelectedClass);
divDois.addEventListener('click', setSelectedClass);
divTres.addEventListener('click', setSelectedClass);
divQuatro.addEventListener('click', setSelectedClass);