// Selecionar a cor

function selectedColor (event){
    let atualSelected = document.querySelector(".selected");
    atualSelected.classList.remove("selected");

    event.target.className = "color selected";
};

let colorsList = document.querySelectorAll(".color");

for (let index = 0; index < colorsList.length; index += 1) {
    colorsList[index].addEventListener("click", selectedColor);
};

