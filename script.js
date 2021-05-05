function handleSelect(event) {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
  
  const divColor = document.getElementsByClassName('color');
  for (let div of divColor ){
    div.addEventListener('click', handleSelect);
  }
  
  
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
        let SelectedColor = getColor[0].style.backgroundColor;
    
    selectPixel = addEventListener('click', (e) => {
          e.target.style.backgroundColor = getColor[0].style.backgroundColor;
      });
      
    }
    changePixelColor();