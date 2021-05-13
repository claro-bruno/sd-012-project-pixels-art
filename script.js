window.onload = function () {
  makeColorsSelector();
  selectColorInitial();
  createPixelBoard();
  clearBoard();
  addEventChangeBoard();

  function makeColorsSelector() {
    let colorPalette = document.querySelector('#color-palette');
    for (let index = 0; index < 4; index += 1) {
      let quadrado = document.createElement('td');
      quadrado.className = 'color';
      if (index === 0) {
        quadrado.style.backgroundColor = '#000000';
        quadrado.className += ' selected';
      } else {
        quadrado.style.backgroundColor = getRandomColor();
      }
      colorPalette.appendChild(quadrado);
    }
  }

  function selectColorInitial() {
    let selectedFirstColor = document.querySelectorAll('.color')[0];
    let selectedSecondColor = document.querySelectorAll('.color')[1];
    let selectedThirdColor = document.querySelectorAll('.color')[2];
    let selectedFourthColor = document.querySelectorAll('.color')[3];

    //seleciona black
    selectedFirstColor.addEventListener('click', function () {
      selectedFirstColor.className += ' selected';
      selectedSecondColor.classList.remove('selected');
      selectedThirdColor.classList.remove('selected');
      selectedFourthColor.classList.remove('selected');
    });

    //seleciona red
    selectedSecondColor.addEventListener('click', function () {
      selectedSecondColor.className += ' selected';
      selectedFirstColor.classList.remove('selected');
      selectedThirdColor.classList.remove('selected');
      selectedFourthColor.classList.remove('selected');
    });

    //seleciona blue
    selectedThirdColor.addEventListener('click', function () {
      selectedThirdColor.className += ' selected';
      selectedFirstColor.classList.remove('selected');
      selectedSecondColor.classList.remove('selected');
      selectedFourthColor.classList.remove('selected');
    });

    //seleciona green
    selectedFourthColor.addEventListener('click', function () {
      selectedFourthColor.className += ' selected';
      selectedFirstColor.classList.remove('selected');
      selectedSecondColor.classList.remove('selected');
      selectedThirdColor.classList.remove('selected');
    });
  }

  // function selectColorInitial() {
  //   let selectedBlackColor = document.querySelector('.black');
  //   let selectedRedColor = document.querySelector('.red');
  //   let selectedBlueColor = document.querySelector('.blue');
  //   let selectedGreenColor = document.querySelector('.green');

  //   // ao iniciar a pagina, o black é selected
  //   selectedBlackColor.className += ' selected';

  //   //seleciona black
  //   selectedBlackColor.addEventListener('click', function (){
  //     selectedBlackColor.className += ' selected';
  //     selectedRedColor.classList.remove('selected');
  //     selectedBlueColor.classList.remove('selected');
  //     selectedGreenColor.classList.remove('selected');
  //   });

  //   //seleciona red
  //   selectedRedColor.addEventListener('click', function (){
  //     selectedRedColor.className += ' selected';
  //     selectedBlackColor.classList.remove('selected');
  //     selectedBlueColor.classList.remove('selected');
  //     selectedGreenColor.classList.remove('selected');
  //   });

  //   //seleciona blue
  //   selectedBlueColor.addEventListener('click', function (){
  //     selectedBlueColor.className += ' selected';
  //     selectedBlackColor.classList.remove('selected');
  //     selectedRedColor.classList.remove('selected');
  //     selectedGreenColor.classList.remove('selected');
  //   });

  //   //seleciona green
  //   selectedGreenColor.addEventListener('click', function (){
  //     selectedGreenColor.className += ' selected';
  //     selectedBlackColor.classList.remove('selected');
  //     selectedRedColor.classList.remove('selected');
  //     selectedBlueColor.classList.remove('selected');
  //   });
  // }
  // selectColorInitial();

  function createPixelBoard(size = 5) {
    let board = document.querySelector('#pixel-board')
    for (let line = 1; line <= size; line += 1) {
      let pixelLine = document.createElement('tr');
      for (let column = 1; column <= size; column += 1) {
        let pixelColumn = document.createElement('td');
        pixelColumn.className = 'pixel';
        pixelLine.appendChild(pixelColumn);
      }
      board.appendChild(pixelLine);
    };
    setPixel();
  }

  //Pinta os pixels iniciais de preto
  // function setBlackPixelInitial() {
  //   let selectedPixel = document.querySelectorAll('.pixel')
  //     for (let index = 0; index < selectedPixel.length; index += 1) {
  //     selectedPixel[index].addEventListener('click', function() {
  //       selectedPixel[index].style.backgroundColor = 'black';
  //     });
  //   }
  // }
  // setBlackPixelInitial();

  function setPixel() {
    let selectedPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < selectedPixel.length; index += 1) {
      selectedPixel[index].addEventListener('click', function () {
        let selectedElement = document.querySelector('.selected');
        selectedPixel[index].style.backgroundColor = selectedElement.style.backgroundColor;
      });
    }
  }

  //Pinta pixel 
  // function setPixel() {
  //   let selectedBlackColor = document.querySelector('.black')
  //   let selectedRedColor = document.querySelector('.red')
  //   let selectedBlueColor = document.querySelector('.blue')
  //   let selectedGreenColor = document.querySelector('.green')

  //   selectedBlackColor.addEventListener('click', selectBlack)
  //   selectedRedColor.addEventListener('click', selectRed)
  //   selectedBlueColor.addEventListener('click', selectBlue)
  //   selectedGreenColor.addEventListener('click', selectGreen)

  //   function selectBlack(){
  //     let selectedPixel = document.querySelectorAll('.pixel')
  //     for (let index = 0; index < selectedPixel.length; index += 1) {
  //       selectedPixel[index].addEventListener('click', function() {
  //       let pixel = selectedPixel[index].style.backgroundColor = 'black';
  //       });
  //     }
  //   }

  //   function selectRed(){
  //     let selectedPixel = document.querySelectorAll('.pixel')
  //     for (let index = 0; index < selectedPixel.length; index += 1) {
  //       selectedPixel[index].addEventListener('click', function() {
  //       let pixel = selectedPixel[index].style.backgroundColor = 'red';
  //       });
  //     }
  //   }

  //   function selectBlue(){
  //     let selectedPixel = document.querySelectorAll('.pixel')
  //     for (let index = 0; index < selectedPixel.length; index += 1) {
  //       selectedPixel[index].addEventListener('click', function() {
  //       let pixel = selectedPixel[index].style.backgroundColor = 'blue';
  //       });
  //     }
  //   }

  //   function selectGreen(){
  //     let selectedPixel = document.querySelectorAll('.pixel')
  //     for (let index = 0; index < selectedPixel.length; index += 1) {
  //       selectedPixel[index].addEventListener('click', function() {
  //       let pixel = selectedPixel[index].style.backgroundColor = 'green';
  //       });
  //     }
  //   }
  // }
  // setPixel();

  //Limpa Board
  function clearBoard() {
    let buttonClear = document.querySelector('#clear-board');
    buttonClear.addEventListener('click', function () {
      let allPixels = document.querySelectorAll('.pixel')
      for (let index = 0; index < allPixels.length; index += 1) {
        console.log('woooooo')
        allPixels[index].style.backgroundColor = 'white';
      }
    });
  }

  function removeBoard() {
    let board = document.querySelector('#pixel-board')
    board.innerHTML = '';
  }

  function changeBoard() {
    let input = document.querySelector('#board-size').value;
    if (input === '') {
      alert('Board inválido!');
    } else if (input < 5) {
      removeBoard();
      createPixelBoard(5);;
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

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
};
