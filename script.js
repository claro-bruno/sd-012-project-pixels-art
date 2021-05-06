window.onload = function() {
    let lines = document.querySelectorAll(".line");

    fillPixelBoard(lines);

    function createPixel(className) {
        let pixel = document.createElement("div");
        pixel.className = className;
        return pixel;
    };

    function createLine(className) {
        let line = document.createElement("div");
        box.className = className;
        return line;
    };

    function fillPixelBoard(lines) {
        for(let index = 0; index < lines.length; index += 1) {
        pixelBox(lines[index]);
        };
    };

    function pixelBox(divline){
        
        for (let pixelIndex = 0; pixelIndex < 5; pixelIndex += 1){
            let pixel = createPixel('pixel');
            divline.appendChild(pixel);   
        };  

    };
};


