let blackSquare = document.querySelectorAll('.color')[0];
blackSquare.style.backgroundColor = 'black'

let redSquare = document.querySelectorAll('.color')[1];
redSquare.style.backgroundColor = 'red'

let yellowSquare = document.querySelectorAll('.color')[2];
yellowSquare.style.backgroundColor = 'yellow'

let greenSquare = document.querySelectorAll('.color')[3];
greenSquare.style.backgroundColor = 'green'


document.addEventListener('click', function(event){
    let target = event.target;
    if (target.classList.contains('pixel')) {
        target.style.backgroundColor = selected;
    }
    if (target.classList.contains('color')) {
        for (let item of target.parentNode.children) {
            item.className = ('color');
        }
        target.className = ('color selected');
        selected = window.getComputedStyle(target).backgroundColor;
    } 
});

window.onload = function () {
    selected = window.getComputedStyle(blackSquare).backgroundColor;
};


document.addEventListener('click', function(event) {
    let target= event.target;
    
})

