let blackSquare = document.querySelector('#color1');
blackSquare.style.backgroundColor = 'black'

let redSquare = document.querySelector('#color2');
redSquare.style.backgroundColor = 'red'

let yellowSquare = document.querySelector('#color3');
yellowSquare.style.backgroundColor = 'yellow'

let greenSquare = document.querySelector('#color4');
greenSquare.style.backgroundColor = 'green'


document.onload = () => {
    let firstSquare = document.querySelector('.color')[0];
    firstSquare.className('selected')
    firstSquare.style.backgroundColor= 'black'
}