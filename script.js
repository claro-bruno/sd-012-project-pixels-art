function pallet(palletNumber) {
  let pixBoard = document.getElementById("pixel-board");
  let allPixels = palletNumber * palletNumber;
  for (indice1 = 0; indice1 < allPixels; indice1 += 1) {
    let bornPixel = document.createElement("div");
    pixBoard.appendChild(bornPixel);
    pixBoard.children[indice1].className = "pixel";
  }
}
pallet(5);

function selection(event) {
  for (let indice = 0; indice < colorSelection.length; indice += 1) {
    colorSelection[indice].classList.remove('selected');
  }
  event.target.classList.add('selected');
};

let colorSelection = document.getElementById("color-palette");
let memberSelected = document.getElementsByClassName("selected");
colorSelection.addEventListener("click", selection);

function changeColor(event){
 event.target.value == memberSelected[0];
};

pixBoard.addEventListenner("click", changeColor);
