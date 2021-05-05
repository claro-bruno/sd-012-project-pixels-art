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
