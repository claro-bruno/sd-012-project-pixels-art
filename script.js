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

//   function setBlackPixelInitial() {
//     let blackPixelInitial = document.querySelectorAll('.pixel')
//     //seleciona pixel e pinta de preto
//     for (let index = 0; index < blackPixelInitial.length; index += 1) {
//       blackPixelInitial[index].addEventListener('click', function() {
//         console.log('woooooww');
//         let blackPixel = blackPixelInitial[index]
//         blackPixel.style.backgroundColor = 'black';
//       });
//     }
//     setBlackPixelInitial();


  function setBlackColor() {
    let selectedBlackColor = document.querySelector('.black');
    selectedBlackColor.addEventListener('click', function(){
      let selectedPixel = document.querySelectorAll('.pixel')
      for (let index = 0; index < selectedPixel.length; index += 1) {
        selectedPixel[index].addEventListener('click', function() {
        let blackPixel = selectedPixel[index]
        blackPixel.style.backgroundColor = 'black';
        });
      }
    });
  }
  setBlackColor();

  function setRedColor() {
    let selectedRedColor = document.querySelector('.red');
    selectedRedColor.addEventListener('click', function(){
      let selectedPixel = document.querySelectorAll('.pixel')
      for (let index = 0; index < selectedPixel.length; index += 1) {
        selectedPixel[index].addEventListener('click', function() {
        let redPixel = selectedPixel[index]
        redPixel.style.backgroundColor = 'red';
        });
      }
    });
  }
  setRedColor();

  function setBlueColor() {
    let selectedBlueColor = document.querySelector('.blue');
    selectedBlueColor.addEventListener('click', function(){
      let selectedPixel = document.querySelectorAll('.pixel')
      for (let index = 0; index < selectedPixel.length; index += 1) {
        selectedPixel[index].addEventListener('click', function() {
        let bluePixel = selectedPixel[index]
        bluePixel.style.backgroundColor = 'blue';
        });
      }
    });
  }
  setBlueColor();

  function setGreenColor() {
    let selectedGreenColor = document.querySelector('.green');
    selectedGreenColor.addEventListener('click', function(){
      let selectedPixel = document.querySelectorAll('.pixel')
      for (let index = 0; index < selectedPixel.length; index += 1) {
        selectedPixel[index].addEventListener('click', function() {
        let greenPixel = selectedPixel[index]
        greenPixel.style.backgroundColor = 'green';
        });
      }
    });
  }
  setGreenColor();
};




