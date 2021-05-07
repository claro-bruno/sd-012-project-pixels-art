window.onload = firstColor

    let black = document.getElementById('black');
    black.addEventListener('click', firstColor);

    function firstColor() {
        black.className = 'color selected';
    }
    
    const color = document.getElementsByClassName('color');
    for (let i = 0; i < color.length; i += 1) {
        let corSelecionada = color[i];
        corSelecionada.addEventListener('click', 
        function() {
            const ultima = document.querySelector('.selected');
            ultima.classList.remove('selected');
            corSelecionada.className = 'color selected';
        })
    }
    
    const pixel = document.getElementsByClassName('pixel');
    const cor = document.getElementsByClassName('selected');
    function recebeClick() {
        for (let index = 0; index < pixel.length; index +=1) {
            pixel[i].addEventListener("click",function(){
                if(pixel[i].style.backgroundColor != cor.style.backgroundColor) {
                pixel[i].style.backgroundColor = cor.style.backgroundColor
                }
            });
        }
    }
    recebeClick();

