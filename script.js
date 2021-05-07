window.onload = firstColor

    let black = document.getElementById('black');
    black.addEventListener('click', firstColor);

    function firstColor() {
        black.className = 'color selected';
    }
    
    const color = document.getElementsByClassName('color');
    for (let i = 0; i < color.length; i += 1) {
        let corSelecionada = color[i];
        corSelecionada.addEventListener('click', function () {
            const ultima = document.querySelector('.selected');
            ultima.classList.remove('selected');
            corSelecionada.className = 'color selected';
        })
    }

  