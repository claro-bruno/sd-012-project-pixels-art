window.onload = function () {
  function selectColorInitial() {
    let selectedBlackColor = document.querySelector('.black');
    let selectedRedColor = document.querySelector('.red');
    let selectedBlueColor = document.querySelector('.blue');
    let selectedGreenColor = document.querySelector('.green');

    // ao iniciar a pagina, o black é selected
    selectedBlackColor.className += ' selected';

    //seleciona black
    selectedBlackColor.addEventListener('click', function (){
      selectedBlackColor.className += ' selected';
      selectedRedColor.classList.remove('selected');
      selectedBlueColor.classList.remove('selected');
      selectedGreenColor.classList.remove('selected');
    });

    //seleciona red
    selectedRedColor.addEventListener('click', function (){
      selectedRedColor.className += ' selected';
      selectedBlackColor.classList.remove('selected');
      selectedBlueColor.classList.remove('selected');
      selectedGreenColor.classList.remove('selected');
    });

    //seleciona blue
    selectedBlueColor.addEventListener('click', function (){
      selectedBlueColor.className += ' selected';
      selectedBlackColor.classList.remove('selected');
      selectedRedColor.classList.remove('selected');
      selectedGreenColor.classList.remove('selected');
    });

    //seleciona green
    selectedGreenColor.addEventListener('click', function (){
      selectedGreenColor.className += ' selected';
      selectedBlackColor.classList.remove('selected');
      selectedRedColor.classList.remove('selected');
      selectedBlueColor.classList.remove('selected');
    });
  }
  selectColorInitial();
 
//Cria board no JS
  // function createPixelBoard(){
  //   let board = document.querySelector('#pixel-board')
  //   for (let line = 1; line <= 5; line += 1){
  //     let pixelLine = document.createElement('tr');
  //     for (let column = 1; column <= 5; column += 1){
  //       let pixelColumn = document.createElement('td');
  //       pixelColumn.className = 'pixel';
  //       pixelLine.appendChild(pixelColumn);
  //     }
  //     board.appendChild(pixelLine);
  //   };
  // }
  // createPixelBoard();

  function createPixelBoard(size){
    let board = document.querySelector('#pixel-board')
    for (let line = 1; line <= size; line += 1){
      let pixelLine = document.createElement('tr');
      for (let column = 1; column <= size; column += 1){
        let pixelColumn = document.createElement('td');
        pixelColumn.className = 'pixel';
        pixelLine.appendChild(pixelColumn);
      }
      board.appendChild(pixelLine);
    };
  }
  createPixelBoard(5);


//Pinta os pixels iniciais de preto
  function setBlackPixelInitial() {
    let selectedPixel = document.querySelectorAll('.pixel')
      for (let index = 0; index < selectedPixel.length; index += 1) {
      selectedPixel[index].addEventListener('click', function() {
      let pixel = selectedPixel[index].style.backgroundColor = 'black';
      });
    }
  }
  setBlackPixelInitial();

//Pinta board com table do JS
  function setPixel() {
    let selectedBlackColor = document.querySelector('.black')
    let selectedRedColor = document.querySelector('.red')
    let selectedBlueColor = document.querySelector('.blue')
    let selectedGreenColor = document.querySelector('.green')

    selectedBlackColor.addEventListener('click', selectBlack)
    selectedRedColor.addEventListener('click', selectRed)
    selectedBlueColor.addEventListener('click', selectBlue)
    selectedGreenColor.addEventListener('click', selectGreen)

    function selectBlack(){
      let selectedPixel = document.querySelectorAll('.pixel')
      for (let index = 0; index < selectedPixel.length; index += 1) {
        selectedPixel[index].addEventListener('click', function() {
        let pixel = selectedPixel[index].style.backgroundColor = 'black';
        });
      }
    }

    function selectRed(){
      let selectedPixel = document.querySelectorAll('.pixel')
      for (let index = 0; index < selectedPixel.length; index += 1) {
        selectedPixel[index].addEventListener('click', function() {
        let pixel = selectedPixel[index].style.backgroundColor = 'red';
        });
      }
    }

    function selectBlue(){
      let selectedPixel = document.querySelectorAll('.pixel')
      for (let index = 0; index < selectedPixel.length; index += 1) {
        selectedPixel[index].addEventListener('click', function() {
        let pixel = selectedPixel[index].style.backgroundColor = 'blue';
        });
      }
    }

    function selectGreen(){
      let selectedPixel = document.querySelectorAll('.pixel')
      for (let index = 0; index < selectedPixel.length; index += 1) {
        selectedPixel[index].addEventListener('click', function() {
        let pixel = selectedPixel[index].style.backgroundColor = 'green';
        });
      }
    }
  }
setPixel();

  function clearBoard(){
    let buttonClear = document.querySelector('#clear-board');
    buttonClear.addEventListener('click', function(){
      let allPixels = document.querySelectorAll('.pixel')
      for (let index = 0; index < allPixels.length; index += 1) {
        console.log('woooooo')
        allPixels[index].style.backgroundColor = 'white';
      }
    });
  }
  clearBoard();


  function removeBoard() {
    let board = document.querySelector('#pixel-board');
    board.remove('.pixel')
  }

  function changeBoard() {
    let input = document.querySelector('#board-size').value;
    if (input === '') {
      alert('Board inválido!');
    } else if (input < 5) {
      removeBoard();
      createPixelBoard(5);
    } else if (input > 50) {
      removeBoard();
      createPixelBoard(50);
    } else {
      removeBoard();
      createPixelBoard(input);
    }
  }

  function addEventChangeBoard() {
    let changeButton = document.querySelector('#generate-board');
    changeButton.addEventListener('click', changeBoard);
  }
  addEventChangeBoard();
  
};
