window.onload = function () {
    let colorList = [
        "black",
        "orange",
        "red",
        "yellow",
    ];
    let pixelsColor = document.querySelectorAll(".color");
    let listOfPixelx = document.querySelectorAll(".pixel");

    setInitialColors();

    function setInitialColors() {
        for (index = 0; index < pixelsColor.length; index += 1) {
            pixelsColor[index].querySelectorAll.backgroundColor = colorsList[index];
            if (colorsList[index] === "black") {
                pixelsColor[index].className += "selected";
            };
        };
    };
};