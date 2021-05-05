let colorblack = document.getElementByClassName('.color');
colorblack.classlist.add(‘selected’);

window.onload = function BlackColor() {
  let colorblack = document.querySelectorAll(".color")[0];
  for (let index = 0; index < colorblack.length; index+=1 ) { 
  colorblack[index].classList.remove('selected');
  }
  colorblack.classList.add("selected");
  }
  BlackColor();
