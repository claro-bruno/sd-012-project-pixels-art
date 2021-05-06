let colors = document.querySelectorAll('.color');
    let colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', (event) => {
      for (let index = 0; index < colors.length; index += 1) {
        if (colors[index].classList.contains('color')) {
          colors[index].classList.remove('selected');
          (event.target.classList.contains('color'));
          event.target.classList.add('selected');
        }
      }
    });


    let pixelBoard = document.getElementById('pixel-board');
    // a referencia de como usar window.getComputedStyle().getPropertyValue() para colorir background eu peguei em http://www.permadi.com/tutorial/cssGettingBackgroundColor/index.html
    pixelBoard.addEventListener('click', (event) => {
      let changeColor = document.querySelector('.selected');
      let backgroundColor = window.getComputedStyle(changeColor).getPropertyValue('background');
      if (event.target.classList.contains('pixel')) {
         return event.target.style.background = backgroundColor;
      }
    });



let pixels = document.getElementsByClassName('pixel');
let clear = document.getElementById('clear-board');
clear.addEventListener('click', function () {
     for (let index = 0; index < pixels.length; index += 1){
         pixels[index].style.backgroundColor = '#ffffff';
        
}
    });
    

    
    
    