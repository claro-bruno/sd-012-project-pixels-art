window.onload = function(){

  //Exercicio 7
  function handleSelect(event) {
      const colorSelected = document.querySelector('.selected');
      colorSelected.classList.remove('selected');
      event.target.classList.add('selected');
    }
    
    const divColor = document.getElementsByClassName('color');
    for (let div of divColor ){
      div.addEventListener('click', handleSelect);
    }
    
    //Coloca as cores na Paleta
    function paintPaleta() {
      let colors =['black','red','blue','yellow']
      let paleta = document.getElementsByClassName('color');
      for (let i = 0; i < paleta.length; i += 1){
          paleta[i].style.backgroundColor = colors[i];
      }
    }
    paintPaleta();

  //Exercicio 8
    function changePixelColor() {
      let selectPixel = document.querySelector('.pixel');
          let getColor = document.getElementsByClassName('color selected');
      
      selectPixel = addEventListener('click', (e) => {
          if (e.target.classList[0] == 'pixel'){
            e.target.style.backgroundColor = getColor[0].style.backgroundColor;
          }
        });
        
      }

      changePixelColor();

    //Exercicio 9
    function resetPixels() {
      const Pixels = document.querySelectorAll('.pixel');
      const resetColor = 'white';
        for (let i = 0; i < Pixels.length; i += 1){
          Pixels[i].style.backgroundColor = resetColor;
        }
    }

    const cleanButton = document.getElementById('clear-board');
    cleanButton.addEventListener('click', resetPixels);

}