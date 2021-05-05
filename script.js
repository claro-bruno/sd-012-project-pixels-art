window.onload = function () {
    setColor();
};

function setColor() {
    let divsColor = document.querySelectorAll('.color');
    let colorsList = [
      'black',
      'blue',
      'yellow',
      'pink'
    ];

    for (index = 0; index < divsColor.length; index += 1) {
        divsColor[index].style.backgroundColor = colorsList[index];
        if(colorsList[index] === 'black'){
            divsColor[index].className += ' selected';
        };
    };
  };
