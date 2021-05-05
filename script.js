// Pega os 4 p e seleciona
let list = document.querySelectorAll(".color")
// Variavel com 4 cores 
let cores = ["black", "purple", "red", "blue"]

// Define a cor de cada das 4 lista para cada cor das variavel cores
function paletaArco(){
        for (let index = 0; index < list.length; index++) {
           list[index].style.background = cores[index];
        }
}
paletaArco();