document.querySelectorAll(".color")[0].style.background = "black";
document.querySelectorAll(".color")[1].style.background = "violet";
document.querySelectorAll(".color")[2].style.background = "salmon";
document.querySelectorAll(".color")[3].style.background = "yellow";

window.onload = document.querySelectorAll(".color")[0].className = "color selected"


let black = document.getElementsByClassName("color")[0];
let violet = document.getElementsByClassName("color")[1];
let salmon = document.getElementsByClassName("color")[2];
let yellow = document.getElementsByClassName("color")[3];
let button = document.getElementsByClassName("color")[4];

function changeSelected(event) {

  let changes = document.querySelector(".selected");

  changes.classList.remove("selected");
  event.target.classList.add("selected");

}

black.addEventListener("click", changeSelected);
violet.addEventListener("click", changeSelected);
salmon.addEventListener("click", changeSelected);
yellow.addEventListener("click", changeSelected);



let pixels = document.getElementById("pixel-board");

pixels.addEventListener("click", function (event) {

  event.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;

});


let botao = document.getElementById("clear-board");

botao.addEventListener("click", function () {

  for (i = 0; i < 25; i += 1) {

    document.querySelectorAll(".pixel")[i].style.backgroundColor = "white";

  }
});
