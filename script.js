function pallet(palletNumber) {
  let allPixels = palletNumber * palletNumber;
  for (indice1 = 0; indice1 < allPixels; indice1 += 1) {
    let bornPixel = document.createElement("div");
    pixBoard.appendChild(bornPixel);
    pixBoard.children[indice1].className = "pixel";
  }
}
let pixBoard = document.getElementById("pixel-board");
pallet(5);

function selection(event) {
  for (let indice = 0; indice < colorSelection.length; indice += 1) {
    colorSelection[indice].classList.remove('selected');
  }
  event.target.classList.add('selected');
};

let colorSelection = document.getElementsByClassName("color");
let memberSelected = document.getElementsByClassName("selected");
colorSelection.addEventListener("click", selection);

function changeColor(event){
 event.target.style.color == memberSelected[0].style.color;
};

pixBoard.addEventListenner("click", changeColor);
