console.log('Conectado');

const colorClass = document.getElementsByClassName('color');
for (let index = 0; index < colorClass.length; index += 1) {
  colorClass[index].addEventListener('click', function (event) {
    for (let index2 = 0; index2 < colorClass.length; index2 += 1) {
      if (colorClass[index2].classList.contains('selected')) {
        colorClass[index2].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
};

const pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function (event) {
    let selected = document.querySelector('.selected');
    let selectedColor = window.getComputedStyle(selected).backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  });
};

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  };
});
