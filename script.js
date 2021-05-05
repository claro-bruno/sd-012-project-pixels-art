window.onload = function () {

    let colorSelection = document.getElementById('color-palette');

    colorSelection.addEventListener('click', function () {
        let selectedColor = event.target.id;
        let nomeDaCorEscolhida = document.querySelector(".selected-color");

        nomeDaCorEscolhida.innerHTML = selectedColor.toUpperCase();
    })
}