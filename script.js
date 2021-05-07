document.querySelectorAll(".color")[0].style.background = "black";
document.querySelectorAll(".color")[1].style.background = "violet";
document.querySelectorAll(".color")[2].style.background = "salmon";
document.querySelectorAll(".color")[3].style.background = "yellow";

let tabble = document.querySelector("#pixel-board");

function CreateBox(event) {
  for (let i = 0; i < event; i += 1) {
    let linhasTr = document.createElement("tr");
    linhasTr.className = "linha"
    tabble.appendChild(linhasTr);
    for (let index = 0; index < event; index += 1) {
      let colunasTd = document.createElement("td");
      colunasTd.className = "coluna pixel"
      linhasTr.appendChild(colunasTd);

    }

  }
}

let butons = document.getElementById("generate-board");

butons.addEventListener("click", function () {

  let linhas = document.querySelectorAll(".linha")
  if(linhas) {
    for (let i = 0; i < linhas.length; i += 1) {
      tabble.removeChild(tabble.lastChild);
    }
  }
  
  let inputs = document.getElementById("board-size").value;

  CreateBox(inputs);

});





window.onload = document.querySelectorAll(".color")[0].className = "color selected"

let black = document.getElementsByClassName("color")[0];
let violet = document.getElementsByClassName("color")[1];
let salmon = document.getElementsByClassName("color")[2];
let yellow = document.getElementsByClassName("color")[3];


function changeSelected(event) {

  let changes = document.querySelector(".selected");

  changes.classList.remove("selected");
  event.target.classList.add("selected");

}

black.addEventListener("click", changeSelected);
violet.addEventListener("click", changeSelected);
salmon.addEventListener("click", changeSelected);
yellow.addEventListener("click", changeSelected);


tabble.addEventListener("click", function (event) {

  event.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;

});

let botaoApagar = document.querySelector("#clear-board")

botaoApagar.addEventListener("click", function () {

  let pixels = document.querySelectorAll(".pixel")

  for (let i = 0; i < pixels.length; i += 1) {

 pixels[i].style.backgroundColor = "white";

  }

});
