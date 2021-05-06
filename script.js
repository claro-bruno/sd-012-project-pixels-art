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
        for (let index = 1; index < result; index += 1) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixelBoard.appendChild(pixel);
          }    
    }
}

createPixel(5)
