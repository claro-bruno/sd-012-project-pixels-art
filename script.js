function pallet(palletNumber) {
  let pixBoard = document.getElementById("pixel-board");
  let allPixels = palletNumber * palletNumber;
  for (indice0 = 0; indice0 < allPixels; indice0 += 1) {
    let bornPixel = document.createElement("div");
    pixBoard.appendChild(bornPixel);
    pixBoard.children[indice0].className = "pixel";
  }
}
pallet(5);

function selection(event) {
  for (let indice1 = 0; indice1 < colorSelection.length; indice1 += 1) {
    colorSelection[indice1].classList.remove('selected');
  }
  event.target.classList.add('selected');
};

let colorSelection = document.getElementsByClassName("color");
let memberSelected = document.getElementsByClassName("selected");
for (let indice2 = 0; indice2 < colorSelection.length; indice2 += 1) {
  colorSelection[indice2].addEventListener("click", selection);
}

function changeColor(event){
  event.target.style.backgroundColor = memberSelected[0].style.backgroundColor;
};

let membersPix = document.getElementsByClassName("pixel");
for (let indice3 = 0; indice3 < membersPix.length; indice3 += 1) {
  membersPix[indice3].addEventListener("click", changeColor);
}

function colorCube() {
  let color = ['black', 'blue', 'yellow', 'red'];
  for (let indice4 = 0; indice4 < colorSelection.length; indice4 += 1) {
    colorSelection[indice4].style.backgroundColor = color[indice4];
  }
};
 colorCube();