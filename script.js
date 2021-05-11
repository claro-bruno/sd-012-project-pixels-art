document.querySelectorAll(".color")[0].style.background = "black";

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
  

  if(inputs === ""){
    alert("Board inválido!")
  }

  if( inputs <= 5  ){
    inputs = 5;
  }
  if(inputs >= 50){
    inputs = 50;
  }

  CreateBox(inputs);
});

window.onload = CreateBox(5);

window.onload = document.querySelectorAll(".color")[0].className = "color selected"

let black = document.getElementsByClassName("color")[0];
let violet = document.getElementsByClassName("color")[1];
let salmon = document.getElementsByClassName("color")[2];
let yellow = document.getElementsByClassName("color")[3];
let all = document.getElementById("allColors");

function changeSelected(event) {

  let changes = document.querySelector(".selected");

  changes.classList.remove("selected");
  event.target.classList.add("selected");

}

black.addEventListener("click",  changeSelected);
violet.addEventListener("click", changeSelected);
salmon.addEventListener("click", changeSelected);
yellow.addEventListener("click", changeSelected);
all.addEventListener("click",changeSelected);


tabble.addEventListener("click", function (event) {

  event.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;
  event.target.style.backgroundColor = document.querySelector(".selected").value

});


let botaoApagar = document.querySelector("#clear-board")

botaoApagar.addEventListener("click", function () {

  let pixels = document.querySelectorAll(".pixel")

  for (let i = 0; i < pixels.length; i += 1) {

 pixels[i].style.backgroundColor = "white";

  }

});

function RandomColor(){

let color1 = Math.random() * 255;
let color2 = Math.random() * 255; 
let color3 = Math.random() * 255;

return `rgb(${color1},${color2},${color3})`;

};

yellow.style.backgroundColor = RandomColor();
salmon.style.backgroundColor = RandomColor();
violet.style.backgroundColor = RandomColor();
