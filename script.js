let list = document.querySelectorAll(".color")
let cores = ["black", "purple", "red", "blue"]
    // let cores = ["black", "red", "blue", "purple"];
function paletaArco(){
        for (let index = 0; index < list.length; index++) {
           list[index].style.background = cores[index];
        }
}

paletaArco();