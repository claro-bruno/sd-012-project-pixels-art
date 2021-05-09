let cores = document.querySelectorAll(".color")
cores[0].style.background = "black";
cores[1].style.background = "red";
cores[2].style.background = "blue";
cores[3].style.background = "green";
cores[0].className += " selected";

function creatingBoard(contador) {
  for (index = 0; index < contador; index++) {
    let line = document.createElement("div");
    line.className = "linePixel";
    document.querySelector("#pixel-board").appendChild(line);
  };
  let linesPixel = document.querySelectorAll(".linePixel");
  for (index = 0; index < linesPixel.length; index++) {
    for (key = 0; key < contador; key++) {
      let pixelS = document.createElement("div");
      pixelS.className = "pixel";
      linesPixel[index].appendChild(pixelS);
    };
  };
};
creatingBoard(5);

document.addEventListener("click", function (call) {
  if (call.target.className === "color") {
    let del = document.querySelector(".selected");
    del.className = "color";
    call.target.className = "color selected"
  };
});

document.addEventListener("click", function (toColor) {
  if (toColor.target.className === "pixel") {
    let cor = document.querySelector(".selected").style.background;
    toColor.target.style.background = cor;
  };
});

let local = document.querySelector("body");
let creatingButton = document.createElement("button");
creatingButton.id = "clear-board";
creatingButton.innerHTML = "Limpar";
let section = document.querySelector("#pixel-board");
local.insertBefore(creatingButton, section);

document.querySelector("#clear-board").addEventListener("click", function () {
  let pixel = document.querySelectorAll(".pixel");
  for (key in pixel) {
    pixel[key].style.background = "white";
  };
});
