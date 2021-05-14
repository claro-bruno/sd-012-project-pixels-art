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



