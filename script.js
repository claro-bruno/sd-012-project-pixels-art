window.onload = function () {
    document.querySelector('#cor1').style.backgroundColor = 'black'
    document.querySelector('#cor2').style.backgroundColor = 'blueviolet'
    document.querySelector('#cor3').style.backgroundColor = 'red'
    document.querySelector('#cor4').style.backgroundColor = 'royalblue'
    document.querySelector('#cor1').className = "color selected"
    document.body.addEventListener ('click', function(event){
        if (event.target.className === 'color') {
            document.querySelector('.selected').className = 'color'
            event.target.className = 'color selected'
        }
    }
    )
    document.body.addEventListener ('click', function (event){
        if (event.target.className === 'pixel') {
            event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor
        }
    }
    )
}