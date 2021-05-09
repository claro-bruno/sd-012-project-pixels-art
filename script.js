window.onload = function(){

const colorPalette = document.querySelector('#color-palette');
const getPixel = document.querySelectorAll('.pixel')
const xButton = document.querySelector('#button')
let getColor = 'black';
let newColor = 'white';

colorPalette.addEventListener('click', eventColor => {
  
  if (eventColor.target.className === 'color') {
    const selectedColor = document.querySelector('.selected')
    selectedColor.classList.remove('selected')
    eventColor.target.classList.add('selected')
    getColor = eventColor.target.style.backgroundColor
  }
})


for(index = 0; index < getPixel.length; index += 1){
  getPixel[index].addEventListener('click', eventPixel => {
    eventPixel.target.style.backgroundColor = getColor
     
   }) 
}
}

