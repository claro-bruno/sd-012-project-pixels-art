document.querySelectorAll(".color")[0].style.background="black";
document.querySelectorAll(".color")[1].style.background="violet";
document.querySelectorAll(".color")[2].style.background="salmon";
document.querySelectorAll(".color")[3].style.background="yellow";

window.onload = document.querySelectorAll(".color")[0].className = "color selected"


let black =  document.getElementsByClassName("color")[0];
let violet = document.getElementsByClassName("color")[1];
let salmon = document.getElementsByClassName("color")[2];
let yellow = document.getElementsByClassName("color")[3];


function changeSelected(event){

let changes = document.querySelector(".selected");

changes.classList.remove("selected");
event.target.classList.add("selected");

}

black.addEventListener("click" , changeSelected);
violet.addEventListener("click" , changeSelected);
salmon.addEventListener("click" , changeSelected);
yellow.addEventListener("click" , changeSelected);

