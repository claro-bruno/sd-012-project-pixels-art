let pixBoard = document.getElementById("pixel-board");
for (let indice1 = 0; indice1 < 5; indice1 += 1) {
  for (let indice2 = 0; indice2 < 5; indice2 += 1) {
    let pixUnity = document.createElement("li");
    pixBoard.appendChild(pixUnity);
    let caughtPix = document.getElementById("pixel-board");
    caughtPix.children[indice2].className = "pixel"; 
}
document.getElementById("pixel-board").children[indice1] = "\n";
}
