let selectColor = document.getElementById('color-palette');
selectColor.addEventListener('click', function(event){
    let select = document.getElementsByClassName('selected');
    select[0].className = 'color';
    event.target.className = 'color selected'
})