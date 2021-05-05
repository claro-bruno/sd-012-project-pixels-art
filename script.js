


function randomcolor () {
    return "#" + parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, "0");
}




function pintando (event) {
    let colorSelected = document.querySelector(".selected").style.backgroundColor;
    event.target.style.backgroundColor = colorSelected;
};

let pixelsList = document.querySelectorAll(".pixel");

for(let index = 0; index < pixelsList.length; index += 1) {
    pixelsList[index].style.backgroundColor = "white";
    pixelsList[index].addEventListener("click", pintando);
};


