const colorPalette = document.querySelector('#color-palette');


colorPalette.addEventListener('click', eventColor => {
  
  if (eventColor.target.className === 'color') {
    const selectedColor = document.querySelector('.selected')
    selectedColor.classList.remove('selected')
    eventColor.target.classList.add('selected')
  }
})



