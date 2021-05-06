

window.onload = function() {
    let lines = document.querySelectorAll(".line");
    
    let black = document.getElementById("black");
    let red = document.getElementById("red");
    let blue = document.getElementById("blue");
    let green = document.getElementById("green");

   function colorSelector(){
    black.addEventListener('click', event);
    red.addEventListener('click', event);
    blue.addEventListener('click', event);
    green.addEventListener('click', event);
   };

   function event(event){
    let selected = document.querySelector(".selected");
    selected.classList.remove('selected');
    event.target.classList.add('selected');
   };

    fillPixelBoard(lines);
    colorSelector();
    

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


