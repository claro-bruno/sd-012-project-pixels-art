window.onload = function () {
    const color1 = document.querySelectorAll('.color')[0];
    const color2 = document.querySelectorAll('.color')[1];
    const color3 = document.querySelectorAll('.color')[2];
    const color4 = document.querySelectorAll('.color')[3];

    color1.classList.add('selected');

    function selectColor1() {
        color1.className = 'color selected';
        color2.className = 'color';
        color3.className = 'color';
        color4.className = 'color';
    }

    function selectColor2() {
        color1.className = 'color';
        color2.className = 'color selected';
        color3.className = 'color';
        color4.className = 'color';
    }

    function selectColor3() {
        color1.className = 'color';
        color2.className = 'color';
        color3.className = 'color selected';
        color4.className = 'color';
    }

    function selectColor4() {
        color1.className = 'color';
        color2.className = 'color';
        color3.className = 'color';
        color4.className = 'color selected';
    }

    color1.addEventListener('click', selectColor1);
    color2.addEventListener('click', selectColor2);
    color3.addEventListener('click', selectColor3);
    color4.addEventListener('click', selectColor4);
}