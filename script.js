window.onload = function () {
    document.querySelector('#cor1').style.backgroundColor = 'black'
    document.querySelector('#cor1').className = "color selected"
    document.body.addEventListener ('click', function (event){
        if (event.target.className === 'pixel') {
            event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor
        }
    })
}