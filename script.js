window.onload = function BlackColor() {
  let colorblack = document.getElementsByClassName(".color");
  for (let index = 0; index < colorblack.length; index+=1 ) { 
  colorblack[index].classList.remove('selected');
  }
  colorblack.classList.add("selected");
  }
  BlackColor();

  //exercicio 9 
  function clearBoard() {
    let pixels = document.querySelectorAll('.pixel');
    for (let key of pixels) {
      //key.document.style.background = 'white';
    }
  }

  function Clear() {
    let Button = document.getElementById('clear-board');
    Button.addEventListener('click',clearBoard)
  }