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

    function createRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    //Coloca as cores na Paleta
    function paintPaleta() {
      let paleta = document.getElementsByClassName('color');
      for (let i = 0; i < paleta.length; i += 1){
        if (i === 0){
          paleta[i].style.backgroundColor = 'black';
        } else {
          paleta[i].style.backgroundColor = createRandomColor();
        }
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

    //Exercicio 10

    function createBoard(size) {
      const getTable = document.getElementById('pixel-board');
      for (let i = 0; i < size; i += 1){
        const newTr = document.createElement('tr');
        for (let i2 = 0; i2 < size; i2 += 1){
        newTr.innerHTML += "<td class='pixel'></td>";
        }
        getTable.appendChild(newTr);

      }
    }
    function getBoardSize(){
      const input = document.getElementById('board-size');
      const inputValue = input.value;
      return inputValue;
    }
    function cleanInput(){
      const input = document.getElementById('board-size');
      input.value = '';
    }
    function cleanTable(){
      const table = document.getElementById('pixel-board');
      table.innerHTML = '';
    }
    function setBoardSize(){
      const size = getBoardSize();
      if (size == 0){
        alert("Board inválido!");
        cleanInput();
      } else if (size < 5){
        alert("Entre com um numero entre 5 e 50!");
        cleanInput();
        cleanTable();
        createBoard(5);
      }else if (size > 50){
        alert("Entre com um numero entre 5 e 50!");
        cleanInput();
        cleanTable();
        createBoard(50);
      } else {
        cleanTable();
        createBoard(size);
        cleanInput();
      }
      
    }
    createBoard(5);
    const sizeButton = document.getElementById('generate-board');
    sizeButton.addEventListener('click', setBoardSize);

    const inputSize = document.getElementById('board-size');
    inputSize.addEventListener('keyup', (e) => {
      if(e.key ==='Enter')  setBoardSize();
  });
}