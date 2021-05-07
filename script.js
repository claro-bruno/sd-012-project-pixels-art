

window.onload = function() {
    let lines = document.querySelectorAll(".line");
    let black = document.getElementById("black");
    let red = document.getElementById("red");
    let blue = document.getElementById("blue");
    let green = document.getElementById("green");
    let pixelSelected = document.getElementsByClassName("pixel");

    

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
        window.getComputedStyle(selected).getPropertyValue('background-color');
    };

    function pixelSelector(){ 
        for(let index = 0; index < pixelSelected.length; index += 1){
            pixelSelected[index].addEventListener('click', painted);
        };
    };

    function painted(event){
             
        if(black.classList.contains('selected')){
            event.target.style.backgroundColor = "black";
        } else if(red.classList.contains('selected')){
            event.target.style.backgroundColor = "red";
        } else if(blue.classList.contains('selected')){
            event.target.style.backgroundColor = "blue";
        } else if(green.classList.contains('selected')){
            event.target.style.backgroundColor = "green";
        };
    };

    fillPixelBoard(lines);
    colorSelector();
    pixelSelector();

    function createPixel(className) {
        let pixel = document.createElement("div");
        pixel.className = className;
        return pixel;
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


