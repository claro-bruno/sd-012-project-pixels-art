function pallet(palletNumber) {
  let pixBoard = document.getElementById("pixel-board");
  for (indice1 = 0; indice1 < palletNumber; indice1 += 1) {
    let bornLine = document.createElement("div");
    pixBoard.appendChild(bornLine);
    pixBoard.children[indice1].className = "linha";
    for (let indice2 = 0; indice2 < palletNumber; indice2 += 1) {
      let bornColumn = document.createElement("div");
      let memberLine = pixBoard.children[indice1];
      memberLine.appendChild(bornColumn);
      pixBoard.children[indice1].children[indice2].className = "pixel";
    }
  }
}
pallet(5);
