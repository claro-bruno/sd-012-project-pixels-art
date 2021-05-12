
window.onload = function () {
    let firstColor = document.querySelector("#color1");
    firstColor.classList.add("selected");
    firstColor.style.background = "black";
}

function colorSelector () {
    let color1 = document.querySelector("#color1");
    color1.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })

    let color2 = document.querySelector("#color2");
    color2.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })

    let color3 = document.querySelector("#color3");
    color3.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })

    let color4 = document.querySelector("#color4");
    color4.addEventListener('click', function(event) {
        let activeColor = document.querySelector(".selected");
        activeColor.classList.remove("selected");
        event.target.classList.add("selected");
    })
};
colorSelector ();

function pixelBoardColor() {
    
    const printPixel = document.getElementsByClassName("pixel");

    for (let index = 0; index < printPixel.length; index += 1) {
      printPixel[index].addEventListener('click', (event) => {
        let selectedColor = document.querySelector('.selected');
        let selectedBackgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
        event.target.style.backgroundColor = selectedBackgroundColor;
      });
    };
  };
pixelBoardColor();
