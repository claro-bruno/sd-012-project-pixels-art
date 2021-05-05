window.onload = function () {
  function selectedColorInitial() {
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
  selectedColorInitial();

  
};