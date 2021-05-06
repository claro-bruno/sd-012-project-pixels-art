const black = document.querySelector('#black');
const red = document.querySelector('#red');
const silver = document.querySelector('#silver');
const golden = document.querySelector('#golden');

function addSelected(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', addSelected);
red.addEventListener('click', addSelected);
silver.addEventListener('click', addSelected);
golden.addEventListener('click', addSelected);
