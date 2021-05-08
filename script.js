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
