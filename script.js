let palleteColors= document.querySelectorAll(".color")
document.querySelectorAll(".color")[0].style.backgroundColor ="black";
document.querySelectorAll(".color")[1].style.backgroundColor ="red";
document.querySelectorAll(".color")[2].style.backgroundColor ="blue";
document.querySelectorAll(".color")[3].style.backgroundColor ="green";

let pixelBoard = document.querySelector("#pixel-board")
function createPixel (result){
    for (let index = 0; index < result; index += 1){
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixelBoard.appendChild(pixel);
    for (let index2 = 1; index2 < result; index2 += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixelBoard.appendChild(pixel);
          }
    }
}

createPixel(5)

function pixelsColors (cor){
    let pixel = document.querySelectorAll(".pixel");
    for(index = 0; index < pixel.length; index +=1){
        pixel[index].addEventListener('click', function(event){
            event.target.style.backgroundColor = cor
        })
    }
}

for (index = 0; index < palleteColors.length; index +=1){
    palleteColors[index].addEventListener("click", function(event){
    let colorSelected = document.querySelector('.selected');
    if( event.target.classList !== "color selected"){
        event.target.classList.add("selected");
        colorSelected.classList.remove("selected");
        pixelsColors(event.target.style.backgroundColor);
        }
    })
}


