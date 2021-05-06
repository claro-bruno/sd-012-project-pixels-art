let pixels = document.getElementsByClassName('pixel');
let clear = document.getElementById('clear-board');
clear.addEventListener('click', function () {
     for (let index = 0; index < pixels.length; index += 1){
         pixels[index].style.backgroundColor = '#ffffff';
        
}
    });
    

   