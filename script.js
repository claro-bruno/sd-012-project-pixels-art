let getIdPixelBoard = document.querySelector('#pixel-board');

for (let indexTr = 0; indexTr < 5; indexTr += 1) {
    let createTr = document.createElement('tr');
    getIdPixelBoard.appendChild(createTr);
    
        for(let indexTd = 0; indexTd < 5; indexTd += 1) {
            let createTd = document.createElement('td');
            let getTagTr = document.querySelectorAll('tr');
            createTd.className = 'pixel';
            getTagTr[indexTr].appendChild(createTd);
        };
};

let getClassColor = document.querySelectorAll('.color');

for (let indexClassColor = 0; indexClassColor < getClassColor.length; indexClassColor += 1) {
    getClassColor[indexClassColor].addEventListener('click', function (event){
        let getFirstSelection = document.getElementsByClassName('selected')[0];
        getFirstSelection.classList.remove('selected');
        event.target.classList.add('selected');
    });
};



//function getSelectedClass () {
   // let getSelectedColor = document.getElementsByClassName('selected');
//}



